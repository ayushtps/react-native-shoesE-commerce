import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { fonts } from "../../constants/fonts";

export const styles = StyleSheet.create({
    itemContainer: {
      flex: 1,
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
    secondContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: colors.secondColor,
      borderRadius: 12,
    },
    detailCategory: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 24,
      marginBottom: 16,
    },
    wishListContainer:{
      position:'absolute',
      left:10,
      top:10,
      padding:5,
      backgroundColor:colors.primaryColor,
      borderRadius:40,
      zIndex:9999
    },
    emptyView:{
      justifyContent:'center',
      alignItems:'center'
    },
  });