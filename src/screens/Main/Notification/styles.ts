import { StyleSheet } from "react-native";
import { fonts } from "../../../constants/fonts";

export const styling=(theme) => StyleSheet.create({
    notificationContainer: {
      flex: 1,
      backgroundColor: theme.primaryColor,
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
      backgroundColor: theme.secondColor,
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
      backgroundColor: theme.buttonColor,
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