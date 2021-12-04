import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/Home';
import { LoginScreen } from '../screens/Login';
import { SignupScreen } from '../screens/Signup';
import { useAuth } from '../contexts/Auth';
import { LoadingScreen } from '../screens/Loading';

const MainNav = createNativeStackNavigator();
export const MainNavStack = () => {
  const { currentUser, splashScreen } = useAuth();
  if (splashScreen) return <LoadingScreen />;

  // https://reactnavigation.org/docs/auth-flow/
  // Recommended to use ONE Navigator via docs
  return (
    <MainNav.Navigator>
      {currentUser ? (
        <>
          <MainNav.Screen name="Home" component={HomeScreen} />
        </>
      ) : (
        <>
          <MainNav.Screen name="Login" component={LoginScreen} />
          <MainNav.Screen name="Signup" component={SignupScreen} />
        </>
      )}
    </MainNav.Navigator>
  );
};
