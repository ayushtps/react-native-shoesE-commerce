import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Image, TextInput, View } from 'react-native';
import { AuthenticatedUserContext } from '../../../../../App';
import { images } from '../../../../constants/icons';
import { styling } from './styles';

const Search = () => {
  const navigation = useNavigation();
  const {theme} = useContext(AuthenticatedUserContext);

  const styles = styling(theme);
  return (
    <View style={styles.searchInner}>
      <View style={styles.search}>
        <Image source={images.SEARCH_ICON} height={14} width={14} />
      </View>
      <TextInput
        style={styles.field}
        placeholder="Looking for shoes"
        placeholderTextColor={theme.peraTextColor}
        onPress={() => navigation.navigate('SearchScreen')}
      />
    </View>
  );
};

export default Search;
