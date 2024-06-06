import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import { colors } from '../../../constants/colors';

type typoProps = {
  textStyle?: TextStyle | TextStyle[];
  title?: string;
  size?: number;
  color?: string;
};

const Typography = (props: typoProps) => {
  const {textStyle, title, size=18, color=''} = props;
  const  txtStyle = textStyles(size,color);

  return (
    <Text
      style={[
        txtStyle.textContainer,
        textStyle,
      ]}>
      {title}
    </Text>
  );
};

const textStyles = (size:number,color:string) =>
  StyleSheet.create({
    textContainer:{
      fontSize: size ? size : 18,
      color: color ? color : colors.headingTextColor,
    }
  });

export default Typography;
