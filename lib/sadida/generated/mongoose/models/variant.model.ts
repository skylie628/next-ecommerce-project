import mongoose, { Document, Schema } from "mongoose";
interface VariantDocument extends Document {
  productId: string;
  sku: string;
  title: string;
  options: { name: string; value: string }[];
  instock_available: number;
  reserved_available: number;
  price: number;
}

const VariantSchema = new Schema({
  productId: { type: String, required: true },
  options: { type: Array<{ name: String; value: String }> },
  instock_available: { type: Number, required: true },
  reserved_available: { type: Number, required: true },
  price: { type: Number, required: true },
});

const VariantModel =
  mongoose.models.variants ||
  mongoose.model<VariantDocument>("variants", VariantSchema);

export { VariantModel };
export type { VariantDocument };
