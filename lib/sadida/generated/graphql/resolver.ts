import connectMongo from "../mongoose/mongodb";
import { ProductModel } from "../mongoose/models/product.model";
import { GroupModel } from "../mongoose/models/group.model";
import { CataloguesModel } from "../mongoose/models/catalogues.model";
import { getOrSetCache } from "@/lib/utils";
import { SortOrder } from "mongoose";
import { ProductOrderField } from "@/lib/constants";
const _ = require("lodash");
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
      console.log(args);
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
            console.log(args.query.catalogues);
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
      console.log("group la ", args.group, " data la ", data);
      if (!data) throw new Error("Unable to get resources");
      return data;
    },
  },
};
