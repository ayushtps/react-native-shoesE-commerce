import { StyleSheet } from "react-native";
import { fonts } from "../../../../constants/fonts";

export const styling=(theme) => StyleSheet.create({
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
  });