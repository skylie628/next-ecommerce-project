import { ReadonlyURLSearchParams } from "next/navigation";
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
  console.log("cache ", cache, key);
  if (/*cache != null*/ false) {
    console.log("Cache hit");
    await redis.disconnect();
    console.log("return: state open: ", redis.isOpen);
    return JSON.parse(cache);
  } else {
    console.log("Cache miss");
    const data = await cb();
    await redis.set(key, JSON.stringify(data), {
      EX: 3600,
      NX: true,
    });
    await redis.disconnect();
    return data;
  }
}
