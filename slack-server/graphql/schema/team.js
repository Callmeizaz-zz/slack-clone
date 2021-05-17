import { gql } from "graphql-modules";

export const Team = gql`
  type Team {
    owner: User!
    memebers: [User!]!
    channels: [Channel!]!
  }
  extend type Mutation {
    createTeam(name: String!): Boolean!
  }
`;
