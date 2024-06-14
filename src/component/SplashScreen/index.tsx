import React, { useContext } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { AuthenticatedUserContext } from '../../../App';
import { fonts } from '../../constants/fonts';
import { images } from '../../constants/icons';
import Typography from '../common/Typography';

const SplashScreen = () => {
  const {theme} = useContext(AuthenticatedUserContext);
  const styles = styling(theme);
  return (
    <View style={styles.container}>
      <Animatable.View
        animation="bounceIn"
        iterationCount={3}
        direction="alternate"
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image source={images.SPLASH_LOGO} resizeMode="cover" />
        <Typography
          title={'SHOES FOR LIVE'}
          size={20}
          textStyle={{fontFamily: fonts.bold}}
        />
      </Animatable.View>
    </View>
  );
};

const styling = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.primaryColor,
    },
    text: {
      fontSize: 24,
      marginBottom: 20,
    },
  });

export default SplashScreen;
