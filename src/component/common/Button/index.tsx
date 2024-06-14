import React, { useContext } from 'react';
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  TextStyle,
} from 'react-native';
import Typography from '../Typography';
import {fonts} from '../../../constants/fonts';
import { AuthenticatedUserContext } from '../../../../App';

type buttonProps = {
  style?: TextStyle | TextStyle[];
  title?: string;
  onPress?: (e: GestureResponderEvent) => void;
};

const Button = (props: buttonProps) => {
  const {title, onPress, style} = props;
  const {theme} = useContext(AuthenticatedUserContext);

  const buttonStyle = buttonStyles(theme);
  return (
    <Pressable onPress={onPress} style={[buttonStyle.buttonContainer, style]}>
      <Typography
        title={title}
        color={theme.tintColor}
        textStyle={buttonStyle.textAlign}
      />
    </Pressable>
  );
};
const buttonStyles = (theme) =>
  StyleSheet.create({
    textAlign: {
      fontSize: 18,
      fontFamily: fonts.medium,
    },
    buttonContainer: {
      backgroundColor: theme.buttonColor,
      borderRadius: 50,
      paddingVertical: 16,
      paddingHorizontal: 12,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Button;
