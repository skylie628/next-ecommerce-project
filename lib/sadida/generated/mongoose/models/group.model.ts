import mongoose from "mongoose";

interface GroupDocument extends mongoose.Document {
  name: string;
}

const GroupSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

const GroupModel =
  mongoose.models.Group || mongoose.model<GroupDocument>("Group", GroupSchema);

export { GroupModel };
export type { GroupDocument };
