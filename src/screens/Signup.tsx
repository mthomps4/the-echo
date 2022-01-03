import React, { useState } from 'react';
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  HStack,
  Text,
  Pressable,
  Center,
} from 'native-base';
import { useAuth } from '../contexts/Auth';
export const SignupScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState(null);
  const { signUp } = useAuth();

  const handleErrors = (e) => {
    console.error('BOOM', e);
    setErrors(e);
  };

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      setErrors([{ password: 'Passwords Must Match' }]);
      return;
    }

    signUp(
      {
        data: {
          email,
          password,
          profile: {
            create: { firstName, lastName },
          },
        },
      },
      handleErrors
    );
  };

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
          <Input onChange={(e: any) => setFirstName(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormControl.Label>Last Name</FormControl.Label>
          <Input onChange={(e: any) => setLastName(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormControl.Label>Email</FormControl.Label>
          <Input onChange={(e: any) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input onChange={(e: any) => setPassword(e.target.value)} type="password" />
        </FormControl>
        <FormControl>
          <FormControl.Label>Confirm Password</FormControl.Label>
          <Input onChange={(e: any) => setConfirmPassword(e.target.value)} type="password" />
        </FormControl>
        <Button mt="2" colorScheme="indigo" onPress={handleSubmit}>
          Sign up
        </Button>
        {errors && (
          <Center>
            <Text color="red.700">At least try! How hard is it!</Text>
          </Center>
        )}
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
