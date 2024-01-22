import mongoose from "mongoose";

interface UserDocument extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  cartId: string;
  role: string;
}

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    cartId: { type: String, required: true },
    role: { type: String, required: true },
  },
  { timestamps: true }
);

const UserModel =
  mongoose.models.users || mongoose.model<UserDocument>("users", UserSchema);

export { UserModel };
export type { UserDocument };
