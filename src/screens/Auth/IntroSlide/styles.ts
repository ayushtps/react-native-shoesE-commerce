import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";
import { fonts } from "../../../constants/fonts";

export const styles = StyleSheet.create({
    circle4: {
      height: 250,
      width: 250,
      borderRadius: 120,
      backgroundColor: colors.dotColor,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: -70,
      right: '-35%',
      bottom: 0,
      overflow:'hidden',
    },
    circleInner:{
      height: 100,
      width: 100,
      borderRadius: 50,
      backgroundColor:'white',
      padding:10,
    },
    circle1: {
      height: 16,
      width: 16,
      borderRadius: 50,
      backgroundColor: colors.circleColor,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 10,
      left: 50,
      bottom: 0,
    },
    circle2: {
      height: 16,
      width: 16,
      borderRadius: 50,
      backgroundColor: colors.buttonColor,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      left: 30,
      bottom: 0,
    },
    circle3: {
      height: 16,
      width: 16,
      borderRadius: 50,
      backgroundColor: colors.buttonColor,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      right: 40,
      bottom: 25,
    },
    buttonCircle: {
      position: 'relative',
      bottom: 16,
      right: 15,
    },
    introContainer: {
      flex: 1,
      backgroundColor: colors.primaryColor,
    },
    slide: {
      flex: 1,
    },
    imageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 77,
    },
    image: {
      resizeMode: 'cover',
    },
    content: {
      marginVertical: 34,
      marginHorizontal: 20,
    },
    title: {
      maxWidth: 328,
      marginBottom: 16,
      textAlign: 'left',
      fontFamily:fonts.medium
    },
    text: {
      textAlign: 'left',
      lineHeight: 26,
      fontFamily:fonts.regular
  
    },
    introDoneContainer: {
      position: 'relative',
      bottom: 20,
    },
    introBtn: {
      marginBottom: 20,
    },
    btnNext: {
      width: 105,
    },
  });