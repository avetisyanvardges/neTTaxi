import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {Sizes} from '../../../assets/RootStyle';
import i18n from '../../../assets/I18n';
import LinearGradient from 'react-native-linear-gradient';

const LinearButton = ({
  startColor,
  endColor,
  size,
  onPress,
  disabled,
  title,
  buttonWidth,
  buttonPadding,
}) => {
  const {container, textStyle} = styles();
  return (
    <LinearGradient
      start={{x: 0, y: 0.5}}
      end={{x: 1.3, y: 0.5}}
      colors={[startColor, endColor]}
      style={{borderRadius: Sizes.size18}}>
      <TouchableOpacity
        style={[
          container,
          size ? styles()[size] : [buttonWidth, buttonPadding],
        ]}
        onPress={onPress}
        disabled={disabled}>
        <Text style={[textStyle, styles()[`${size}FontSize`]]}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export {LinearButton};
