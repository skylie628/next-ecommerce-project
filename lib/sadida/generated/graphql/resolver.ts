import connectMongo from "../mongoose/mongodb";
import { ProductModel } from "../mongoose/models/product.model";
import { UserModel } from "../mongoose/models/user.model";
import { CartModel } from "../mongoose/models/cart.model";
import { GroupModel } from "../mongoose/models/group.model";
import { CataloguesModel } from "../mongoose/models/catalogues.model";
import { getOrSetCache } from "@/lib/utils";
import { SortOrder } from "mongoose";
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
      return product;
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
      if (userId) {
        //check if user is existed
        const user = UserModel.find({ _id: userId });
        if (user) {
          const filter = {
            userId,
            state = "active",
          };
          const upsert = {
            products,
          };
          const option = {
            new: true,
            upsert: true,
          };
          UserModel.findOneAndUpdate(filter, upsert, {
            new: true,
            upsert: true, // Make this update into an upsert
          });
        }
      }
    },
    addCartItemToCart: async (_: any, args: any) => {
      const { cartId, items } = args;
      const cart = await CartModel.findOne({ cartId, status: "active" });
      if (cart) {
      }
    },
  },
};
