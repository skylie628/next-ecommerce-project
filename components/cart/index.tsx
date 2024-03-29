import { getCartAction } from "@/lib/sadida/actions/cart";
import { cookies } from "next/headers";
import CartModal from "./model";

export default async function Cart() {
  const cartId = cookies().get("cartId")?.value;
  let cart;
  if (cartId) {
    cart = await getCartAction({ cartId });
  }
  console.log("cart la", cart);
  return <CartModal cart={cart} />;
}
