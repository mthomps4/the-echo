import React from 'react';
import { Box, Center, Text } from 'native-base';
import { useFindUsersQueryQuery } from '../../types';

export const HomeScreen = () => {
  const a = 1;
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
        <Text>{user.email}</Text>
      ))}
    </Box>
  );
};
