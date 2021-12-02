import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/Home';

const MainNav = createNativeStackNavigator();
export const MainNavStack = () => {
  return (
    <MainNav.Navigator>
      <MainNav.Screen name="Home" component={HomeScreen} />
    </MainNav.Navigator>
  );
};
