import React, { useContext } from 'react';
import {
  KeyboardTypeOptions,
  StyleSheet,
  TextInput,
  TextStyle,
  View,
} from 'react-native';
import {fonts} from '../../../constants/fonts';
import { AuthenticatedUserContext } from '../../../../App';

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
  const {theme} = useContext(AuthenticatedUserContext);

  const styles = styling(theme);
  return (
    <View>
      <TextInput
        style={[styles.inputs, inputStyle]}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        value={value}
        placeholderTextColor={theme.peraTextColor}
        multiline={multiline}
        numberOfLines={numberOfLines}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styling=(theme) => StyleSheet.create({
  inputs: {
    borderRadius: 50,
    fontSize: 14,
    paddingHorizontal: 14,
    paddingVertical: 14,
    color: theme.headingTextColor,
    backgroundColor: theme.secondColor,
    fontFamily: fonts.regular,
  },
});

export default Inputs;
