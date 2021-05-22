import React from 'react';
import { ApolloProvider } from "@apollo/client/react";
import { ApolloClient, InMemoryCache } from "@apollo/client";


const client = new ApolloClient({
  uri: "http://localhost:4000/graphql?",
  cache: new InMemoryCache(),
});

export function ApolloClientProvider({ children }) {

  

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
