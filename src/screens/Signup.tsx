import * as React from 'react';
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  HStack,
  Text,
  Link,
  Pressable,
} from 'native-base';
export const SignupScreen = ({ navigation }) => {
  return (
    <Box safeArea p="2" w="90%" maxW="290" py="8" mx="auto">
      <Heading
        size="lg"
        color="coolGray.800"
        _dark={{
          color: 'warmGray.50',
        }}
        fontWeight="semibold"
      >
        Welcome
      </Heading>
      <Heading
        mt="1"
        color="coolGray.600"
        _dark={{
          color: 'warmGray.200',
        }}
        fontWeight="medium"
        size="xs"
      >
        Sign up to continue!
      </Heading>
      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>First Name</FormControl.Label>
          <Input />
        </FormControl>
        <FormControl>
          <FormControl.Label>Last Name</FormControl.Label>
          <Input />
        </FormControl>
        <FormControl>
          <FormControl.Label>Email</FormControl.Label>
          <Input />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password" />
        </FormControl>
        <FormControl>
          <FormControl.Label>Confirm Password</FormControl.Label>
          <Input type="password" />
        </FormControl>
        <Button mt="2" colorScheme="indigo">
          Sign up
        </Button>
        <HStack mt="6" justifyContent="center">
          <Text
            fontSize="sm"
            color="coolGray.600"
            _dark={{
              color: 'warmGray.200',
            }}
          >
            Already have an account?{' '}
          </Text>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text color="green.500" fontWeight="medium" fontSize="sm">
              Login
            </Text>
          </Pressable>
        </HStack>
      </VStack>
    </Box>
  );
};
