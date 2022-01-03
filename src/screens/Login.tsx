import React, { useState } from 'react';
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  HStack,
  Pressable,
  Center,
} from 'native-base';
import { useAuth } from '../contexts/Auth';
import { LoadingModal } from '../components/LoadingModal';

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleLoginError = (e) => {
    // TODO: Realworld -- use React Hook Form and Parse GQL Errors
    setLoading(false);
    console.error('BOOM', e);
    setErrors(e);
  };

  const handleSubmit = async () => {
    setLoading(true);
    await login({ email, password }, handleLoginError);
  };

  return (
    <Box safeArea p="2" py="8" w="90%" maxW="290" mx="auto">
      <LoadingModal isLoading={loading} />
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
          <Input
            onChange={(e: any) => setEmail(e.target.value)}
            value={email}
            placeholder="spaceman@roadster.com"
          />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input
            type="password"
            onChange={(e: any) => setPassword(e.target.value)}
            value={password}
            placeholder="redH0tSecretSauce"
          />
        </FormControl>
        <Button mt="2" colorScheme="green" onPress={handleSubmit}>
          Sign in
        </Button>
        {errors && (
          <Center>
            <Text color="red.700">She doesn't even go here?!</Text>
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
            Don't have an account?{' '}
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
