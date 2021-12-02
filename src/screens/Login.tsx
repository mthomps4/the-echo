import React from 'react';
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Pressable,
} from 'native-base';
export const LoginScreen = ({ navigation }) => {
  const a = 1;
  console.log({ navigation });

  return (
    <Box safeArea p="2" py="8" w="90%" maxW="290" mx="auto">
      <Heading
        size="lg"
        fontWeight="600"
        color="coolGray.800"
        _dark={{
          color: 'warmGray.50',
        }}
      >
        Welcome
      </Heading>
      <Heading
        mt="1"
        _dark={{
          color: 'warmGray.200',
        }}
        color="coolGray.600"
        fontWeight="medium"
        size="xs"
      >
        Sign in to continue!
      </Heading>

      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Email</FormControl.Label>
          <Input />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password" />
          <Link
            _text={{
              fontSize: 'xs',
              fontWeight: '500',
              color: 'green.500',
            }}
            alignSelf="flex-end"
            mt="1"
          >
            Forget Password?
          </Link>
        </FormControl>
        <Button mt="2" colorScheme="green">
          Sign in
        </Button>
        <HStack mt="6" justifyContent="center">
          <Text
            fontSize="sm"
            color="coolGray.600"
            _dark={{
              color: 'warmGray.200',
            }}
          >
            I'm a new user.{' '}
          </Text>
          <Pressable onPress={() => navigation.navigate('Signup')}>
            <Text color="green.500" fontWeight="medium" fontSize="sm">
              Sign Up
            </Text>
          </Pressable>
        </HStack>
      </VStack>
    </Box>
  );
};
