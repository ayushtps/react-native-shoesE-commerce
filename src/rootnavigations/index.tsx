import {View, Text, ActivityIndicator} from 'react-native';
import React, {createContext, useContext, useEffect, useState} from 'react';
import AuthStack from '../screens/Auth/Navigator';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {colors} from '../constants/colors';
import MainStack from '../screens/Main/Navigator';
import {AuthenticatedUserContext} from '../../App';

const RootNavigation = () => {
  const {user, setUser}: any = useContext(AuthenticatedUserContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(authUser => {
      setUser(authUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading)
    <View>
      <ActivityIndicator size={'small'} color={colors.buttonColor} />
    </View>;
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        {user ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
    </View>
  );
};

export default RootNavigation;
