export const getCart = /* GraphQL */ `
  query getCart($cartId: String!) {
    cart(cartId: $cartId) {
      id
      totalPrice
      taxes
      lines
    }
  }
`;
