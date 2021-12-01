import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Box } from 'native-base';
import React from 'react';

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style="auto" />
      <Box>Hello world</Box>
    </NativeBaseProvider>
  );
}
