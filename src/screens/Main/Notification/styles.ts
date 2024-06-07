import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";
import { fonts } from "../../../constants/fonts";

export const styles = StyleSheet.create({
    notificationContainer: {
      flex: 1,
      backgroundColor: colors.primaryColor,
      padding: 20,
    },
    notificationFlat: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 10,
    },
    notiImage: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.secondColor,
      height: 85,
      width: 87,
      borderRadius: 20,
    },
    notiHeader: {
      width: 152,
      fontFamily: fonts.medium,
    },
    txt: {
      fontFamily: fonts.regular,
    },
    price: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    con1: {
      marginVertical: 20,
    },
    dot: {
      height: 12,
      width: 12,
      backgroundColor: colors.buttonColor,
      borderRadius: 40,
      // marginTop:10
    },
    dotContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    emptyView:{
      justifyContent:'center',
      alignItems:'center'
    },
  });