import * as bcrypt from "bcrypt";
import { UserModel } from "@/lib/sadida/generated/mongoose/models/user.model";
type CredentialsType = {
  email: string;
  password: string;
  name?: string;
};

export async function signInWithCredentials(credentials: CredentialsType) {
  const user = await UserModel.findOne({ email: credentials.email });
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
