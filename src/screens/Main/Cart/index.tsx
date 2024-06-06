import React from 'react';
import { FlatList, Image, Pressable, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../component/common/Button';
import Typography from '../../../component/common/Typography';
import Header from '../../../component/layout/Header';
import { colors } from '../../../constants/colors';
import { fonts } from '../../../constants/fonts';
import { images } from '../../../constants/icons';
import { addCart, decItem, deleteCart } from '../../../redux/slice/CartSlice';
import { RootState } from '../../../redux/store/store';
import { styles } from './styles';

const CartList = () => {
  const {data} = useSelector((state: RootState) => state.addCart);
  const dispatch = useDispatch();

  const handleQtyIncrement = (item: any) => {
    dispatch(addCart(item));
  };

  const handleQtyDecrement = (item: any) => {
    dispatch(decItem(item));
  };

  const deleteCartItem = (item: any) => {
    dispatch(deleteCart(item));
  };

  const handleBtn = () =>{
    
    Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'Item add in cart'
    });
  }

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
              title={item.price}
              textStyle={styles.txtStyles}
            />
            <View style={styles.addRemove}>
              <Pressable
                style={[
                  styles.minusIcon,
                  {backgroundColor: colors.secondColor},
                ]}
                onPress={
                  item.qty <= 1
                    ? () => deleteCartItem(item)
                    : () => handleQtyDecrement(item)
                }>
                <Image source={images.MINIMINUS_ICON} />
              </Pressable>
              <Typography
                size={14}
                title={item.qty}
                textStyle={{fontFamily: fonts.medium, marginTop: 12}}
              />
              <Pressable
                style={styles.minusIcon}
                onPress={() => handleQtyIncrement(item)}>
                <Image source={images.MINIPLUS_ICON} />
              </Pressable>
            </View>
          </View>
          <View style={styles.lastItem}>
            <Typography size={16} title={'L'} textStyle={styles.txtStyles} />
            <Pressable onPress={() => deleteCartItem(item)}>
              <Image source={images.TRUSH_ICON} style={styles.trush} />
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
            ListEmptyComponent={()=>(
              <View style={styles.emptyView}>
                <Image source={images.EMPTYCART_LOGO}/>
              </View>
            )}
          />
        </View>
      </View>
      <View style={styles.totalContainer}>
        <View style={[styles.totalInner, {marginBottom: 10}]}>
          <Typography
            size={16}
            color={colors.peraTextColor}
            title={'Subtotal'}
          />
          <Typography
            size={18}
            color={colors.headingTextColor}
            title={'$1250.00'}
          />
        </View>
        <View style={[styles.totalInner, styles.extra]}>
          <Typography
            size={16}
            color={colors.peraTextColor}
            title={'Shipping'}
          />
          <Typography
            size={18}
            color={colors.headingTextColor}
            title={'$40.90'}
          />
        </View>
        <View style={styles.totalInner}>
          <Typography
            size={16}
            color={colors.headingTextColor}
            title={'Total Cost'}
          />
          <Typography
            size={18}
            color={colors.headingTextColor}
            title={'$1690.99'}
          />
        </View>
        <Button title={'Payment'} style={{marginTop:10}} onPress={handleBtn}/>
      </View>
    </View>
  );
};



export default CartList;
