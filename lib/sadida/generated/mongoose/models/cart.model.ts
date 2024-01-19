import mongoose from "mongoose";
interface CartDocument extends mongoose.Document {
  userId: string;
  cartId: string;
  status: string;
  lines: string[];
  products_count: number;
  createdAt?: Date;
  updatedAt?: Date;
}
const CartSchema = new mongoose.Schema(
  {
    userId: { type: String },
    cartId: { type: String, required: true },
    status: { type: String, required: true, default: "active" },
    lines: { type: Array<String> },
    products_count: { type: Number, require: true },
  },
  { timestamps: true }
);
export const CartModel =
  mongoose.models.carts || mongoose.model<CartDocument>("carts", CartSchema);
export type { CartDocument };
