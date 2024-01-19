"use server";
import { cookies } from "next/headers";
import {
  addToCart,
  decreaseLineQuantityFromCart,
  removeLineFromCart,
} from "../generated";
export async function createCart() {}
export async function getCart() {}
export async function addLineToCart(params: { sku: string }) {
  let cartId = cookies().get("cartId")?.value;
  const { sku } = params;
  const res = await addToCart({
    cartId,
    sku,
  });
  console.log(res.data.cartId);
  if (!cartId) {
    cookies().set("cartId", res.data.cartId);
  }
  console.log("cartId la", cookies().get("cartId")?.value);
}
export async function removeLineFromCart(params: { sku: string }) {
  let cartId = cookies().get("cartId")?.value;
  if (!cartId) return "missing cart id";
  const { sku } = params;
  const res = await removeLineFromCart({
    cartId,
    sku,
  });
  console.log(res.data);
  if (!cartId) {
    // cookies().set("cartId", res.data.cartId);
  }
}
export async function decreaseLineQuantityFromCart(params: { sku: string }) {
  let cartId = cookies().get("cartId")?.value;
  if (!cartId) return "missing cart id";
  const { sku } = params;
  const res = await decreaseLineQuantityFromCart({
    cartId,
    sku,
  });
  console.log(res.data);
  if (!cartId) {
    // cookies().set("cartId", res.data.cartId);
  }
}
