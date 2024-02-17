import mongoose from "mongoose";
console.log("mongoose la", mongoose.models);
interface GroupDocument extends mongoose.Document {
  _id: string;
  name: string;
  slug: string;
}

const GroupSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    name: { type: String, required: true },
    slug: { type: String, required: true },
  },
  { timestamps: true }
);

const GroupModel =
  (mongoose.models && mongoose.models.groups) ||
  mongoose.model<GroupDocument>("groups", GroupSchema);

export { GroupModel };
export type { GroupDocument };
