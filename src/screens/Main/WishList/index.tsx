import React, {useContext} from 'react';
import {FlatList, Image, Pressable, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Typography from '../../../component/common/Typography';
import Header from '../../../component/layout/Header';
import {fonts} from '../../../constants/fonts';
import {images} from '../../../constants/icons';
import {deleteWish} from '../../../redux/slice/WishListSlice';
import {RootState} from '../../../redux/store/store';
import {AuthenticatedUserContext} from '../../../../App';
import {styling} from './styles';

const WishList = () => {
  const {data} = useSelector((state: RootState) => state.WishList);
  const dispatch = useDispatch();
  const {theme} = useContext(AuthenticatedUserContext);

  const styles = styling(theme);

  const removeWish = (item: any) => {
    dispatch(deleteWish(item));
  };
  const renderItem = ({item}: any) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.imgContainer}>
          <Pressable
            style={styles.wishListContainer1}
            onPress={() => removeWish(item)}>
            <Image source={images.MINIHEART_ICON} tintColor={'red'} />
          </Pressable>
          <Image source={item.image} />
        </View>
        <View style={styles.txtContainer}>
          <Typography
            title={'Best Seller'}
            size={12}
            color={theme.buttonColor}
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
            title={item.price}
            size={14}
            textStyle={styles.priceText}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.wishListContainer}>
      <View style={{marginBottom: 20}}>
        <Header title={'Favourite'} image={images.WISHLIST_ICON} back={false} />
      </View>
      <View>
        <FlatList
          data={data}
          numColumns={2}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View style={{marginVertical: 10}}></View>
          )}
          ListEmptyComponent={() => (
            <View style={styles.emptyView}>
              <Image source={images.EMPTY_LOGO}  tintColor={theme.tintColor}/>
              <Typography
                title={'Empty'}
                color={theme.tintColor}
                size={16}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default WishList;
