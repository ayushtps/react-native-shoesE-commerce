import {useNavigation} from '@react-navigation/native';
import React, { useContext } from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {fonts} from '../../../constants/fonts';
import {images} from '../../../constants/icons';
import { AuthenticatedUserContext } from '../../../../App';

interface headerProps {
  title?: string;
  image?: any;
  back?: boolean;
}

const Header = (props: headerProps) => {
  const {theme} = useContext(AuthenticatedUserContext);

  const styles = styling(theme);
  const {title, image, back} = props;
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.headerContainer}>
        {back === false ? (
          <View style={{padding: 10, height: 44, width: 44}}></View>
        ) : (
          <Pressable
            style={styles.headerBack}
            onPress={() => navigation.goBack()}>
            <Image source={images.BACK_ARROW} tintColor={theme.tintColor} />
          </Pressable>
        )}
        <Text
          style={{
            fontFamily: fonts.medium,
            color: theme.headingTextColor,
            fontSize: 16,
          }}>
          {title}
        </Text>
        {image ? (
          <Pressable
            style={styles.headerBack}
            onPress={() => navigation.goBack()}>
            <Image source={image} tintColor={theme.tintColor} />
          </Pressable>
        ) : (
          <View style={{padding: 10, height: 44, width: 44}}></View>
        )}
      </View>
    </View>
  );
};

const styling=(theme) => StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerBack: {
    backgroundColor: theme.secondColor,
    padding: 10,
    height: 44,
    width: 44,
    borderRadius: 40,
  },
});

export default Header;
