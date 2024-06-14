import React, {useContext, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AuthenticatedUserContext} from '../../../../App';
import Inputs from '../../../component/common/Input';
import Typography from '../../../component/common/Typography';
import Header from '../../../component/layout/Header';

import {fonts} from '../../../constants/fonts';
import {images} from '../../../constants/icons';

const Profile = () => {
  const [userName, setUserName] = useState('Alosson Becker');
  const {user, theme}: any = useContext(AuthenticatedUserContext);

  const styles = styling(theme);

  const [userEmail, setUserEmail] = useState(user.email);
  const [userPassword, setUserPassword] = useState('123456789');

  return (
    <KeyboardAwareScrollView style={styles.profileContainer}>
      <Header title={'Profile'} image={images.EDIT_ICON} back={false} />
      <View style={styles.imgContainer}>
        <Image source={images.PROFILE} />
        <Typography title={'Alisson becker'} size={20} />
      </View>
      <View>
        <View style={styles.inputContainer}>
          <Typography title={'Full Name'} size={16} textStyle={styles.label} />
          <Inputs
            placeholder="Username"
            onChangeText={setUserName}
            value={userName}
          />
        </View>
        <View style={styles.inputContainer}>
          <Typography
            title={'Email Address'}
            size={16}
            textStyle={styles.label}
          />
          <Inputs
            placeholder="Email"
            onChangeText={setUserEmail}
            value={userEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <Typography title={'Password'} size={16} textStyle={styles.label} />
          <Inputs
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={setUserPassword}
            value={userPassword}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styling = theme =>
  StyleSheet.create({
    profileContainer: {
      flex: 1,
      backgroundColor: theme.primaryColor,
      padding: 20,
    },
    imgContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 20,
    },
    label: {
      marginBottom: 10,
      fontFamily: fonts.medium,
    },
    inputContainer: {
      marginBottom: 20,
    },
  });
export default Profile;
