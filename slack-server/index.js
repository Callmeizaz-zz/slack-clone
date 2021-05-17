import express from "express";
import { ApolloServer } from "apollo-server-express";
import { application } from "./graphql/index";
import models from "./models";

const app = express();
const graphqlEndpoints = "/graphql";

const schema = application.createSchemaForApollo();
//Creatinf the server with external schema
const server = new ApolloServer({
  schema,
  playground: {
    endpoint: graphqlEndpoints,
  },
  //modules: [UserModule],
  context: {
    models,
    user: {
      id: 1,
    },
  },
});

server.applyMiddleware({ app, path: graphqlEndpoints });
const url = "localhost:8081";
models.sequelize.sync().then(() => {
  console.log(`Server started at ${url}`);
  app.listen(8081);
});
