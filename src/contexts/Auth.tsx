import AsyncStorage from '@react-native-community/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { AUTH_TOKEN_KEY, AUTH_USER_KEY } from '../constants';
import { AuthPayload, LoginMutationMutationVariables, useLoginMutationMutation } from '../../types';
import { ApolloError } from '@apollo/client';

const AuthContext = createContext({ currentUser: null, signout: null, handleLoginSuccess: null });

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const checkForUser = async () => {
      const userJson = await AsyncStorage.getItem(AUTH_USER_KEY);
      const user = userJson ? JSON.parse(userJson) : null;
      setCurrentUser(user);
    };

    checkForUser();
  }, []);

  // TODO: Can I move login here?
  const handleLoginSuccess = async (data) => {
    const {
      login: { token, user },
    } = data;
    await AsyncStorage.setItem(AUTH_TOKEN_KEY, token);
    await AsyncStorage.setItem(AUTH_USER_KEY, JSON.stringify({ user }));
    await setCurrentUser(user);
  };

  const signout = async () => {
    await AsyncStorage.multiRemove([AUTH_TOKEN_KEY, AUTH_USER_KEY]);
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, signout, handleLoginSuccess }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
