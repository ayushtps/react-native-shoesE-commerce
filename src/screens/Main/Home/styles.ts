import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";
import { fonts } from "../../../constants/fonts";

export const styles = StyleSheet.create({
    homeContainer: {
      flex: 1,
      backgroundColor: colors.primaryColor,
      padding: 20,
      marginBottom: 95,
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 24,
    },
    headerBack: {
      backgroundColor: colors.secondColor,
      padding: 10,
      height: 44,
      width: 44,
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    location: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 3,
    },
    locationIcon: {
      marginRight: 5,
    },
    middlePoint: {
      alignItems: 'center',
    },
    searchInner: {
      flexDirection: 'row',
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
    categoryContainer: {
      marginVertical: 24,
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 8,
      paddingHorizontal: 20,
      borderRadius: 40,
      backgroundColor: colors.secondColor,
    },
    selectedItemContainer: {
      backgroundColor: colors.buttonColor,
    },
    itemText: {
      marginLeft: 10,
      fontFamily: fonts.medium,
    },
    detailCategory: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    renderCategory: {
      marginTop: 16,
      marginBottom: 26,
    },
    cartCircle: {
      position: 'absolute',
      right: 0,
      top: 0,
      height: 15,
      width: 15,
      borderRadius: 40,
      zIndex: 999,
      backgroundColor: colors.buttonColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
    emptyView:{
      justifyContent:'center',
      alignItems:'center'
    },
  });