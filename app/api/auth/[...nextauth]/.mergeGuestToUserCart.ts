import { redis } from "@/lib/sadida/generated/redis";
export default async function mergeGuestToUserCart({
  guestCartId,
  userCartId,
}: {
  guestCartId: string;
  userCartId: string;
}) {
  const guestCart =
    (guestCartId && (await redis.hgetall(`cart:${guestCartId}`))) || {};
  const userCart =
    (userCartId && (await redis.hgetall(`cart:${userCartId}`))) || {};
  for (let [key, value] of Object.entries(guestCart)) {
    if (userCart[key]) {
      await redis.hset(
        `cart:${userCartId}`,
        key,
        Number(userCart[key]) + Number(value)
      );
    } else {
      await redis.hset(`cart:${userCartId}`, key, Number(value));
    }
  }
  // update user cart with merged object
}
