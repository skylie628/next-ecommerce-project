"use server";
//server actions
import { getCart, createCart, addToCart } from "@/lib/sadida";
import { cookies } from "next/headers";
export const addItem = async (
  variantId: string | undefined
): Promise<String | undefined> => {
  //perform add item to cart actions
  let cartId = cookies().get("cartId")?.value;
  let cart;
  if (cartId) {
    cart = await getCart(cartId);
  }
  if (!cart || !cartId) {
    cart = await createCart();
    cartId = cart.id;
    cookies().set("cartId", cartId);
  }
  if (!variantId) {
    return "Missing product variant ID";
  }
  try {
    await addToCart(cartId, [{ merchandiseId: variantId, quantity: 1 }]);
  } catch (e) {
    return "Error adding item to cart";
  }
};
