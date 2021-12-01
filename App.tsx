import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Box } from 'native-base';
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const API_URL = process.env.API_URL || 'localhost:4000/api/graphql';

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NativeBaseProvider>
        <StatusBar style="auto" />
        <Box>Hello world</Box>
      </NativeBaseProvider>
    </ApolloProvider>
  );
}
