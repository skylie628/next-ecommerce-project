import { gql } from "graphql-tag";

export const typeDefs = gql`
  enum Role {
    MEMBER
    GUESS
    ADMIN
  }
  type Collection {
    _id: ID!
    name: String
    slug: String
  }
  type Option {
    name: String
    value: String
  }
  type Options {
    name: String
    value: [String]
  }
  type Variant {
    _id: ID!
    productId: String
    sku: String
    title: String
    options: [Option]
    instock_available: Int
    reserved_available: Int
    price: Float
  }
  type Product {
    id: ID!
    title: String!
    quantity: String
    slug: String
    sku: String!
    images: [String]
    catalogues: String
    group: String
    score: Float
    n_o_reviews: Int
    minPrice: Float
    maxPrice: Float
    options: [Options]
    variants: [Variant]
  }

  type Catalogues {
    _id: ID!
    name: String!
    slug: String!
  }

  type Cart {
    id: ID!
    cartItems: [CartItem]
  }
  type CartItem {
    id: ID!
    productId: String!
    variantId: String!
    variantName: String
    productTitle: String
    productPrice: Float
    productCategory: String
    productSize: String
    productImage: String
    productQuantity: String
    quantity: Int!
  }
  input CartItemInput {
    id: ID!
    productId: String!
    variantId: String!
    variantName: String
    productTitle: String
    productPrice: Float
    productCategory: String
    productSize: String
    productImage: String
    productQuantity: String
    quantity: Int!
  }
  type Order {
    id: ID!
    userId: Int
    guessId: Int
    total: Int
    status: String
    orderItems: [OrderItem]
  }

  type OrderItem {
    id: ID!
    orderId: Int!
    productId: String!
    productTitle: String
    productPrice: Float
    productCategory: String
    productSize: String
    productImage: String
    productQuantity: String
    quantity: Int!
  }

  type PaymentDetails {
    id: ID!
    userId: Int
    guessId: Int
    orderId: Int!
    amount_total: Float
    currency: String
    status: String
  }

  type User {
    _id: ID!
    name: String
    email: String!
    password: String
    emailVerified: Boolean
    role: Role
  }
  type ReturnedUser {
    _id: ID!
    name: String
    email: String!
    emailVerified: Boolean
    role: Role
  }

  type Review {
    id: ID!
    userId: Int
    userEmail: String
    productId: String
    rating: Int
    description: String
  }

  type ReturnedProduct {
    products: [Product]
    count: Int
  }
  input ProductQueryCriteria {
    catalogues: String
    group: String
    keyword: String
    pageIndex: Int
  }
  type Query {
    catalogues: [Catalogues]
    collections(catalogues: String!): [Collection]
    product(slug: String!): Product
    products(
      query: ProductQueryCriteria
      sortKey: String
      reverse: Boolean
    ): ReturnedProduct
    cartItems(email: String!): [CartItem]
    cart(email: String!): Cart
    order(orderId: String!): Order
    orders(email: String!): [Order]
    paymentDetails(email: String!): [PaymentDetails]
    user(email: String!): User
    reviews(productId: String!): [Review]
  }
  type ReturnedMutateLine {
    cartId: String
  }
  type Mutation {
    updateUser(email: String!, name: String, password: String): User
    addUser(name: String!, email: String!, password: String!): ReturnedUser
    addLineToCart(cartId: String, sku: String!): ReturnedMutateLine
    decreaseLineQuantityFromCart(
      cartId: String
      sku: String!
    ): ReturnedMutateLine
    removeLineFromCart(cartId: String, sku: String!): ReturnedMutateLine
    addReview(
      productId: String!
      userEmail: String!
      rating: Int!
      description: String!
    ): Review
    updateProduct(productId: String!, score: Float!, n_o_reviews: Int!): Product
    deleteCartItem(id: String!): CartItem
    createCart(email: String!): Cart
  }
`;
