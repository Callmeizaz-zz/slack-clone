import { createModule } from "graphql-modules";
import { channelResolver } from "../resolvers/channel";
import { Channel } from "../schema/channel";

export const channelModule = createModule({
  id: "channel",
  resolvers: [channelResolver],
  typeDefs: [Channel],
});
