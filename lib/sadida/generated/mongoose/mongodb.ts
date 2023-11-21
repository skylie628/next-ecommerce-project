const { MONGO_URL } = process.env;
if (!MONGO_URL) {
  throw new Error(
    "Unable to connect to MongoDB, please check .env file and make sure you define environment"
  );
}
import mongoose from "mongoose";

const connectMongo = async () => mongoose.connect(MONGO_URL as string);

export default connectMongo;
