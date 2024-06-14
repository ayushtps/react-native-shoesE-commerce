import auth from '@react-native-firebase/auth';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useContext, useEffect} from 'react';
import {Alert, Image, View} from 'react-native';
import Typography from '../../../component/common/Typography';
import {fonts} from '../../../constants/fonts';
import {images} from '../../../constants/icons';
import {drawerNav, mainStack, mainTabNav} from '../../../constants/navigations';
import {Switch} from 'react-native-paper';
import {AuthenticatedUserContext} from '../../../../App';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const MainTab = () => {
  const {theme} = useContext(AuthenticatedUserContext);
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
                backgroundColor: theme.secondColor,
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
                          backgroundColor: theme.buttonColor,
                          marginBottom: 56,
                          borderWidth: 10,
                          borderColor: theme.primaryColor,
                        }
                      : {alignItems: 'center'}
                  }>
                  <Image
                    source={item.src}
                    resizeMode="cover"
                    style={{
                      tintColor: focused
                        ? theme.whiteColor
                        : theme.peraTextColor,
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

const handleLogOut = () => {
  auth()
    .signOut()
    .then(() => Alert.alert('User signed out!'));
};

const CustomDrawerContent = props => {
  const {setIsSwitchOn, isSwitchOn,theme} = useContext(AuthenticatedUserContext);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{flex: 1, justifyContent: 'space-around'}}>
      <View style={{marginLeft: 20}}>
        <View>
          <Image source={images.PROFILE1} />
          <Image
            source={images.WELCOME_ICON}
            style={{marginTop: 24, marginBottom: 6}}
          />
          <Typography
            title={'Alisson becker'}
            size={24}
            color={theme.secondColor}
          />
        </View>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          paddingBottom: 10,
          borderBottomColor: theme.peraTextColor,
        }}>
        <DrawerItemList {...props} />
      </View>
      <View style={{marginBottom: 20}}>
        <DrawerItem
          label="Dark Mode"
          labelStyle={{
            color: theme.secondColor,
            fontFamily: fonts.medium,
            fontSize: 16,
          }}
          onPress={handleLogOut}
          icon={({size}) => (
            <Switch
              value={isSwitchOn}
              onValueChange={onToggleSwitch}
              color={theme.peraTextColor}
              style={{marginRight: -20, marginLeft: -5}}
            />
          )}
        />
        <DrawerItem
          label="Sign Out"
          labelStyle={{
            color: theme.secondColor,
            fontFamily: fonts.medium,
            fontSize: 16,
          }}
          onPress={handleLogOut}
          icon={({size}) => (
            <Image
              source={images.SIGN_OUT}
              style={{height: size, width: size}}
              tintColor={theme.peraTextColor}
            />
          )}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export const AppDrawer = () => {
  const {theme} = useContext(AuthenticatedUserContext);
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      {drawerNav.map((item, index) => {
        return (
          <Drawer.Screen
            name={item.title}
            component={item.component}
            options={{
              headerShown: false,
              drawerStyle: {
                backgroundColor: theme.headingTextColor,
                width: 260,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
              },
              drawerLabelStyle: {
                color: theme.secondColor,
                fontFamily: fonts.medium,
                fontSize: 16,
              },
              drawerIcon: ({focused, size}) => (
                <Image
                  source={item.src}
                  style={{height: size, width: size}}
                  tintColor={theme.peraTextColor}
                />
              ),
            }}
            key={index}
          />
        );
      })}
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
