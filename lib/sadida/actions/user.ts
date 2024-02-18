"use server";
import * as bcrypt from "bcrypt";
import connectMongo from "../generated/mongoose/mongodb";
import { UserModel } from "../generated/mongoose/models/user.model";
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
//User
export async function createUser({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) {
  await connectMongo();
  const existingUser = await UserModel.findOne({ email });
  if (existingUser) throw new Error("User with that email already exists");

  //hash password before adding to database
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  //create new User
  const newUser = await UserModel.create({
    _id: new mongoose.Types.ObjectId().toHexString(),
    name: name,
    email: email,
    emailVerified: false,
    password: hashPassword,
    cartId: uuidv4(),
    role: "MEMBER",
  }).then((rs) => rs.toObject());
  delete newUser.password;
  return newUser;
}
