import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {AuthenticatedUserContext} from '../../App';
import AuthStack from '../screens/Auth/Navigator';
import MainStack from '../screens/Main/Navigator';

const RootNavigation = () => {
  const {user, setUser, theme}: any = useContext(AuthenticatedUserContext);
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
      <ActivityIndicator size={'small'} color={theme.buttonColor} />
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
