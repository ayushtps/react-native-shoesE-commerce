import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, Pressable, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {colors} from '../../constants/colors';
import {
  adidasNewShoesList,
  adidasPopularShoesList,
  converseNewShoesList,
  conversePopularShoesList,
  nikeNewShoesList,
  nikePopularShoesList,
  pumaNewShoesList,
  pumaPopularShoesList,
  underNewShoesList,
  underPopularShoesList,
} from '../../constants/data';
import {fonts} from '../../constants/fonts';
import {images} from '../../constants/icons';
import {addCart} from '../../redux/slice/CartSlice';
import {addWish} from '../../redux/slice/WishListSlice';
import {RootState} from '../../redux/store/store';
import Typography from '../common/Typography';
import {styles} from './styles';

const CategoryWiseItem = () => {
  const navigation = useNavigation();
  const {data} = useSelector((state: RootState) => state.category);
  const dispatch = useDispatch();

  const [renderItem1, setRenderItem1] = useState(nikePopularShoesList);
  const [renderItem2, setRenderItem2] = useState(nikeNewShoesList);

  useEffect(() => {
    if (data) {
      if (data.name === 'Nike') {
        setRenderItem1(nikePopularShoesList);
        setRenderItem2(nikeNewShoesList);
      } else if (data.name === 'Puma') {
        setRenderItem1(pumaPopularShoesList);
        setRenderItem2(pumaNewShoesList);
      } else if (data.name === 'Adidas') {
        setRenderItem1(adidasPopularShoesList);
        setRenderItem2(adidasNewShoesList);
      } else if (data.name === 'Under Armour') {
        setRenderItem1(underPopularShoesList);
        setRenderItem2(underNewShoesList);
      } else if (data.name === 'Converse') {
        setRenderItem1(conversePopularShoesList);
        setRenderItem2(converseNewShoesList);
      }
    }
  }, [data]);

  const addCartHandle = (item: any) => {
    dispatch(addCart(item));
  };

  const addWishhandle = (item: any) => {
    dispatch(addWish(item));
  };

  const renderItem = ({item}: any) => {
    return (
      <Pressable
        style={styles.itemContainer}
        onPress={() => navigation.navigate('ProductDetail', {product: item})}>
        <View style={styles.imgContainer}>
          <Pressable
            style={styles.wishListContainer}
            onPress={() => addWishhandle(item)}>
            <Image source={images.MINIHEART_ICON} />
          </Pressable>
          <Image source={item.image} />
        </View>
        <View style={styles.txtContainer}>
          <Typography
            title={'Best Seller'}
            size={12}
            color={colors.buttonColor}
            textStyle={{fontFamily: fonts.regular}}
          />
          <Typography
            title={item.name}
            size={16}
            textStyle={styles.productName}
          />
        </View>
        <View style={styles.bottomCart}>
          <Typography
            title={`$ ${item.price}`}
            size={14}
            textStyle={styles.priceText}
          />
          <TouchableOpacity
            style={styles.addCartBtn}
            onPress={() => addCartHandle(item)}>
            <Image source={images.PLUS_ICON} tintColor={colors.secondColor} />
          </TouchableOpacity>
        </View>
      </Pressable>
    );
  };

  const newRenderItem = ({item}: any) => {
    return (
      <Pressable
        style={styles.secondContainer}
        onPress={() => navigation.navigate('ProductDetail', {product: item})}>
        <View style={styles.txtContainer}>
          <Typography
            title={'Best Seller'}
            size={12}
            color={colors.buttonColor}
            textStyle={{fontFamily: fonts.regular}}
          />
          <Typography
            title={item.name}
            size={20}
            textStyle={styles.productName}
          />
          <Typography
            title={`$ ${item.price}`}
            size={16}
            textStyle={{fontFamily: fonts.medium}}
          />
        </View>
        <View style={styles.imgContainer}>
          <Image source={item.image} />
        </View>
      </Pressable>
    );
  };

  return (
    <View>
      <FlatList
        data={renderItem1}
        numColumns={2}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View style={{marginVertical: 10}}></View>
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyView}>
            <Image source={images.EMPTY_LOGO} />
          </View>
        )}
      />

      <View>
        <View style={styles.detailCategory}>
          <Typography
            title={'New Arrivals'}
            size={16}
            textStyle={{fontFamily: fonts.medium}}
          />
          <Typography
            title={'See all'}
            size={13}
            color={colors.buttonColor}
            textStyle={{fontFamily: fonts.medium}}
          />
        </View>
        <FlatList
          data={renderItem2}
          renderItem={newRenderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View style={{marginHorizontal: 10}}></View>
          )}
          ListEmptyComponent={() => (
            <View style={styles.emptyView}>
              <Image source={images.EMPTY_LOGO} />
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default CategoryWiseItem;
