import mongoose from "mongoose";
var Schema = mongoose.Schema;
interface ProductDocument extends mongoose.Document {
  title: string;
  quantity: string;
  sku: string;
  images: string[];
  group: mongoose.Schema.Types.ObjectId;
  price: number;
  score: number;
  n_o_reviews: number;
  instock_reserved: number;
  instock_available: number;
}

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    quantity: { type: String },
    sku: { type: String, required: true },
    images: { type: Array<String> },
    group: { type: Schema.Types.ObjectId, ref: "Group" },
    price: { type: Number },
    score: { type: Number },
    n_o_reviews: { type: Number },
    instock_reserved: { type: Number },
    instock_available: { type: Number },
  },
  { timestamps: true }
);

const ProductModel =
  mongoose.models.products ||
  mongoose.model<ProductDocument>("products", ProductSchema);

export { ProductModel };
export type { ProductDocument };
