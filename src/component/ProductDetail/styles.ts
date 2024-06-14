import {StyleSheet} from 'react-native';
import {fonts} from '../../constants/fonts';

export const styling=(theme) => StyleSheet.create({
  productDetails: {
    flex: 1,
    backgroundColor: theme.primaryColor,
  },
  productHeader: {
    paddingHorizontal: 20,
    marginTop: 8,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  detailsContainer: {
    flex: 1,
    height: '100%',
    backgroundColor: theme.secondColor,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  bestSeller: {
    fontFamily: fonts.regular,
  },
  bestSellerName: {
    fontFamily: fonts.medium,
  },
  galleryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Inner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  gallery: {
    marginVertical: 16,
  },
  titleGallery: {
    fontFamily: fonts.medium,
    marginBottom: 16,
  },
  sizeNumbers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sizes: {
    marginHorizontal: 6,
    fontFamily: fonts.medium,
  },
  sizesNumberic: {
    height: 45,
    width: 45,
    borderRadius: 40,
    backgroundColor: theme.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numericContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  numerics: {
    fontFamily: fonts.regular,
  },
  finalCartBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 1,
    padding: 13,
  },
  cartBtn: {
    width: 167,
  },
});
