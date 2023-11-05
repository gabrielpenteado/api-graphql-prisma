import { gql } from "@apollo/client";

export const typeDefs = gql`
  type Query {
    products: [Product!]
  }

  type Product {
    id: ID!
    title: String!
    qty: Int!
    url: String!
  }
`;
