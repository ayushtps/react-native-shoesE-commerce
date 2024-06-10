import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {fonts} from '../../constants/fonts';

export const styles = StyleSheet.create({
  containerStyle: {
    padding:20,
    backgroundColor:colors.secondColor,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    marginTop:'auto'
  },
  closeBtn:{
    justifyContent:'center',
    alignItems:'center'
  },
  scroll:{
    justifyContent:'center',
    alignItems:'center'
  },
  sliderValuesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    marginBottom:10
  },
  searchContainer: {
    backgroundColor: colors.primaryColor,
    padding: 20,
    flex:1
  },
  emptyView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInner: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
  },
  search: {
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 1,
    marginHorizontal: 5,
  },
  field: {
    flex: 1,
    borderRadius: 50,
    fontSize: 14,
    paddingLeft: 40,
    fontFamily: fonts.regular,
    paddingVertical: 14,
    color: colors.headingTextColor,
    backgroundColor: colors.secondColor,
  },
  itemContainer: {
    marginHorizontal: 10,
    backgroundColor: colors.secondColor,
    borderRadius: 16,
    width: 156,
    overflow: 'hidden',
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  productName: {
    fontFamily: fonts.medium,
  },
  addCartBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.buttonColor,
    borderTopLeftRadius: 20,
    height: 40,
    width: 39,
  },
  bottomCart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 0,
    margin: 0,
  },
  priceText: {
    margin: 12,
    fontFamily: fonts.medium,
  },
  txtContainer: {
    marginLeft: 12,
  },
  wishListContainer: {
    position: 'absolute',
    left: 10,
    top: 10,
    padding: 5,
    backgroundColor: colors.primaryColor,
    borderRadius: 40,
    zIndex: 9999,
  },
  filter: {
    marginLeft: 10,
  },
});
