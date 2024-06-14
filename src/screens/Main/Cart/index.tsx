import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {FlatList, Image, Pressable, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../../component/common/Button';
import Typography from '../../../component/common/Typography';
import Header from '../../../component/layout/Header';
import {fonts} from '../../../constants/fonts';
import {images} from '../../../constants/icons';
import {addCart, decItem, deleteCart} from '../../../redux/slice/CartSlice';
import {RootState} from '../../../redux/store/store';
import {AuthenticatedUserContext} from '../../../../App';
import {styling} from './styles';

const CartList = () => {
  const navigation = useNavigation();
  const {theme} = useContext(AuthenticatedUserContext);

  const styles = styling(theme);
  const {data} = useSelector((state: RootState) => state.addCart);
  const dispatch = useDispatch();
  const [Price, setPrice] = useState(0);

  const handleQtyIncrement = (item: any) => {
    dispatch(addCart(item));
  };

  const handleQtyDecrement = (item: any) => {
    dispatch(decItem(item));
  };

  const deleteCartItem = (item: any) => {
    dispatch(deleteCart(item));
  };

  const handleBtn = () => {
    navigation.navigate('Payment', {price: Price});
  };

  const Total = () => {
    let totalPrice = 0;
    data.map((x, i) => {
      totalPrice = Math.floor(x.price) * x.qty + totalPrice;
    });
    setPrice(totalPrice);
  };
  useEffect(() => {
    Total();
  }, [Total]);

  const renderItem = ({item}: any) => {
    return (
      <View style={styles.cartCard}>
        <View style={styles.cartCardInner}>
          <View style={styles.imageContainer}>
            <Image source={item.image} />
          </View>
          <View>
            <Typography
              size={16}
              title={item.name}
              textStyle={styles.txtStyles}
            />
            <Typography
              size={14}
              title={`$ ${item.price}`}
              textStyle={styles.txtStyles}
            />
            <View style={styles.addRemove}>
              <Pressable
                style={[styles.minusIcon, {backgroundColor: theme.secondColor}]}
                onPress={
                  item.qty <= 1
                    ? () => deleteCartItem(item)
                    : () => handleQtyDecrement(item)
                }>
                <Image source={images.MINIMINUS_ICON} tintColor={theme.tintColor} />
              </Pressable>
              <Typography
                size={14}
                title={item.qty}
                textStyle={{fontFamily: fonts.medium, marginTop: 12}}
              />
              <Pressable
                style={styles.minusIcon}
                onPress={() => handleQtyIncrement(item)}>
                <Image source={images.MINIPLUS_ICON} tintColor={theme.tintColor} />
              </Pressable>
            </View>
          </View>
          <View style={styles.lastItem}>
            <Typography size={16} title={'L'} textStyle={styles.txtStyles} />
            <Typography title={Math.floor(item.price * item.qty)} size={16} />
            <Pressable onPress={() => deleteCartItem(item)}>
              <Image source={images.TRUSH_ICON} style={styles.trush} tintColor={theme.tintColor} />
            </Pressable>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.cartContainer}>
      <View style={styles.cartInner}>
        <View>
          <Header title={'My Cart'} />
        </View>
        <View style={styles.cartListContainer}>
          <FlatList
            data={data}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => (
              <View style={{marginVertical: 10}}></View>
            )}
            ListEmptyComponent={() => (
              <View style={styles.emptyView}>
                <Image source={images.EMPTYCART_LOGO} tintColor={theme.tintColor} />
                <Pressable onPress={() => navigation.navigate('Home')}>
                  <Typography
                    title={'Continue to shopping'}
                    color={theme.tintColor}
                    size={16}
                  />
                </Pressable>
              </View>
            )}
          />
        </View>
      </View>
      {Price > 0 && (
        <View style={styles.totalContainer}>
          <View style={[styles.totalInner, {marginBottom: 10}]}>
            <Typography
              size={16}
              color={theme.peraTextColor}
              title={'Subtotal'}
            />
            <Typography
              size={18}
              color={theme.headingTextColor}
              title={`$ ${Price}`}
            />
          </View>
          <View style={[styles.totalInner, styles.extra]}>
            <Typography
              size={16}
              color={theme.peraTextColor}
              title={'Shipping'}
            />
            <Typography
              size={18}
              color={theme.headingTextColor}
              title={Price ? '$40.90' : 0}
            />
          </View>
          <View style={styles.totalInner}>
            <Typography
              size={16}
              color={theme.headingTextColor}
              title={'Total Cost'}
            />
            <Typography
              size={18}
              color={theme.headingTextColor}
              title={Price ? `$ ${Price + 40}` : 0}
            />
          </View>
          <Button
            title={'Checkout'}
            style={{marginTop: 10}}
            onPress={handleBtn}
          />
        </View>
      )}
    </View>
  );
};

export default CartList;
