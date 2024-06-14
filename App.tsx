import React, {createContext, useContext, useEffect, useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import SplashScreen from './src/component/SplashScreen';
import {colors, darkTheme, lightTheme} from './src/constants/colors';
import store from './src/redux/store/store';
import RootNavigation from './src/rootnavigations';
import {setIntroShown} from './src/utility/Utility';
import {StripeProvider} from '@stripe/stripe-react-native';

export const AuthenticatedUserContext = createContext({});

const STRIPE_KEY =
  'pk_test_51Ou7RESEzEDavEglAnSPMMgebXlR1dhmizoH8sEF5C6VamQx0fC1W8QqPHilXRj1UXAPISdHDySmZXngRFzz04PI00hmtVq41J';

const AuthenticatedProvider = ({children}: any) => {
  const [user, setUser] = useState(null);
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const theme = isSwitchOn ? darkTheme : lightTheme;

  return (
    <AuthenticatedUserContext.Provider
      value={{user, setUser, isSwitchOn, setIsSwitchOn, theme}}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};
const App = () => {
  const [splash, setSplash] = useState(true);
  setTimeout(() => {
    setSplash(false);
  }, 2000);

  useEffect(() => {
    setIntroShown();
  }, []);

  return (
    <Provider store={store}>
      <StripeProvider publishableKey={STRIPE_KEY}>
        <PaperProvider>
          <AuthenticatedProvider>
            <View style={{flex: 1}}>
              <StatusBar backgroundColor={colors.headingTextColor} />
              {splash ? <SplashScreen /> : <RootNavigation />}
            </View>
          </AuthenticatedProvider>
        </PaperProvider>
      </StripeProvider>
    </Provider>
  );
};

export default App;
