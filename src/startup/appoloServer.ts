const { ApolloServer } = require("apollo-server-express");
import { buildSchema } from "type-graphql";
import path from "path";

export const apolloServer = async (app: any) => {
  try {
    const schema = await buildSchema({
      resolvers: [
        path.dirname(__dirname) + "/modules/**/*.ts",
        path.dirname(__dirname) + "/modules/**/*.js",
      ],
      validate: false,
    });

    const apolloServer = new ApolloServer({
      schema,
      context: ({ req }: any) => ({ req }),
    });

    apolloServer.applyMiddleware({ app });
  } catch (error) {
    console.log(error);
  }
};
