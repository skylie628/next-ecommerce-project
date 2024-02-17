import connectMongo from "../generated/mongoose/mongodb";
import { CataloguesModel } from "../generated/mongoose/models/catalogues.model";
export const getCatalogues = async () => {
  await connectMongo();
  const catalogues = await CataloguesModel.find().lean();
  return (
    catalogues?.map((cataloguesItem) => ({
      _id: cataloguesItem._id,
      name: cataloguesItem.name,
      path: `/catalogues/${cataloguesItem.slug}`,
    })) || []
  );
};
