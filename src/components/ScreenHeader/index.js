import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {ArrowLeft, Menu} from '../../assets/images/Icons';
import {Sizes, IconsStyles, BackgroundColors} from '../../assets/RootStyle';
import {Colors} from '../../assets/RootStyle';
import i18n from '../../assets/I18n';
const ScreenHeader = ({title, leftIcon, rightIcon, leftIconPress}) => {
  const {
    headerContainer,
    iconContainer,
    titleStyle,
    touchableIconContainer,
    iconWidth,
    titleContainerCenter,
  } = styles();
  return (
    <View style={headerContainer}>
      <View
        style={[
          iconContainer,
          {justifyContent: 'center', width: Sizes.size30},
        ]}>
        {leftIcon === 'back' ? (
          <TouchableOpacity
            style={[
              touchableIconContainer,
              iconWidth,
              {paddingHorizontal: Sizes.size29},
            ]}
            onPress={leftIconPress}>
            <ArrowLeft
              IconWidth={IconsStyles.medium}
              IconHeight={IconsStyles.medium}
              IconColorStart={BackgroundColors.gradientColorStart}
              IconColorEnd={BackgroundColors.gradientColorEnd}
            />
          </TouchableOpacity>
        ) : null}
      </View>

      <View style={titleContainerCenter}>
        <Text
          style={[titleStyle, touchableIconContainer]}
          numberOfLines={1}
          ellipsizeMode={'tail'}>
          {title ? i18n.t(`pages.${title}`) : ''}
        </Text>
      </View>
    </View>
  );
};

export {ScreenHeader};
