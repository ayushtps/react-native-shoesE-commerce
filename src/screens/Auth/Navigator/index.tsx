import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {authStackNav} from '../../../constants/navigations';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
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
