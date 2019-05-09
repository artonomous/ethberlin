import ApolloClient from "apollo-boost";

export const client = new ApolloClient({
  // uri: "http://b5cd4227.ngrok.io/cli/graphql"
  uri: "https://api.thegraph.com/subgraphs/id/QmRwZfHo18PF3HqRzauCzRLojY1BBDgqqQWmgeT1NevopH",
});
