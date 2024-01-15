import mongoose from "mongoose";
interface CartDocument extends mongoose.Document {
  userId: String;
  cartId: String;
  status: String;
  products: Array<{ productId: String; quantity: Number }>;
  products_count: Number;
}
const CartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    cartId: { type: String, required: true },
    status: { type: String, required: true, default: "active" },
    products: {
      type: Array<{
        productId: { type: String; required: true; ref: "products" };
        quantity: Number;
      }>,
      required: true,
    },
    products_count: { type: Number, require: true },
  },
  { timestamps: true }
);
export const CartModel =
  mongoose.models.carts || mongoose.model<CartDocument>("carts", CartSchema);
export type { CartDocument };
