import mongoose from "mongoose";

interface GroupDocument extends mongoose.Document {
  id: string;
  name: string;
}

const GroupSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
  },
  { timestamps: true }
);

const GroupModel =
  mongoose.models.groups ||
  mongoose.model<GroupDocument>("groups", GroupSchema);

export { GroupModel };
export type { GroupDocument };
