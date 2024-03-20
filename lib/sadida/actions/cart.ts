"use server";
import connectMongo from "../generated/mongoose/mongodb";
import { redis } from "../generated/redis";
import { cookies } from "next/headers";
import { v4 as uuidv4 } from "uuid";
import { VariantModel } from "../generated/mongoose/models/variant.model";
import { ProductModel } from "../generated/mongoose/models/product.model";
export async function getCartAction({ cartId }: { cartId: string }) {
  if (!cartId) {
    throw new Error("Missing cart id");
  }
  await connectMongo();
  const cart = await redis.hgetall(`cart:${cartId}`);
  console.log("cart redis la", cart);
  if (!cart) return;
  const cartMap = Object.entries(cart);
  const variantIds = cartMap.map(([sku, quantity]) => sku);
  const variants = await VariantModel.find({
    sku: { $in: variantIds },
  })
    .populate({
      path: "productId",
      model: ProductModel,
      select: "slug images title -_id",
    })
    .select("-_id")
    .lean();

  const formatVariants = variants.map((variant) => ({
    sku: variant.sku,
    title: variant.title,
    price: variant.price,
    options: variant.options,
    images: variant.productId.images,
    slug: variant.productId.slug,
    productTitle: variant.productId.title,
    quantity: isNaN(Number(cart[variant.sku]))
      ? 0
      : parseInt(cart[variant.sku]),
  }));
  const totalPrice = formatVariants.reduce(
    (total, variant) => total + variant.price * variant.quantity,
    0
  );
  console.log("cartId la: ", cartId);
  console.log("line la: ", formatVariants);
  return {
    id: cartId,
    totalPrice: totalPrice,
    taxes: 0,
    lines: formatVariants,
  };
}
export async function addLineToCartAction(params: { sku: string }) {
  let cartId = cookies().get("cartId")?.value || "";
  const { sku } = params;
  await connectMongo();
  //check if variant is existed
  const variant = await VariantModel.findOne({ sku });
  if (!variant) throw new Error("Variant not found");
  // cart not exist ? create new cart
  if (!cartId) {
    cartId = uuidv4();
    /* const cart = await CartModel.create({
      cartId,
      status: "active",
      line: [],
      products_count: 0,
    });*/
    // Set an expiration time for the cart in Redis
    const EXPIRE_TIME_IN_1DAY = 60 * 60 * 24; // 24 hours
    await redis.hset(`cart:${cartId}`, sku, "");
    await redis.expire(`cart:${cartId}`, EXPIRE_TIME_IN_1DAY);
  }
  //check if item is existed in redis cart or cart Expired
  const cartLine = Number(await redis.hget(`cart:${cartId}`, sku));
  console.log("cartLine la", cartLine, " id", cartId);
  if (cartLine > 0) {
    //update item quantity
    console.log("update cart", cartId);
    await redis.hincrby(`cart:${cartId}`, sku, 1);
  }
  //if item not existed in redis cart
  else {
    //add new item to redis cart
    //
    console.log("set cart", cartId);
    await redis.hset(`cart:${cartId}`, sku, 1);
    await redis.expire(`cart:${cartId}`, 60 * 60 * 24);
  }
  if (cartId) {
    cookies().set("cartId", cartId);
  }
}
export async function removeLineFromCartAction(params: { sku: string }) {
  let cartId = cookies().get("cartId")?.value;
  if (!cartId) return "missing cart id";
  const { sku } = params;
  await connectMongo();
  // cart not exist ? create new cart
  if (!cartId) {
    new Error("CartId expired");
  }
  redis.hdel(`cart:${cartId}`, sku, function (err, reply) {
    if (err) {
      console.error(err);
    } else {
      console.log(`Key 'line:${sku}' removed from 'cart:${cartId}'`);
    }
  });
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
  await connectMongo();
  //check if variant is existed
  const variant = await VariantModel.findOne({ sku });
  if (!variant) throw new Error("Variant not found");
  // cart not exist ? create new cart
  if (!cartId) {
    new Error("CartId expired");
  }
  //check if item is existed in redis cart
  const cartLine = Number(await redis.hget(`cart:${cartId}`, sku));
  //if line not existed inside cart => throw error
  if (!cartLine) {
    throw new Error("Item not existed in cart");
  }
  //if line existed inside cart and amount = 1 => remove line  from cart
  if (cartLine === 1) {
    await redis.hdel(`cart:${cartId}`, sku);
  }
  //if line existed inside cart and amount > 1 => decrease cart Item by 1
  if (cartLine > 1) {
    await redis.hincrby(`cart:${cartId}`, sku, -1);
  }
  if (!cartId) {
    return "error";
    // cookies().set("cartId", res.data.cartId);
  }
  return "success";
}
