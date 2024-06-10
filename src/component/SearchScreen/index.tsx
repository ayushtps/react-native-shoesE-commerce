import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { Modal, Portal } from 'react-native-paper';
import { colors } from '../../constants/colors';
import { allProductList } from '../../constants/data';
import { fonts } from '../../constants/fonts';
import { images } from '../../constants/icons';
import { addCart } from '../../redux/slice/CartSlice';
import { addWish } from '../../redux/slice/WishListSlice';
import Typography from '../common/Typography';
import Header from '../layout/Header';
import { styles } from './styles';
import Button from '../common/Button';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const SearchScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(allProductList);
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState([1, 1000]);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const multiSliderValuesChange = values => {
    setValues(values);
  };

  const handleSliderChangeStart = () => {
    // console.log('Slider change started');
  };

  const handleSliderChangeFinish = values => {
    setValues(values);
  };

  const addCartHandle = item => {
    dispatch(addCart(item));
  };

  const addWishhandle = item => {
    dispatch(addWish(item));
  };

  const handleSearch = query => {
    setSearchQuery(query);
    filterProducts(query, values);
  };

  const filterProducts = (query, priceRange) => {
    let filtered = allProductList;
    console.log("priceRange",priceRange[0]);
    
    if (query.trim() !== '') {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    filtered = filtered.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    setFilteredProducts(filtered);
  };

  const handleApplyFilters = () => {
    filterProducts(searchQuery, values);
    hideModal();
  };

  const renderItem = ({ item }) => {
    return (
      <Pressable
        style={styles.itemContainer}
        onPress={() => navigation.navigate('ProductDetail', { product: item })}
      >
        <View style={styles.imgContainer}>
          <Pressable
            style={styles.wishListContainer}
            onPress={() => addWishhandle(item)}
          >
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
          <Typography title={`$${item.price}`} size={14} textStyle={styles.priceText} />
          <TouchableOpacity
            style={styles.addCartBtn}
            onPress={() => addCartHandle(item)}
          >
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
        <Pressable style={styles.filter} onPress={showModal}>
          <Image source={images.FILTER} />
        </Pressable>
      </View>
      <FlatList
        data={filteredProducts}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View style={{ marginVertical: 10 }}></View>
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyView}>
            <Image source={images.EMPTY_LOGO} />
            <Typography
              title={'No Item Found'}
              color={colors.peraTextColor}
              size={16}
            />
          </View>
        )}
      />
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.containerStyle}
        >
          <View>
            <View style={styles.closeBtn}>
              <Typography title={'Filter'} size={24} />
            </View>
            <View>
              <Typography title={'Price'} size={18} />
              <View style={styles.scroll}>
                <MultiSlider
                  values={values}
                  sliderLength={335}
                  onValuesChangeStart={handleSliderChangeStart}
                  onValuesChange={multiSliderValuesChange}
                  onValuesChangeFinish={handleSliderChangeFinish}
                  min={0}
                  max={1000}
                  step={1}
                  selectedStyle={{
                    backgroundColor: colors.buttonColor,
                    height: 6,
                  }}
                  unselectedStyle={{
                    backgroundColor: colors.fillColor,
                    height: 6,
                  }}
                  markerContainerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  markerStyle={{
                    backgroundColor: colors.buttonColor,
                    height: 15,
                    marginTop: 4,
                  }}
                />
                <View style={styles.sliderValuesContainer}>
                  <Typography
                    title={`Start: $${values[0]}`}
                    size={16}
                    textStyle={{ marginRight: 10 }}
                  />
                  <Typography title={`End: $${values[1]}`} size={16} />
                </View>
              </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Button onPress={handleApplyFilters} title={'Apply'} />
            </View>
          </View>
        </Modal>
      </Portal>
    </View>
  );
};

export default SearchScreen;
