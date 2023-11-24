import mongoose from "mongoose";

interface CataloguesDocument extends mongoose.Document {
  _id: string;
  name: string;
}

const CataloguesSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    name: { type: String, required: true },
  },
  { timestamps: true }
);

const CataloguesModel =
  mongoose.models.catalogues ||
  mongoose.model<CataloguesDocument>("catalogues", CataloguesSchema);

export { CataloguesModel };
export type { CataloguesDocument };
