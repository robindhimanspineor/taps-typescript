import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

import apolloClient from "../apolloClient";
import Layout from "../components/layout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient()}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
export default MyApp;
