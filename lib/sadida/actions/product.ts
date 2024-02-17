import { ProductQueryCriteria } from "../types";
//import connectMongo from "../generated/mongoose/mongodb";
//model
import { CataloguesModel } from "../generated/mongoose/models/catalogues.model";
import { GroupModel } from "../generated/mongoose/models/group.model";
import { ProductModel } from "../generated/mongoose/models/product.model";
import { VariantModel } from "../generated/mongoose/models/variant.model";
//type
import { SortOrder } from "mongoose";
import { ProductOrderField } from "../types";
//utils
import { getOrSetCache } from "@/lib/utils";
import connectMongo from "../generated/mongoose/mongodb";
import { createProductImgUrl } from "@/lib/utils";
export const getProducts = async ({
  query,
  sortKey,
  reverse,
}: {
  query: ProductQueryCriteria;
  sortKey: string;
  reverse: boolean;
}) => {
  console.log("start query ", query, sortKey, reverse);
  const { products } = await getOrSetCache(
    `${query.pageIndex ?? "1"}${query.catalogues}${"none"}${sortKey}${reverse}`,
    async () => {
      await connectMongo();
      const filterCriteria: Record<
        string,
        string | number | Record<string, string>
      > = {};
      console.log("start query ", query);
      if (query.catalogues) {
        const catalogues = await CataloguesModel.findOne({
          slug: query.catalogues,
        });

        filterCriteria.catalogues = catalogues ? catalogues._id : "none";
      }
      if (query.keyword) {
        filterCriteria.title = {
          $regex: query.keyword,
          $options: "i",
        };
      }
      if (!query.keyword && query.group) {
        const group = await GroupModel.findOne({
          slug: query.group,
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
      const sortNumber = reverse ? -1 : 1;
      switch (sortKey) {
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
      const skipCount = (query.pageIndex - 1) * itemsPerPage;
      const count = await ProductModel.countDocuments(filterCriteria);
      let products = await ProductModel.find(filterCriteria)
        .sort(sortOptions)
        .skip(skipCount)
        .limit(itemsPerPage)
        .lean();
      return { products, count: products.length };
    }
  );
  if (!products) throw new Error("Unable to get resources");
  const returnedProducts =
    products?.map((product) => ({
      sku: product.sku,
      title: product.title,
      slug: product.slug,
      maxPrice: product.maxPrice,
      minPrice: product.minPrice,
      score: product.score,
      n_o_reviews: product.n_o_reviews,
      thumbnailPath: product.images[4]
        ? `https://firebasestorage.googleapis.com/v0/b/skylie-store.appspot.com/o/Products%2FMedium%2Fshowing%20image%20thumnail%2F${product.images[4]}.png?alt=media`
        : "",
      showingImagePath: product.images[0]
        ? `https://firebasestorage.googleapis.com/v0/b/skylie-store.appspot.com/o/Products%2FMedium%2Fstr%20image%2F${product.images[0]}.png?alt=media&token=dd117ea5-2906-48b3-919c-a28b05f31881`
        : "",
      path: `/product/${product.slug}`,
    })) || [];
  return returnedProducts;
};
export const getProduct = async (slug: string) => {
  await connectMongo();
  const product = await ProductModel.findOne({ slug }).lean();
  // Fetch the variants
  const variants = product?._id
    ? await VariantModel.find({
        productId: product._id,
      }).lean()
    : [];
  const { images, ...returnProduct } = product;
  return {
    images: [
      {
        large: createProductImgUrl(images[0], "str image"),
        thumbnail: createProductImgUrl(images[2], "straight image thumbnail"),
        alt: `straight image of product ${returnProduct.title}`,
      },
      {
        large: createProductImgUrl(images[1], "side image"),
        thumbnail: createProductImgUrl(images[3], "side image thumbnail"),
        alt: `side image of product ${returnProduct.title}`,
      },
      {
        large: createProductImgUrl("default1", "side image"),
        thumbnail: createProductImgUrl("default1", "side image thumbnail"),
        alt: `side image of product ${returnProduct.title}`,
      },
      {
        large: createProductImgUrl("default2", "side image"),
        thumbnail: createProductImgUrl("default2", "side image thumbnail"),
        alt: `side image of product ${returnProduct.title}`,
      },
    ],
    ...returnProduct,
    variants,
  };
};
