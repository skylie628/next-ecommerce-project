"use server";
//server actions
import {
  getCart,
  createCart,
  addToCart,
  removeFromCart,
  updateCart,
} from "@/lib/sadida";
import { cookies } from "next/headers";
export const addItem = async (
  variantId: string | undefined
): Promise<String | undefined> => {
  console.log(variantId);
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
    await addToCart(cartId, [{  variantId, quantity: 1 }]);
  } catch (e) {
    return "Error adding item to cart";
  }
};
export const removeItem = async (
  lineId: string
): Promise<String | undefined> => {
  const cartId = cookies().get("cartId")?.value;
  if (!cartId) {
    return "Missing cart ID";
  }
  try {
    await removeFromCart(cartId, [lineId]);
  } catch (e) {
    return "Unable to checkout";
  }
};

export const updateItemQuantity = async ({
  lineId,
  variantId,
  quantity,
}: {
  lineId: string;
  variantId: string;
  quantity: number;
}) => {
  const cartId = cookies().get("cartId")?.value;
  if (!cartId) {
    return "Missing cart Id";
  }
  try {
    await updateCart(cartId, [
      {
        id: lineId,
        merchandiseId: variantId,
        quantity,
      },
    ]);
  } catch (e) {
    return "Error updating item quantity";
  }
};
