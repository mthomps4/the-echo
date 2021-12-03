import React from 'react';
import { Box, Button, Center, Text } from 'native-base';
import { useFindUsersQueryQuery } from '../../types';
import AsyncStorage from '@react-native-community/async-storage';
import { AUTH_TOKEN_KEY, AUTH_USER_KEY } from '../constants';
import { useAuth } from '../contexts/Auth';

export const HomeScreen = () => {
  const { data, error, loading } = useFindUsersQueryQuery();
  const { signout } = useAuth();

  if (loading) {
    return <Center>Loading...</Center>;
  }

  if (error || !data) {
    return <Center>Ooops...</Center>;
  }

  const { users } = data;

  return (
    <Box>
      <Box>
        <Button onPress={signout}>Logout</Button>
      </Box>
      <Center>
        <Box>
          {users.map((user) => (
            <Text key={user.id}>{user.email}</Text>
          ))}
        </Box>
      </Center>
    </Box>
  );
};
