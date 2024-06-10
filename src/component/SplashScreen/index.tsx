import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {colors} from '../../constants/colors';
import {images} from '../../constants/icons';
import Typography from '../common/Typography';
import { fonts } from '../../constants/fonts';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Animatable.View
        animation="bounceIn"
        iterationCount={3}
        direction="alternate" style={{justifyContent:'center',alignItems:'center'}}>
        <Image
          source={images.SPLASH_LOGO}
          resizeMode="cover"
        />
        <Typography title={'SHOES FOR LIVE'} size={20} textStyle={{fontFamily:fonts.bold}}/>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryColor,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default SplashScreen;
