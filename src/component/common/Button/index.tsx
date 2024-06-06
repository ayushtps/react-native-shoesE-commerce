import React from 'react';
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  TextStyle
} from 'react-native';
import { colors } from '../../../constants/colors';
import Typography from '../Typography';
import { fonts } from '../../../constants/fonts';

type buttonProps = {
  style?: TextStyle | TextStyle[];
  title?: string;
  onPress?: (e: GestureResponderEvent) => void;
};

const Button = (props: buttonProps) => {
  const {title, onPress, style} = props;
  const buttonStyle = buttonStyles();
  return (
    <Pressable onPress={onPress} style={[buttonStyle.buttonContainer, style]}>
      <Typography
        title={title}
        color={colors.primaryColor}
        textStyle={buttonStyle.textAlign}
      />
    </Pressable>
  );
};
const buttonStyles = () =>
  StyleSheet.create({
    textAlign: {
      fontSize: 18,
      fontFamily:fonts.medium
    },
    buttonContainer: {
      backgroundColor: colors.buttonColor,
      borderRadius: 50,
      paddingVertical: 16,
      paddingHorizontal: 12,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Button;
