/* eslint-disable no-restricted-globals */
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import fetch from 'cross-fetch';
import { AUTH_TOKEN_KEY } from '../constants';

export function createApolloClient() {
  const uri = process.env.BASE_API_URL || 'http://localhost:4000/api/graphql';
  const httpLink = createHttpLink({
    uri,
    fetch,
  });

  const authLink = setContext(async (_, { headers }) => {
    const token = await AsyncStorage.getItem(AUTH_TOKEN_KEY);

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : null,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return client;
}
