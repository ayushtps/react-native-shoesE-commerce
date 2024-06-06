import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Image, Pressable, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { colors } from '../../constants/colors';
import { allProductList } from '../../constants/data';
import { fonts } from '../../constants/fonts';
import { images } from '../../constants/icons';
import { addCart } from '../../redux/slice/CartSlice';
import { addWish } from '../../redux/slice/WishListSlice';
import Typography from '../common/Typography';
import Header from '../layout/Header';
import { styles } from './styles';

const SearchScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation()
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(allProductList);

  const addCartHandle = (item: any) => {
    dispatch(addCart(item));
  };

  const addWishhandle = (item: any) => {
    dispatch(addWish(item));
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredProducts(allProductList);
    } else {
      const filtered = allProductList.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  const renderItem = ({ item }: any) => {
    return (
      <Pressable
        style={styles.itemContainer}
        onPress={() => navigation.navigate('ProductDetail', { product: item })}>
        <View style={styles.imgContainer}>
          <Pressable style={styles.wishListContainer} onPress={() => addWishhandle(item)}>
            <Image source={images.MINIHEART_ICON} />
          </Pressable>
          <Image source={item.image} />
        </View>
        <View style={styles.txtContainer}>
          <Typography
            title={'Best Seller'}
            size={12}
            color={colors.buttonColor}
            textStyle={{ fontFamily: fonts.regular }}
          />
          <Typography
            title={item.name}
            size={16}
            textStyle={styles.productName}
          />
        </View>
        <View style={styles.bottomCart}>
          <Typography
            title={item.price}
            size={14}
            textStyle={styles.priceText}
          />
          <TouchableOpacity style={styles.addCartBtn} onPress={() => addCartHandle(item)}>
            <Image source={images.PLUS_ICON} tintColor={colors.secondColor} />
          </TouchableOpacity>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.searchContainer}>
      <Header title={'Search'} />
      <View style={styles.searchInner}>
        <View style={styles.search}>
          <Image source={images.SEARCH_ICON} height={14} width={14} />
        </View>
        <TextInput
          style={styles.field}
          placeholder="Looking for shoes"
          placeholderTextColor={colors.peraTextColor}
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      <FlatList
        data={filteredProducts}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View style={{ marginVertical: 10 }}></View>
        )}
        ListEmptyComponent={()=>(
          <View style={styles.emptyView}>
            <Image source={images.EMPTY_LOGO}/>
          </View>
        )}
      />
    </View>
  );
};



export default SearchScreen;
