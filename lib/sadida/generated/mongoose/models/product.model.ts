import mongoose from "mongoose";
var Schema = mongoose.Schema;
interface Option {
  name: string;
  value: string[];
  position: number;
}
interface ProductDocument extends mongoose.Document {
  _id: string;
  title: string;
  slug: string;
  quantity: string;
  sku: string;
  images: string[];
  group: string;
  catalogues: string;
  price: number;
  score: number;
  n_o_reviews: number;
  options: Option[];
  variants: string[];
}

const ProductSchema = new mongoose.Schema(
  {
    _id: { type: String },
    title: { type: String, required: true },
    quantity: { type: String },
    slug: { type: String },
    sku: { type: String, required: true },
    images: { type: Array<String> },
    group: { type: String, ref: "groups" },
    catalogues: { type: String, ref: "catalogues" },
    price: { type: Number },
    score: { type: Number },
    n_o_reviews: { type: Number },
    options: { type: Array<Option> },
    variant: { type: Array<String> },
  },
  { timestamps: true }
);

const ProductModel =
  mongoose.models.products ||
  mongoose.model<ProductDocument>("products", ProductSchema);

export { ProductModel };
export type { ProductDocument };
