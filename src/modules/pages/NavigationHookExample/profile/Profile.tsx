import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, View} from 'react-native';

const ProfilePage = () => {
  const {goBack} = useNavigation();
  return (
    <View>
      <Button title="Go Back" onPress={goBack} />
    </View>
  );
};

export default ProfilePage;
