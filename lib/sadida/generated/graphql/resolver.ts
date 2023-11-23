import connectMongo from "../mongoose/mongodb";
import { ProductModel } from "../mongoose/models/product.model";
import { CatalogueModel } from "../mongoose/models/catalogue.model";
import { getOrSetCache } from "@/lib/utils";
import { SortOrder } from "mongoose";
export const resolvers = {
  Query: {
    catalogues: async () => {
      await connectMongo();
      const catalogues = await CatalogueModel.find().lean();
      return catalogues;
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
          // const count = await ProductModel.countDocuments(filterCriteria);
          const products = await ProductModel.find(filterCriteria)
            .skip(skipCount)
            .limit(itemsPerPage)
            .sort(sortOptions)
            .lean();
          return { products, count: products.length };
        }
      );
      if (!data) throw new Error("Unable to get resources");
      return data;
    },
  },
};