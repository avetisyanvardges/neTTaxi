import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {ArrowLeft} from '../../assets/Icons';
import {Sizes, IconsStyles, BackgroundColors} from '../../../assets/RootStyle';
import i18n from '../../../assets/I18n';
import {useSelector} from 'react-redux';
const ScreenHeader = ({title, leftIcon, rightIcon, leftIconPress}) => {
  const buttonColor = useSelector(store => store.themes.buttonColor);
  const theme = useSelector(store => store.themes.theme);
  const {
    headerContainer,
    iconContainer,
    titleStyle,
    touchableIconContainer,
    iconWidth,
    titleContainerCenter,
  } = styles(theme);
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
              IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
              IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
            />
          </TouchableOpacity>
        ) : null}
      </View>

      <View style={titleContainerCenter}>
        <Text
          style={[titleStyle, touchableIconContainer]}
          numberOfLines={1}
          ellipsizeMode={'tail'}>
          {title ? i18n.t(`client.pages.${title}`) : ''}
        </Text>
      </View>
    </View>
  );
};

export {ScreenHeader};
