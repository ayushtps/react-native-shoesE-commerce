import {View, Text, Alert} from 'react-native';
import React from 'react';
import Button from '../../../component/common/Button';
import auth from '@react-native-firebase/auth';

const Profile = () => {
  const logOut = () => {
    auth()
      .signOut()
      .then(() => Alert.alert('User signed out!'));
  };
  return (
    <View>
      <Button title={'logOut'} onPress={logOut} />
    </View>
  );
};

export default Profile;
