import mongoose from "mongoose";

interface CatalogueDocument extends mongoose.Document {
  id: string;
  name: string;
}

const CatalogueSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
  },
  { timestamps: true }
);

const CatalogueModel =
  mongoose.models.catalogues ||
  mongoose.model<CatalogueDocument>("catalogues", CatalogueSchema);

export { CatalogueModel };
export type { CatalogueDocument };
