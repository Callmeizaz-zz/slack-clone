import { createModule } from "graphql-modules";
import { messageResolver } from "../resolvers/message";
import { Message } from "../schema/message";

export const messageModule = createModule({
  id: "message",
  resolvers: [messageResolver],
  typeDefs: [Message],
});
