import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

export default function createApolloClient() {
  return new ApolloClient({
    ssrMode: true,
    link: new createHttpLink({
      uri: "http://qa2gapi.enetdefender.com/graphql", // Server URL (must be absolute)
      // credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
    }),
    cache: new InMemoryCache(),
  });
}
