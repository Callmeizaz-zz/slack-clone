import { gql } from "graphql-modules";

export const Channel = gql`
  type Channel {
    id: Int!
    name: String!
    public: Boolean!
    messages: [Message!]!
    user: [User!]!
  }

  extend type Mutation {
    createChannel(
      name: String!
      teamId: Int!
      public: Boolean = false
    ): Boolean!
  }
`;
