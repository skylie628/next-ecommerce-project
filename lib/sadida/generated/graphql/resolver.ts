import { ProductModel } from "../mongoose/models/product.model";
import { VariantModel } from "../mongoose/models/variant.model";
import { UserModel } from "../mongoose/models/user.model";
import { CartModel } from "../mongoose/models/cart.model";
import { GroupModel } from "../mongoose/models/group.model";
import { CataloguesModel } from "../mongoose/models/catalogues.model";
import { getOrSetCache } from "@/lib/utils";
import { SortOrder } from "mongoose";
//db
import connectMongo from "../mongoose/mongodb";
import { redis } from "../redis";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcrypt";
const mongoose = require("mongoose");
import { ProductOrderField } from "@/lib/constants";
export const resolvers = {
  Query: {
    catalogues: async () => {
      await connectMongo();
      const catalogues = await CataloguesModel.find().lean();
      return catalogues;
    },
    collections: async (_: any, args: any) => {
      await connectMongo();
      const { _id: cataloguesId } =
        (await CataloguesModel.findOne({
          slug: args.catalogues,
        })) || {};
      if (!cataloguesId) return [];
      const collections = await GroupModel.find({
        catalogues: cataloguesId,
      }).lean();
      return collections;
    },
    product: async (_: any, args: any) => {
      await connectMongo();
      const product = await ProductModel.findOne({ slug: args.slug }).lean();
      console.log(product._id);
      // Fetch the variants

      const variants = product._id
        ? await VariantModel.find({
            productId: 18,
          }).lean()
        : [];
      console.log(variants);
      return { ...product, variants };
    },
    products: async (_: any, args: any) => {
      const data = await getOrSetCache(
        `${args.query.pageIndex ?? "1"}${args.query.catalogues}${
          args.collection ?? "none"
        }${args.sortKey}${args.reverse}`,
        async () => {
          await connectMongo();
          const filterCriteria: Record<
            string,
            string | number | Record<string, string>
          > = {};

          if (args.query.catalogues) {
            const catalogues = await CataloguesModel.findOne({
              slug: args.query.catalogues,
            });

            filterCriteria.catalogues = catalogues ? catalogues._id : "none";
          }
          if (args.query.keyword) {
            filterCriteria.title = {
              $regex: args.query.keyword,
              $options: "i",
            };
          }
          if (!args.query.keyword && args.query.group) {
            const group = await GroupModel.findOne({
              slug: args.query.group,
              catalogues: filterCriteria.catalogues,
            });
            filterCriteria.group = group ? group._id : "none";
          }
          let sortOptions:
            | string
            | { [key: string]: SortOrder | { $meta: "textScore" } }
            | [string, SortOrder][]
            | null
            | undefined = {};
          const sortNumber = args.reverse ? -1 : 1;
          switch (args.sortKey) {
            case ProductOrderField.Rating:
              sortOptions.score = sortNumber;
              break;
            case ProductOrderField.MinimalPrice:
              sortOptions.price = sortNumber;
              break;
            case ProductOrderField.CreatedAt:
              sortOptions.createAt = sortNumber;
              break;
          }
          const itemsPerPage = 10;
          const skipCount = (args.query.pageIndex - 1) * itemsPerPage;
          const count = await ProductModel.countDocuments(filterCriteria);
          let products = await ProductModel.find(filterCriteria)
            .sort(sortOptions)
            .skip(skipCount)
            .limit(itemsPerPage)
            .lean();
          return { products, count: products.length };
        }
      );
      if (!data) throw new Error("Unable to get resources");
      return data;
    },
    cart: async (_: any, args: any) => {
      const { cartId } = args;
      if (!cartId) {
        throw new Error("Missing cart id");
      }
      const cart = await CartModel.findOne({ cartId, status: "active" })
        .populate("products.productId")
        .lean();
      return cart;
    },
  },
  Mutation: {
    addUser: async (_: any, args: any) => {
      await connectMongo();
      const existingUser = await UserModel.findOne({ email: args.email });
      if (existingUser) throw new Error("User with that email already exists");

      //hash password before adding to database
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(args.password, salt);
      //create new User
      const newUser = await UserModel.create({
        _id: new mongoose.Types.ObjectId().toHexString(),
        name: args.name,
        email: args.email,
        emailVerified: false,
        password: hashPassword,
        role: "MEMBER",
      }).then((rs) => rs.toObject());
      const { password, ...newUserWithoutPassword } = newUser;
      return newUserWithoutPassword;
    },
    createCart: async (_: any, args: any) => {
      const { userId, products = [] } = args;
      if (!userId) {
        const cart = await CartModel.create({ status: "active", products: [] });
        return cart;
      }
      //check if user is existed
      const filter = {
        userId,
        status: "active",
      };
      const upsert = {
        products,
      };
      const option = {
        new: true,
        upsert: true,
      };
      const cart = CartModel.findOneAndUpdate(filter, upsert, option);
      return cart;
    },

    addLineToCart: async (_: any, args: any, context: any) => {
      await connectMongo();
      let { cartId, sku } = args;
      console.log("cartId", sku);
      //check if variant is existed
      const variant = await VariantModel.findOne({ sku });
      if (!variant) throw new Error("Variant not found");
      // cart not exist ? create new cart
      if (!cartId) {
        cartId = uuidv4();
        /* const cart = await CartModel.create({
          cartId,
          status: "active",
          line: [],
          products_count: 0,
        });*/
        // Set an expiration time for the cart in Redis
        const EXPIRE_TIME_IN_SECONDS = 60 * 60 * 24; // 24 hours
        await redis.hset(`cart:${cartId}`, `line:${sku}`, "");
        await redis.expire(`cart:${cartId}`, EXPIRE_TIME_IN_SECONDS);
      }
      //check if item is existed in redis cart
      const cartLine = Number(
        await redis.hget(`cart:${cartId}`, `line:${sku}`)
      );
      if (cartLine > 0) {
        //update item quantity
        await redis.hincrby(`cart:${cartId}`, `line:${sku}`, 1);
      }
      //if item not existed in redis cart
      else {
        //add new item to redis cart
        await redis.hset(`cart:${cartId}`, `line:${sku}`, 1);
      }
      return { cartId };
    },
    decreaseLineQuantityFromCart: async (_: any, args: any, context: any) => {
      await connectMongo();
      let { cartId, sku } = args;
      console.log("cartId", sku);
      //check if variant is existed
      const variant = await VariantModel.findOne({ sku });
      if (!variant) throw new Error("Variant not found");
      // cart not exist ? create new cart
      if (!cartId) {
        new Error("CartId expired");
      }
      //check if item is existed in redis cart
      const cartLine = Number(
        await redis.hget(`cart:${cartId}`, `line:${sku}`)
      );
      //if line not existed inside cart => throw error
      if (!cartLine) {
        throw new Error("Item not existed in cart");
      }
      //if line existed inside cart and amount = 1 => remove line  from cart
      if (cartLine === 1) {
        await redis.hdel(`cart:${cartId}`, `line:${sku}`);
      }
      //if line existed inside cart and amount > 1 => decrease cart Item by 1
      if (cartLine > 1) {
        await redis.hincrby(`cart:${cartId}`, `line:${sku}`, -1);
      }
      console.log(
        "quantity la: ",
        await redis.hget(`cart:${cartId}`, `line:${sku}`)
      );
      return { cartId };
    },
    removeLineFromCart: async (_: any, args: any, context: any) => {
      await connectMongo();
      let { cartId, sku } = args;
      // cart not exist ? create new cart
      if (!cartId) {
        new Error("CartId expired");
      }
      redis.hdel(`cart:${cartId}`, `line:${sku}`, function (err, reply) {
        if (err) {
          console.error(err);
        } else {
          console.log(`Key 'line:${sku}' removed from 'cart:${cartId}'`);
        }
      });
      console.log(
        "quantity la: ",
        await redis.hget(`cart:${cartId}`, `line:${sku}`)
      );
      return { cartId };
    },
  },
};
