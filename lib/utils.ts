import { ReadonlyURLSearchParams } from "next/navigation";
import { redis } from "../lib/sadida/generated/redis/redis";
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

export async function getOrSetCache(key: string, cb: () => Promise<any>) {
  await redis.connect();
  const cache = await redis.get(key).catch((error: any) => console.log(error));
  if (cache != null) {
    console.log("Cache hit");
    await redis.disconnect();
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
