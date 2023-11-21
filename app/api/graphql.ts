import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { typeDefs } from "@/lib/sadida/generated/graphql/schema";
import { resolvers } from "@/lib/sadida/generated/graphql/resolver";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export default startServerAndCreateNextHandler(server);
