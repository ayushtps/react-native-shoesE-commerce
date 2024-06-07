import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../constants/colors';
import {fonts} from '../../../constants/fonts';
import {images} from '../../../constants/icons';

interface headerProps {
  title?: string;
  image?: any;
}

const Header = (props: headerProps) => {
  const {title, image} = props;
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.headerContainer}>
        <Pressable
          style={styles.headerBack}
          onPress={() => navigation.goBack()}>
          <Image source={images.BACK_ARROW} />
        </Pressable>
        <Text
          style={{
            fontFamily: fonts.medium,
            color: colors.headingTextColor,
            fontSize: 16,
          }}>
          {title}
        </Text>
        {image ? (
          <Pressable
            style={styles.headerBack}
            onPress={() => navigation.goBack()}>
            <Image source={image} />
          </Pressable>
        ) : (
          <View style={{padding: 10, height: 44, width: 44}}></View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerBack: {
    backgroundColor: colors.secondColor,
    padding: 10,
    height: 44,
    width: 44,
    borderRadius: 40,
  },
});

export default Header;
