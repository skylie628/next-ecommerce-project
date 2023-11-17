import { getCart } from "@/lib/sadida";
import { cookies } from "next/headers";
import CartModal from "./model";

export default async function Cart() {
  const cartId = cookies().get("cartId")?.value;
  let cart;

  if (cartId) {
    console.log("backend");
    cart = await getCart(cartId);
  }

  return <CartModal cart={cart} />;
}
