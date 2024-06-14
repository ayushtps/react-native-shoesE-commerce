import React, {useContext} from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
import {fonts} from '../../../constants/fonts';
import {AuthenticatedUserContext} from '../../../../App';

type typoProps = {
  textStyle?: TextStyle | TextStyle[];
  title?: string | number;
  size?: number;
  color?: string;
};

const Typography = (props: typoProps) => {
  const {textStyle, title, size = 18, color = ''} = props;
  const {theme} = useContext(AuthenticatedUserContext);
  const txtStyle = textStyles(size, color, theme);

  return <Text style={[txtStyle.textContainer, textStyle]}>{title}</Text>;
};

const textStyles = (size: number, color: string, theme: any) =>
  StyleSheet.create({
    textContainer: {
      fontSize: size ? size : 18,
      color: color ? color : theme.headingTextColor,
      fontFamily: fonts.medium,
    },
  });

export default Typography;
