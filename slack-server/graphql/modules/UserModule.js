import { createModule } from "graphql-modules";
import { UserResolver } from "../resolvers/user";
import { Team } from "../schema/team";
import { User } from "../schema/user";
import { Channel } from "../schema/channel";
import { Message } from "../schema/message";
import { Error } from "../schema/error";

export const UserModule = createModule({
  id: "user_module",
  dirname: __dirname,
  typeDefs: [Team, User, Channel, Message, Error],
  resolvers: [UserResolver],
});
