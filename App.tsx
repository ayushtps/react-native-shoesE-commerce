import React, {createContext, useState} from 'react';
import {StatusBar, View} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {colors} from './src/constants/colors';
import store from './src/redux/store/store';
import RootNavigation from './src/rootnavigations';
import SplashScreen from './src/component/SplashScreen';
import {PaperProvider} from 'react-native-paper';

export const AuthenticatedUserContext = createContext({});

const AuthenticatedProvider = ({children}: any) => {
  const [user, setUser] = useState(null);
  return (
    <AuthenticatedUserContext.Provider value={{user, setUser}}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};

const App = () => {
  const [splash, setSplash] = useState(true);

  setTimeout(() => {
    setSplash(false);
  }, 2000);
  return (
    <Provider store={store}>
      <PaperProvider>
        <View style={{flex: 1}}>
          <StatusBar backgroundColor={colors.primaryColor} />
          <AuthenticatedProvider>
            {splash ? <SplashScreen /> : <RootNavigation />}
          </AuthenticatedProvider>
        </View>
      </PaperProvider>
    </Provider>
  );
};

export default App;
