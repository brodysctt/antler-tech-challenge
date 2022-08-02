import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";

const MyApp = ({ Component, pageProps }) => {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: "http://localhost:4000/v1/graphql",
      headers: {
        "x-hasura-admin-secret": "secret",
      },
    }),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;
