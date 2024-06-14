import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {authStackNav} from '../../../constants/navigations';
import {isIntroShown} from '../../../utility/Utility';

const Stack = createStackNavigator();

const AuthStack = () => {
  const [showIntro, setShowIntro] = useState(null);

  useEffect(() => {
    const checkIntroStatus = async () => {
      const introShown = await isIntroShown();
      setShowIntro(introShown);
    };

    checkIntroStatus();
  }, []);
  if (showIntro === null) {
    return null;  
  }

  return (
    <Stack.Navigator initialRouteName={showIntro ? 'Login' : 'IntroSlide'}>
      {authStackNav.map((item, index) => (
        <Stack.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={{headerShown: false}}
        />
      ))}
    </Stack.Navigator>
  );
};

export default AuthStack;
