import React from 'react';
import {Image, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {colors} from '../../constants/colors';
import {images} from '../../constants/icons';
import {addCart} from '../../redux/slice/CartSlice';
import Button from '../common/Button';
import Typography from '../common/Typography';
import Header from '../layout/Header';
import {styles} from './styles';

const ProductDetail = ({route}: any) => {
  const {product} = route.params;
  const dispatch = useDispatch();
  const addCartHandle = () => {
    dispatch(addCart(product));
  };

  return (
    <View style={styles.productDetails}>
      <View style={styles.productHeader}>
        <Header title={"Men's Shoes"} image={images.HEADER_CART_ICON} />
      </View>
      <View style={styles.imageContainer}>
        <Image source={product.image} height={311} width={202} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={{padding: 20}}>
          <View>
            <Typography
              title={'BEST SELLER'}
              size={14}
              color={colors.buttonColor}
              textStyle={styles.bestSeller}
            />
            <Typography
              title={product.name}
              size={24}
              color={colors.headingTextColor}
              textStyle={styles.bestSellerName}
            />
            <Typography
              title={product.price}
              size={20}
              color={colors.headingTextColor}
              textStyle={styles.bestSellerName}
            />
            <Typography
              title={
                'Air Jordan is an American brand of basketball shoes athletic, casual, and style clothing produced by Nike....'
              }
              size={14}
              color={colors.peraTextColor}
              textStyle={styles.bestSeller}
            />
          </View>
          <View style={styles.gallery}>
            <Typography
              size={18}
              title={'Gallery'}
              textStyle={styles.titleGallery}
            />
            <View style={styles.galleryContainer}>
              <View style={styles.Inner}>
                <Image source={images.MINI1} />
              </View>
              <View style={styles.Inner}>
                <Image source={images.MINI2} />
              </View>
              <View style={styles.Inner}>
                <Image source={images.MINI3} />
              </View>
            </View>
          </View>
          <View>
            <View style={styles.sizeContainer}>
              <View>
                <Typography
                  size={18}
                  title={'Size'}
                  textStyle={styles.titleGallery}
                />
              </View>
              <View style={styles.sizeNumbers}>
                <Typography size={14} title={'EU'} textStyle={styles.sizes} />
                <Typography
                  size={14}
                  title={'US'}
                  color={colors.peraTextColor}
                  textStyle={styles.sizes}
                />
                <Typography
                  size={14}
                  title={'UK'}
                  color={colors.peraTextColor}
                  textStyle={styles.sizes}
                />
              </View>
            </View>
            <View style={styles.numericContainer}>
              <View style={styles.sizesNumberic}>
                <Typography
                  title={'38'}
                  size={16}
                  color={colors.peraTextColor}
                  textStyle={styles.numerics}
                />
              </View>
              <View style={styles.sizesNumberic}>
                <Typography
                  title={'39'}
                  size={16}
                  color={colors.peraTextColor}
                  textStyle={styles.numerics}
                />
              </View>
              <View
                style={[
                  styles.sizesNumberic,
                  {backgroundColor: colors.buttonColor},
                ]}>
                <Typography
                  title={'40'}
                  size={16}
                  color={colors.secondColor}
                  textStyle={styles.numerics}
                />
              </View>
              <View style={styles.sizesNumberic}>
                <Typography
                  title={'41'}
                  size={16}
                  color={colors.peraTextColor}
                  textStyle={styles.numerics}
                />
              </View>
              <View style={styles.sizesNumberic}>
                <Typography
                  title={'42'}
                  size={16}
                  color={colors.peraTextColor}
                  textStyle={styles.numerics}
                />
              </View>
              <View style={styles.sizesNumberic}>
                <Typography
                  title={'43'}
                  size={16}
                  color={colors.peraTextColor}
                  textStyle={styles.numerics}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.finalCartBtn}>
          <View>
            <Typography
              title={'Price'}
              size={16}
              color={colors.peraTextColor}
              textStyle={styles.bestSellerName}
            />
            <Typography
              title={product.price}
              size={20}
              textStyle={styles.bestSellerName}
            />
          </View>
          <View>
            <Button
              title={'Add To Cart'}
              style={styles.cartBtn}
              onPress={addCartHandle}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;
