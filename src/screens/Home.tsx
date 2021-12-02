import React from 'react';
import { Box, Center, Text } from 'native-base';
import { useFindUsersQueryQuery } from '../../types';

export const HomeScreen = () => {
  const { data, error, loading } = useFindUsersQueryQuery();

  console.log({ data, error, loading });

  if (loading) {
    return <Center>Loading...</Center>;
  }

  if (error || !data) {
    return <Center>Ooops...</Center>;
  }

  const { users } = data;

  return (
    <Box>
      {users.map((user) => (
        <Text key={user.id}>{user.email}</Text>
      ))}
    </Box>
  );
};
