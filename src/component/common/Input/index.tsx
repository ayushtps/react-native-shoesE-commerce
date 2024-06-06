import React from 'react';
import {
  KeyboardTypeOptions,
  StyleSheet,
  TextInput,
  TextStyle,
  View,
} from 'react-native';
import {colors} from '../../../constants/colors';
import { fonts } from '../../../constants/fonts';

type inputProps = {
  inputStyle?: TextStyle | TextStyle[];
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  onChangeText?: (text: string) => void;
  value?: string;
  multiline?: boolean;
  numberOfLines?: number;
  secureTextEntry?: boolean;
};

const Inputs = (props: inputProps) => {
  const {
    placeholder,
    keyboardType,
    inputStyle,
    onChangeText,
    value,
    numberOfLines,
    multiline,
    secureTextEntry,
  } = props;
  return (
    <View>
      <TextInput
        style={[styles.inputs, inputStyle]}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        value={value}
        placeholderTextColor={colors.peraTextColor}
        multiline={multiline}
        numberOfLines={numberOfLines}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputs: {
    borderRadius: 50,
    fontSize: 14,
    paddingHorizontal: 14,
    paddingVertical:14,
    color: colors.headingTextColor,
    backgroundColor: colors.secondColor,
    fontFamily:fonts.regular
  },
});

export default Inputs;
