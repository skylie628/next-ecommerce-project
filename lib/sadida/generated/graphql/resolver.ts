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
      // Fetch the variants
      const variants = product._id
        ? await VariantModel.find({
            productId: product._id,
          }).lean()
        : [];
      console.log("product fetch", product._id, variants[0]);
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
      await connectMongo();
      const cart = await redis.hgetall(`cart:${cartId}`);
      if (!cart) return;
      const cartMap = Object.entries(cart);
      const variantIds = cartMap.map(([sku, quantity]) => sku);
      const variants = await VariantModel.find({
        sku: { $in: variantIds },
      })
        .populate("productId", "slug images title -_id")
        .select("-_id")
        .lean();
      const formatVariants = variants.map((variant) => ({
        sku: variant.sku,
        title: variant.title,
        price: variant.price,
        options: variant.options,
        images: variant.productId.images,
        slug: variant.productId.slug,
        productTitle: variant.productId.title,
        quantity: parseInt(cart[variant.sku]),
      }));
      const totalPrice = formatVariants.reduce(
        (total, variant) => total + variant.price * variant.quantity,
        0
      );
      return {
        id: cartId,
        totalPrice: totalPrice,
        taxes: 0,
        lines: formatVariants,
      };
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

    addLineToCart: async (_: any, args: any, context: any) => {
      await connectMongo();
      let { cartId, sku } = args;
      console.log("addLineToCart", cartId, sku);
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
        const EXPIRE_TIME_IN_SECONDS = 60 * 5; // 24 hours
        await redis.hset(`cart:${cartId}`, sku, "");
        await redis.expire(`cart:${cartId}`, EXPIRE_TIME_IN_SECONDS);
      }
      //check if item is existed in redis cart or cart Expired
      const cartLine = Number(await redis.hget(`cart:${cartId}`, sku));
      if (cartLine > 0) {
        //update item quantity
        await redis.hincrby(`cart:${cartId}`, sku, 1);
      }
      //if item not existed in redis cart
      else {
        //add new item to redis cart
        await redis.hset(`cart:${cartId}`, sku, 1);
      }
      return { cartId };
    },
    decreaseLineQuantityFromCart: async (_: any, args: any, context: any) => {
      await connectMongo();
      let { cartId, sku } = args;
      //check if variant is existed
      const variant = await VariantModel.findOne({ sku });
      if (!variant) throw new Error("Variant not found");
      // cart not exist ? create new cart
      if (!cartId) {
        new Error("CartId expired");
      }
      //check if item is existed in redis cart
      const cartLine = Number(await redis.hget(`cart:${cartId}`, sku));
      //if line not existed inside cart => throw error
      if (!cartLine) {
        throw new Error("Item not existed in cart");
      }
      //if line existed inside cart and amount = 1 => remove line  from cart
      if (cartLine === 1) {
        await redis.hdel(`cart:${cartId}`, sku);
      }
      //if line existed inside cart and amount > 1 => decrease cart Item by 1
      if (cartLine > 1) {
        await redis.hincrby(`cart:${cartId}`, sku, -1);
      }
      return { cartId };
    },
    removeLineFromCart: async (_: any, args: any, context: any) => {
      await connectMongo();
      let { cartId, sku } = args;
      // cart not exist ? create new cart
      if (!cartId) {
        new Error("CartId expired");
      }
      redis.hdel(`cart:${cartId}`, sku, function (err, reply) {
        if (err) {
          console.error(err);
        } else {
          console.log(`Key 'line:${sku}' removed from 'cart:${cartId}'`);
        }
      });
      return { cartId };
    },
  },
};
