import { createModule } from "graphql-modules";
import { teamResolver } from "../resolvers/team";
import { Team } from "../schema/team";

export const teamModule = createModule({
  id: "teams",
  typeDefs: [Team],
  resolvers: teamResolver,
});
