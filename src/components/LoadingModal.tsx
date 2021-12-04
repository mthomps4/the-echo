import React from 'react';
import { Text, Center } from 'native-base';
import { Modal, ActivityIndicator } from 'react-native';

export const LoadingModal = ({ isLoading }) => {
  return (
    <Modal statusBarTranslucent={true} visible={isLoading} presentationStyle="fullScreen">
      <Center flex={1}>
        <Center>
          <ActivityIndicator size="large" color="#00FFAA" />
          <Text>Loading...</Text>
        </Center>
      </Center>
    </Modal>
  );
};
