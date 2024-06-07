import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { fonts } from "../../constants/fonts";

export const styles = StyleSheet.create({
    paymentContainer: {
      flex: 1,
      backgroundColor: colors.primaryColor,
    },
    paymentInner: {
      padding: 20,
    },
    paymentDetails: {
      backgroundColor: colors.secondColor,
      paddingVertical: 16,
      paddingHorizontal: 20,
      marginTop: 24,
      borderRadius: 16,
    },
    infoText: {
      fontFamily: fonts.medium,
    },
    info1Text: {
      fontFamily: fonts.regular,
    },
    infoContainer: {
      marginTop: 16,
      marginBottom: 12,
    },
    infoContainerInner: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logoBack: {
      backgroundColor: colors.primaryColor,
      borderRadius: 40,
      height: 30,
      width: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    infoDetails: {
      flexDirection: 'column',
      // justifyContent:'space-between',
      // alignItems:'center'
    },
    imgMap: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
    },
    paymentMethod: {
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 5,
    },
    paymentImg: {
      backgroundColor: colors.primaryColor,
      borderRadius: 40,
      height: 40,
      width: 40,
      justifyContent: 'center',
      alignItems: 'center',
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
    },
    extra: {
      paddingBottom: 10,
      borderBottomWidth: 1,
      borderColor: colors.peraTextColor,
      borderStyle: 'dotted',
      marginBottom: 5,
    },
    containerStyle:{
      backgroundColor:colors.secondColor,
      borderRadius:20,
      padding:20,
      marginHorizontal:20
    },
    successImage:{
      justifyContent:'center',
      alignItems:'center'
    }
  });