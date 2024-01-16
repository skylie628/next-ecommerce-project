import mongoose, { Document, Schema } from "mongoose";

interface LineDocument extends Document {
  variantId: string;
  cartId: string;
  quantity: number;
}

const LineSchema = new Schema({
  variantId: { type: String, required: true },
  cartId: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const LineModel =
  mongoose.models.lines || mongoose.model<LineDocument>("lines", LineSchema);

export { LineModel };
export type { LineDocument };
