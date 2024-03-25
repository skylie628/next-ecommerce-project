import * as jwt from "jsonwebtoken";
import { ReadonlyURLSearchParams } from "next/navigation";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
//import { redis } from "../lib/sadida/generated/redis/redis";
import { createClient } from "redis";
export const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams
) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;

  return `${pathname}${queryString}`;
};
export const createProductImgUrl = (name: string, type: string): string => {
  return `https://firebasestorage.googleapis.com/v0/b/skylie-store.appspot.com/o/Products%2FMedium%2F${type}%2F${name}.png?alt=media`;
};
export const ensureStartsWith = (stringToCheck: string, startsWith: string) =>
  stringToCheck.startsWith(startsWith)
    ? stringToCheck
    : `${startsWith}${stringToCheck}`;
export const getImageUrl = (name: string) => {
  return name;
};
export async function getOrSetCache(key: string, cb: () => Promise<any>) {
  const redis = createClient({
    url: process.env.REDIS_URL,
  });
  await redis.connect();
  const cache = await redis.get(key).catch((error: any) => console.log(error));
  console.log("cache ", key);
  if (cache != null) {
    console.log("Cache hit");
    await redis.disconnect();
    console.log("return: state open: ", redis.isOpen);
    return JSON.parse(cache);
  } else {
    console.log("Cache miss");
    const data = await cb();
    await redis.set(key, JSON.stringify(data), {
      NX: true,
    });
    await redis.disconnect();
    return data;
  }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
const secret = process.env.NEXTAUTH_SECRET!;

export const signJWT = (
  object: Record<any, any>,
  options?: jwt.SignOptions | undefined
) => {
  return jwt.sign(object, secret, {
    ...(options && options),
    // algorithm: 'HS256'
  });
};

export const verifyJWT = (token: string) => {
  try {
    const decoded = jwt.verify(token, secret);
    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (e: any) {
    return {
      valid: false,
      expired: e.message === "jwt expired",
      decoded: null,
    };
  }
};
