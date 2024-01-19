function createCartMutation(mutationName: string): string {
  return `
      mutation ${mutationName}($cartId: String, $sku: String!) {
        ${mutationName}(cartId: $cartId, sku: $sku) {
          cartId
        }
      }
    `;
}

export const addToCartMutation = createCartMutation("addLineToCart");
export const decreaseLineQuantityFromCartMutation = createCartMutation(
  "decreaseLineQuantityFromCart"
);
export const removeLineFromCartMutation =
  createCartMutation("removeLineFromCart");
