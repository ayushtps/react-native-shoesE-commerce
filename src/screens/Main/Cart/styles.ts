import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';
import {fonts} from '../../../constants/fonts';

export const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.primaryColor,
  },
  cartInner: {
    padding: 20,
    height: '70%',
  },
  cartListContainer: {
    marginTop: 24,
  },
  cartCard: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cartCardInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: colors.secondColor,
    height: 100,
    width: 100,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtStyles: {
    fontFamily: fonts.medium,
  },
  minusIcon: {
    backgroundColor: colors.buttonColor,
    borderRadius: 40,
    height: 28,
    width: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  addRemove: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lastItem: {
    flexDirection: 'column',
    alignContent: 'space-between',
  },
  trush: {
    marginTop: 10,
  },
  totalContainer: {
    backgroundColor: colors.secondColor,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  totalInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  emptyView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:150
  },
  extra: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: colors.peraTextColor,
    borderStyle: 'dotted',
    marginBottom: 5,
  },
});
