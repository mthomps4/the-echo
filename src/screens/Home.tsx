import React, { useState } from 'react';
import { Box, Button, Center, Text } from 'native-base';
import { useFindUsersQuery } from '../../types';
import { useAuth } from '../contexts/Auth';
import { Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export const HomeScreen = () => {
  const [image, setImage] = useState(null);
  const { data, error, loading } = useFindUsersQuery();
  const { signOut } = useAuth();

  const openImagePickerAsync = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (pickerResult.cancelled === true) {
      return;
    }

    setImage(pickerResult.uri);
  };

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

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={openImagePickerAsync}> Pick an Image </Button>
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
    </Box>
  );
};
