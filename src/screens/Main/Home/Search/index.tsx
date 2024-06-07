import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, TextInput, View} from 'react-native';
import {colors} from '../../../../constants/colors';
import {images} from '../../../../constants/icons';
import {styles} from './styles';

const Search = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.searchInner}>
      <View style={styles.search}>
        <Image source={images.SEARCH_ICON} height={14} width={14} />
      </View>
      <TextInput
        style={styles.field}
        placeholder="Looking for shoes"
        placeholderTextColor={colors.peraTextColor}
        onPress={() => navigation.navigate('SearchScreen')}
      />
    </View>
  );
};

export default Search;
