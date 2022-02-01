import React from 'react';
import {View, TextInput} from 'react-native';
import {styles} from './style';

const RegInput = ({props, onChangeText, keyboardType, value, placeholder}) => {
  const {text, container} = styles();
  return (
    <View style={container}>
      {props}
      <TextInput
        style={text}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export {RegInput};
