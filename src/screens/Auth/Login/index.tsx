import auth from '@react-native-firebase/auth';
import React, { useState } from 'react';
import { Alert, Image, Pressable, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button from '../../../component/common/Button';
import Inputs from '../../../component/common/Input';
import Typography from '../../../component/common/Typography';
import { colors } from '../../../constants/colors';
import { fonts } from '../../../constants/fonts';
import { images } from '../../../constants/icons';
import { styles } from './styles';

const Login = ({navigation}: any) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const login = async () => {
    try {
      await auth().signInWithEmailAndPassword(userEmail, userPassword);
      setUserEmail('');
      setUserPassword('');
      Alert.alert('Login Successfully');
    } catch (error) {
      if (error.code === 'auth/invalid-credential') {
        Alert.alert('Invalid Email or Password');
      }
      console.error(error);
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
          <Typography
            title={'Hello Again!'}
            size={28}
            textStyle={styles.title}
          />
          <Typography
            title={'Welcome Back You’ve Been Missed!'}
            size={16}
            color={colors.peraTextColor}
            textStyle={styles.textPera}
          />
        </View>
        <View>
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
          <View>
            <Typography title={'Password'} size={16} textStyle={styles.label} />
            <Inputs
              secureTextEntry={true}
              placeholder="Password"
              onChangeText={setUserPassword}
              value={userPassword}
            />
          </View>
          <View>
            <Typography
              title={'Recovery Password'}
              size={13}
              color={colors.peraTextColor}
              textStyle={styles.recoveryText}
            />
          </View>
          <View>
            <Button title={'Sign In'} onPress={login} />
            <Pressable style={styles.googleBtn}>
              <Image source={images.GOOGLE_ICON} style={styles.googleIcon} />
              <Typography
                title={'Sign in with google'}
                size={18}
                textStyle={{fontFamily: fonts.medium}}
              />
            </Pressable>
          </View>
          <View style={styles.registrationContainer}>
            <Typography
              title={'Don’t have an account?'}
              size={12}
              color={colors.peraTextColor}
              textStyle={{fontFamily: fonts.regular}}
            />
            <Pressable onPress={() => navigation.navigate('Register')}>
              <Typography
                title={'Sign Up for free'}
                size={12}
                textStyle={{fontFamily: fonts.regular}}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};



export default Login;
