import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from './utils/apolloClient';
import { MainNavStack } from './navs/MainNavStack';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './contexts/Auth';

const apolloClient = createApolloClient();
export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <NavigationContainer>
          <NativeBaseProvider>
            <StatusBar style="auto" />
            <MainNavStack />
          </NativeBaseProvider>
        </NavigationContainer>
      </AuthProvider>
    </ApolloProvider>
  );
}
