import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Box } from 'native-base';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from './utils/apolloClient';
import { MainNavStack } from './navs/MainNavStack';
import { AuthNavStack } from './navs/AuthNavStack';
import { NavigationContainer } from '@react-navigation/native';

// const API_URL = process.env.API_URL || 'localhost:4000/api/graphql';

// const client = new ApolloClient({
//   uri: API_URL,
//   cache: new InMemoryCache(),
// });

const MainAppStack = () => {
  // const { user } = useSession();
  const user = true;

  return user ? <MainNavStack /> : <AuthNavStack />;
};

console.log(process.env.BASE_API_URL);

const apolloClient = createApolloClient();

console.log({ apolloClient });

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <NavigationContainer>
        <NativeBaseProvider>
          <StatusBar style="auto" />
          <MainAppStack />
        </NativeBaseProvider>
      </NavigationContainer>
    </ApolloProvider>
  );
}
