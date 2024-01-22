"use server";
import { cookies } from "next/headers";
import {
  addToCart,
  decreaseLineQuantityFromCart,
  removeLineFromCart,
  getCart,
} from "../index";
export async function getCartAction({ cartId }: { cartId: string }) {
  const returnedCart = await getCart(cartId);
  return returnedCart;
}
export async function addLineToCartAction(params: { sku: string }) {
  let cartId = cookies().get("cartId")?.value || "";
  console.log("cartId action la", cartId);
  const { sku } = params;
  console.log("sku la", sku);
  const returnedCartId = await addToCart({
    cartId,
    sku,
  }).then((res) => res?.body?.data?.addLineToCart?.cartId);
  console.log("cartId la", returnedCartId);
  //if user is guess, set cartId to cookies

  if (returnedCartId) {
    cookies().set("cartId", returnedCartId);
  }
  console.log("cartId la", cookies().get("cartId")?.value);
}
export async function removeLineFromCartAction(params: { sku: string }) {
  let cartId = cookies().get("cartId")?.value;
  if (!cartId) return "missing cart id";
  const { sku } = params;
  const res = await removeLineFromCart(cartId, sku);
  console.log("res la", res.body.data.addLineToCart);
  if (!cartId) {
    // cookies().set("cartId", res.data.cartId);
  }
}
export async function decreaseLineQuantityFromCartAction({
  sku,
}: {
  sku: string;
}) {
  let cartId = cookies().get("cartId")?.value;
  if (!cartId) return "missing cart id";
  const res = await decreaseLineQuantityFromCart(cartId, sku);
  console.log(res.data);
  if (!cartId) {
    return "error";
    // cookies().set("cartId", res.data.cartId);
  }
  console.log("res la", res);
  return "success";
}
