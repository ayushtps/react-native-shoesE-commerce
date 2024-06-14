import { StyleSheet } from "react-native";
import { fonts } from "../../../constants/fonts";

export const styling=(theme) => StyleSheet.create({
    homeContainer: {
      flex: 1,
      backgroundColor: theme.primaryColor,
      // paddingTop:20,
      // paddingLeft:20,
      // paddingRight:20,
      padding: 20,
      // paddingBottom:95,
      // marginBottom: 95,
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 24,
    },
    headerBack: {
      backgroundColor: theme.secondColor,
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
      color: theme.headingTextColor,
      backgroundColor: theme.secondColor,
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
      backgroundColor: theme.secondColor,
    },
    selectedItemContainer: {
      backgroundColor: theme.buttonColor,
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
      marginBottom: 120,
    },
    cartCircle: {
      position: 'absolute',
      right: 0,
      top: 0,
      height: 15,
      width: 15,
      borderRadius: 40,
      zIndex: 999,
      backgroundColor: theme.buttonColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
    emptyView:{
      justifyContent:'center',
      alignItems:'center'
    },
  });