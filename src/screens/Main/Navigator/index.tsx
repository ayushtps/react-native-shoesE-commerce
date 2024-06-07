import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Button, Image, View} from 'react-native';
import {colors} from '../../../constants/colors';
import {mainStack, mainTabNav} from '../../../constants/navigations';
import WishList from '../WishList';
import Home from '../Home';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

export const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      {mainTabNav?.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.title}
            component={item.component}
            options={{
              tabBarStyle: {
                position: 'absolute',
                bottom: 27,
                left: 16,
                right: 16,
                height: 60,
                backgroundColor: colors.secondColor,
                borderRadius: 16,
                alignItems: 'center',
                justifyContent: 'center',
              },
              tabBarIcon: ({focused}) => (
                <View
                  style={
                    focused
                      ? {
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: 70,
                          width: 70,
                          borderRadius: 999,
                          elevation: 1,
                          backgroundColor: colors.buttonColor,
                          marginBottom: 56,
                          borderWidth: 10,
                          borderColor: colors.primaryColor,
                        }
                      : {alignItems: 'center'}
                  }>
                  <Image
                    source={item.src}
                    resizeMode="cover"
                    style={{
                      tintColor: focused
                        ? colors.primaryColor
                        : colors.peraTextColor,
                    }}
                  />
                </View>
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export const AppDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home1" component={MainStack} />
      <Drawer.Screen name="Home2" component={Home} />
    </Drawer.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator>
      {mainStack.map((item, index) => {
        return (
          <Stack.Screen
            name={item.name}
            component={item.component}
            options={{headerShown: false}}
            key={index}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default MainStack;
