import { gql } from "apollo-server-core";

export const Message = gql`
  type Message {
    id: Int!
    text: String!
    user: User!
    channel: Channel!
  }

  extend type Mutation {
    createMessage(channelId: Int!, text: String!): Boolean!
  }
`;
