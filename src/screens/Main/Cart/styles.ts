import {StyleSheet} from 'react-native';
import {fonts} from '../../../constants/fonts';

export const styling=(theme) => StyleSheet.create({
  cartContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: theme.primaryColor,
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
    backgroundColor: theme.secondColor,
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
    backgroundColor: theme.buttonColor,
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
    backgroundColor: theme.secondColor,
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
    borderColor: theme.peraTextColor,
    borderStyle: 'dotted',
    marginBottom: 5,
  },
});
