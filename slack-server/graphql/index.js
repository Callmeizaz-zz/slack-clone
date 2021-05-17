import { createApplication } from "graphql-modules";
import { UserModule } from "../graphql/modules/UserModule";
import { channelModule } from "./modules/channelModule";
import { messageModule } from "./modules/messageModule";
import { teamModule } from "./modules/teamModule";

export const application = createApplication({
  modules: [UserModule, teamModule, channelModule, messageModule],
});
