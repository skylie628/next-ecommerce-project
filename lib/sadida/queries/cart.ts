export const getCartQuery =  `
  query getCart($cartId: String!) {
    cart(cartId: $cartId) {
      id
      totalPrice
      taxes
      lines {
        sku
        productTitle
        title
        price
        options {
          name
          value
        }
        images
        slug
        quantity
      }
    }
  }
`;
