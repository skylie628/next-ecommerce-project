import { gql } from "graphql-tag";

export const typeDefs = gql`
  enum Role {
    USER
    GUESS
    ADMIN
  }
  type Collection {
    _id: ID!
    name: String
    slug: String
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
    price: Float
    score: Float
    n_o_reviews: Int
    instock_reserved: Int
    instock_available: Int
  }

  type Catalogues {
    _id: ID!
    name: String!
    slug: String!
  }
  type Variant {
    id: ID!
    name: String!
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
    id: ID!
    name: String
    email: String!
    emailVerified: Boolean
    image: String
    password: String
    cartItems: [CartItem]
    orders: [Order]
    paymentDetails: [PaymentDetails]
    role: Role
  }
  type ReturnedUser {
    id: ID!
    name: String
    email: String!
    emailVerified: Boolean
    image: String
    cartItems: [CartItem]
    orders: [Order]
    paymentDetails: [PaymentDetails]
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
    pageIndex: Int
  }
  type Query {
    catalogues: [Catalogues]
    collections(catalogues: String!): [Collection]
    product(sku: String!): Product
    products(
      query: ProductQueryCriteria
      sortKey: String
      reverse: Boolean
    ): ReturnedProduct
    cartItems(email: String!): [CartItem]
    order(orderId: String!): Order
    orders(email: String!): [Order]
    paymentDetails(email: String!): [PaymentDetails]
    user(email: String!): User
    reviews(productId: String!): [Review]
  }

  type Mutation {
    updateUser(email: String!, name: String, password: String): User
    addUser(name: String!, email: String!, password: String!): ReturnedUser

    addToCart(
      email: String!
      productId: String!
      productTitle: String
      productPrice: Float
      productCategory: String
      productSize: String
      productImage: String
      productQuantity: String
      quantity: Int!
    ): CartItem
    addReview(
      productId: String!
      userEmail: String!
      rating: Int!
      description: String!
    ): Review
    updateProduct(productId: String!, score: Float!, n_o_reviews: Int!): Product
    deleteCartItem(id: String!): CartItem
  }
`;
