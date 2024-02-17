import { CataloguesModel } from "../generated/mongoose/models/catalogues.model";
import { GroupModel } from "../generated/mongoose/models/group.model";
import connectMongo from "../generated/mongoose/mongodb";

export const getCollections = async (catalogues: string) => {
  await connectMongo();
  const { _id: cataloguesId } =
    (await CataloguesModel.findOne({
      slug: catalogues,
    })) || {};
  if (!cataloguesId) return [];
  const collections = await GroupModel.find({
    catalogues: cataloguesId,
  }).lean();
  const default1Collection = {
    _id: -1,
    name: "All",
    slug: "all",
    path: `/catalogues/${catalogues}`,
  };
  return [
    default1Collection,
    ...(collections?.map((collection) => ({
      ...collection,
      path: `/catalogues/${catalogues}/${collection.slug}`,
    })) || []),
  ];
};
