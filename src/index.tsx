import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Box, Center } from 'native-base';
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { AuthNavStack } from './navs/AuthNavStack';
import { MainNavStack } from './navs/MainNavStack';
import { NavigationContainer } from '@react-navigation/native';

const API_URL = process.env.API_URL || 'localhost:4000/api/graphql';

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

const MainAppStack = () => {
  // const { user } = useSession();
  const user = true;

  return user ? <MainNavStack /> : <AuthNavStack />;
};

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NativeBaseProvider>
        <NavigationContainer>
          <StatusBar style="auto" />
          <MainAppStack />
        </NavigationContainer>
      </NativeBaseProvider>
    </ApolloProvider>
  );
}
