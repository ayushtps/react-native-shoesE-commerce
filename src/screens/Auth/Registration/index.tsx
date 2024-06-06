import {View, Text, Pressable, Image, StyleSheet, Alert} from 'react-native';
import React, {useState} from 'react';
import Typography from '../../../component/common/Typography';
import {colors} from '../../../constants/colors';
import Inputs from '../../../component/common/Input';
import Button from '../../../component/common/Button';
import {images} from '../../../constants/icons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import auth from '@react-native-firebase/auth';
import {GoogleSignin,statusCodes} from '@react-native-google-signin/google-signin';
import { fonts } from '../../../constants/fonts';
import { styles } from './styles';

GoogleSignin.configure({
  webClientId:
    '552239433245-pij1gl1tj05f26g8c2u689sjeacsf7b6.apps.googleusercontent.com',
});

const Registration = ({navigation}: any) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const register = () => {
    auth()
      .createUserWithEmailAndPassword(userEmail, userPassword)
      .then(() => {
        Alert.alert('Register Successfully');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }
        if (error.code === 'auth/weak-password') {
          Alert.alert('Password should be at least 6 characters');
        }
        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }
        console.error(error);
      });
  };

  const googleSignIn = async () => {
    try {
      await GoogleSignin.signOut();
      await GoogleSignin.hasPlayServices();
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth()
        .signInWithCredential(googleCredential)
        .then(() => {
          Alert.alert('Signed in with Google!');
        });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('User cancelled the login process');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('Sign in is in progress already');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('Play services not available or outdated');
      } else {
        Alert.alert('Something went wrong with Google Sign In');
        console.error('Google Sign In Error:', error);
      }
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.loginContainer}>
      <View style={styles.loginInner}>
        <Pressable
          style={styles.headerBack}
          onPress={() => navigation.goBack()}>
          <Image source={images.BACK_ARROW} />
        </Pressable>
        <View style={styles.loginContent}>
          <Typography title={'Create Account'} size={28} textStyle={{fontFamily:fonts.bold}}/>
          <Typography
            title={'Let’s Create Account Together'}
            size={16}
            color={colors.peraTextColor}
            textStyle={styles.textPera}
          />
        </View>
        <View>
          <View style={styles.inputContainer}>
            <Typography
              title={'Your Name'}
              size={16}
              textStyle={styles.label}
            />
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
          <View>
            <Button title={'Sign Up'} onPress={register} />
            <Pressable style={styles.googleBtn} onPress={googleSignIn}>
              <Image source={images.GOOGLE_ICON} style={styles.googleIcon} />
              <Typography title={'Sign in with google'} size={18} textStyle={{fontFamily:fonts.medium}} />
            </Pressable>
          </View>
          <View style={styles.registrationContainer}>
            <Typography
              title={'Already have an account?'}
              size={12}
              color={colors.peraTextColor}
              textStyle={{fontFamily:fonts.regular}}
            />
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Typography title={'Sign in'} size={12} textStyle={{fontFamily:fonts.regular}} />
            </Pressable>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};



export default Registration;
