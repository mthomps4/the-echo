import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from './utils/apolloClient';
import { MainNavStack } from './navs/MainNavStack';
import { AuthNavStack } from './navs/AuthNavStack';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider, useAuth } from './contexts/Auth';

const apolloClient = createApolloClient();
const MainAppStack = () => {
  const { currentUser } = useAuth();
  return currentUser ? <MainNavStack /> : <AuthNavStack />;
};
export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <NavigationContainer>
          <NativeBaseProvider>
            <StatusBar style="auto" />
            <MainAppStack />
          </NativeBaseProvider>
        </NavigationContainer>
      </AuthProvider>
    </ApolloProvider>
  );
}
