import connectMongo from "../mongoose/mongodb";
import { ProductModel } from "../mongoose/models/product.model";
export const resolvers = {
  Query: {
    product: async (_: any, args: any) => {
      await connectMongo();
      const product = await ProductModel.findOne({ sku: args.sku }).lean();
      return product;
    },
  },
};
