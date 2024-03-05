import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cltd3csph000009kyff5e28pf/master",
  cache: new InMemoryCache(),
});
