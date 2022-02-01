import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {Sizes} from '../../assets/RootStyle';
const CustomRadioButton = ({
  value,
  change,
  width,
  height,
  startColor,
  endColor,
}) => {
  const {customCheckboxContainer} = styles();
  return (
    <TouchableOpacity onPress={change}>
      <LinearGradient
        start={{x: 0, y: 0.5}}
        end={{x: 1.3, y: 0.5}}
        colors={[startColor, endColor]}
        style={{
          width: Sizes.size9,
          height: Sizes.size9,
          borderRadius: Sizes.size50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={[
            customCheckboxContainer,
            {
              width,
              height,
            },
          ]}>
          {value ? (
            <LinearGradient
              start={{x: 0, y: 0.5}}
              end={{x: 1.3, y: 0.5}}
              colors={[startColor, endColor]}
              style={{borderRadius: Sizes.size50}}
            />
          ) : null}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export {CustomRadioButton};
