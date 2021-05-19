import { gql } from "graphql-modules";

export const Error = gql`
  type Error {
    path: String!
    message: String
  }
`;
