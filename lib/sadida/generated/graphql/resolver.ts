import connectMongo from "../mongoose/mongodb";
import { ProductModel } from "../mongoose/models/product.model";
import { GroupModel } from "../mongoose/models/group.model";
import { CataloguesModel } from "../mongoose/models/catalogues.model";
import { getOrSetCache } from "@/lib/utils";
import { SortOrder } from "mongoose";
const _ = require("lodash");
import mongoose from "mongoose";
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
          name: args.catalogues[0].toUpperCase() + args.catalogues.slice(1),
        })) || {};
      if (!cataloguesId) return [];
      const collections = await GroupModel.find({
        catalogues: cataloguesId,
      }).lean();
      return collections;
    },
    product: async (_: any, args: any) => {
      await connectMongo();
      const product = await ProductModel.findOne({ sku: args.sku }).lean();
      return product;
    },
    products: async (_: any, args: any) => {
      const data = await getOrSetCache(
        `${args.pageIndex ?? "1"}${args.group ?? "none"}${args.sortBy}`,
        async () => {
          console.log("miss");
          await connectMongo();
          const filterCriteria: Record<
            string,
            string | number | Record<string, string>
          > = {};
          if (args.group) {
            filterCriteria.group = args.group;
          }
          if (args.catalogues) {
            console.log("catalogues", args.catalogues);
            const catalogues = await CataloguesModel.findOne({
              name: args.catalogues[0].toUpperCase() + args.catalogues.slice(1),
            });
            filterCriteria.catalogues = catalogues ? catalogues._id : "none";
          }
          let sortOptions:
            | string
            | { [key: string]: SortOrder | { $meta: "textScore" } }
            | [string, SortOrder][]
            | null
            | undefined = {};
          if (args.sortBy && args.sortBy === "best_rating") {
            sortOptions.score = 1;
          }
          if (args.sortBy && args.sortBy === "most_reviewed") {
            sortOptions.n_o_reviews = 1;
          }
          const itemsPerPage = 10;
          const skipCount = (args.pageIndex - 1) * itemsPerPage;
          const count = await ProductModel.countDocuments(filterCriteria);
          let products = await ProductModel.find(filterCriteria)
            .skip(skipCount)
            .limit(itemsPerPage)
            .sort(sortOptions)
            .lean();

          return { products, count: products.length };
        }
      ).catch((err) => console.log("err la" + err.locations));
      if (!data) throw new Error("Unable to get resources");
      return data;
    },
  },
};
