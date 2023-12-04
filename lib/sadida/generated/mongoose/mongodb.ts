const { MONGO_URL } = process.env;
if (!MONGO_URL) {
  throw new Error(
    "Unable to connect to MongoDB, please check .env file and make sure you define environment"
  );
}
import mongoose from "mongoose";

const connectMongo = async () =>
  mongoose
    .connect(MONGO_URL as string, {
      dbName: "SADIDA",
    })
    .then(() => console.log("connect sucessfully"))
    .catch((err) => console.log(err));
mongoose.set("debug", (collectionName, method, query, doc) => {
  console.log(`${collectionName}.${method}`, JSON.stringify(query), doc);
});
export default connectMongo;
