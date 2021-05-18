import { gql } from "graphql-modules";

export const User = gql`
  type User {
    id: Int!
    email: String!
    username: String!
    teams: [Team!]!
  }

  type Query {
    getUser(id: Int!): User!
    allUsers: [User!]!
  }
  # Creating the user
  type Mutation {
    register(username: String!, email: String!, password: String!): Boolean!
  }
`;
