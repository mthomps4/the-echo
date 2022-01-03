import React from 'react';
import { Box, Button, Center, Text } from 'native-base';
import { useFindUsersQuery } from '../../types';
import { useAuth } from '../contexts/Auth';

export const HomeScreen = () => {
  const { data, error, loading } = useFindUsersQuery();
  const { signOut } = useAuth();

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
        <Button onPress={signOut}>Logout</Button>
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
