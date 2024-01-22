const bcrypt = require("bcryptjs");
import { UserModel } from "@/lib/sadida/generated/mongoose/models/user.model";
import connectMongo from "@/lib/sadida/generated/mongoose/mongodb";
type CredentialsType = {
  email: string;
  password: string;
  name?: string;
};

export async function signInWithCredentials(credentials: CredentialsType) {
  await connectMongo();
  const user = await UserModel.findOne({ email: credentials.email }).lean();
  console.log("user-signin", user);
  if (user) {
    const isValidPassword = await bcrypt.compare(
      credentials.password,
      user.password
    );
    if (!isValidPassword) {
      return null;
    }

    const { password, ...userWithoutPass } = user;
    return userWithoutPass;
  } else {
    return null;
  }
}
