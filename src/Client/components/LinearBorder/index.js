import React from 'react';
import {View, TextInput} from 'react-native';
import {styles} from './style';
import {BackgroundColors, Sizes} from '../../../assets/RootStyle';
import {deviceInfo} from '../../../assets/DeviceInfo';
import LinearGradient from 'react-native-linear-gradient';

const LinearBorder = ({props, style}) => {
  const {container} = styles();
  return (
    <View style={container}>
      <LinearGradient
        start={{x: 0, y: 0.5}}
        end={{x: 1.3, y: 0.5}}
        colors={[
          BackgroundColors.gradientColorStart,
          BackgroundColors.gradientColorEnd,
        ]}
        style={style}>
        {props}
      </LinearGradient>
    </View>
  );
};

export {LinearBorder};
