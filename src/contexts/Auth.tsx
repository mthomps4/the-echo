import AsyncStorage from '@react-native-community/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { AUTH_TOKEN_KEY, AUTH_USER_KEY } from '../constants';
import { useLoginMutationMutation } from '../../types';
import { ApolloError } from '@apollo/client';

const AuthContext = createContext({
  currentUser: null,
  splashScreen: false,
  signout: null,
  login: null,
});

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [splashScreen, setSplashScreen] = useState(false);

  const [loginMutation] = useLoginMutationMutation();

  // Validate if a user is still logged in
  useEffect(() => {
    const checkForUser = async () => {
      setSplashScreen(true);
      const userJson = await AsyncStorage.getItem(AUTH_USER_KEY);
      const user = userJson ? JSON.parse(userJson) : null;
      setCurrentUser(user);
      setSplashScreen(false);
    };

    checkForUser();
  }, []);

  const login = async (email: string, password: string, errorHandler: (e: ApolloError) => void) => {
    // Use LoadingModal transition
    const onCompleted = async (data) => {
      const {
        login: { token, user },
      } = data;
      await AsyncStorage.setItem(AUTH_TOKEN_KEY, token);
      await AsyncStorage.setItem(AUTH_USER_KEY, JSON.stringify({ user }));
      await setCurrentUser(user);
    };

    const onError = (e: ApolloError) => {
      errorHandler(e);
    };

    await loginMutation({ variables: { email, password }, onCompleted, onError });
  };

  const signout = async () => {
    await AsyncStorage.multiRemove([AUTH_TOKEN_KEY, AUTH_USER_KEY]);
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, splashScreen, signout, login }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
