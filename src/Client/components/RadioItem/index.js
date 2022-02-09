import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import * as RootNavigation from '../../../RootNavigation';
import {BackgroundColors, Colors, Sizes} from '../../../assets/RootStyle';
import {CustomRadioButton} from '../CustomRadioButton';
import i18n from '../../../assets/I18n';

const RadioItem = ({
  title,
  width,
  height,
  titleColor,
  onPress,
  value,
  change,
  showCircle = true,
  fontFamily,
}) => {
  const {text, container, titleContainer, linkIcon} = styles();
  return (
    <TouchableOpacity
      onPress={() => {
        if (onPress) {
          onPress();
        }
      }}
      activeOpacity={0.7}
      style={[container, {width: width, height: height}]}>
      <View style={linkIcon}>
        {showCircle ? (
          <CustomRadioButton
            width={Sizes.size7}
            height={Sizes.size7}
            startColor={BackgroundColors.gradientColorStart}
            endColor={BackgroundColors.gradientColorEnd}
            value={value}
            change={change}
          />
        ) : null}
      </View>

      <View style={titleContainer}>
        <Text
          style={[
            text,
            {
              color: titleColor ? titleColor : Colors.black,
              fontFamily: fontFamily ? fontFamily : 'BraindGyumri',
            },
          ]}
          numberOfLines={1}
          ellipsizeMode="tail">
          {i18n.t(`${title}`)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export {RadioItem};
