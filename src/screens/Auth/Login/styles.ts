import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";
import { fonts } from "../../../constants/fonts";

export const styles = StyleSheet.create({
    loginContainer: {
      flex: 1,
      backgroundColor: colors.primaryColor,
    },
    loginInner: {
      padding: 20,
    },
    headerBack: {
      backgroundColor: colors.secondColor,
      padding: 10,
      height: 44,
      width: 44,
      borderRadius: 40,
    },
    title: {
      fontFamily: fonts.bold,
    },
    loginContent: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 32,
      marginBottom: 40,
    },
    textPera: {
      marginTop: 5,
      fontFamily: fonts.regular,
    },
    label: {
      marginBottom: 12,
      fontFamily: fonts.medium,
    },
    inputContainer: {
      marginBottom: 25,
    },
    recoveryText: {
      textAlign: 'right',
      marginTop: 12,
      marginBottom: 30,
      fontFamily: fonts.regular,
    },
    googleBtn: {
      backgroundColor: colors.secondColor,
      flexDirection: 'row',
      borderRadius: 50,
      paddingVertical: 16,
      paddingHorizontal: 12,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      marginBottom: 45,
    },
    googleIcon: {
      marginRight: 5,
    },
    registrationContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });