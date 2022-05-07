import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {ArrowLeftIcon} from '../../assets/Icons';
import {
  Sizes,
  IconsStyles,
  BackgroundColors,
  Colors,
} from '../../../assets/RootStyle';
import i18n from '../../../assets/I18n';
import {useSelector} from 'react-redux';
const ScreenHeader = ({title, leftIcon, leftIconPress}) => {
  const {
    headerContainer,
    iconContainer,
    titleStyle,
    touchableIconContainer,
    iconWidth,
    titleContainerCenter,
  } = styles();
  const buttonColor = useSelector(store => store.themes.buttonColor);
  const theme = useSelector(store => store.themes.theme);
  return (
    <View style={[headerContainer, {width: 414, height: 75, left: 0, top: 0}]}>
      <View style={[iconContainer, {justifyContent: 'center', width: '20%'}]}>
        {leftIcon === 'back' ? (
          <TouchableOpacity
            style={[
              touchableIconContainer,
              iconWidth,
              {paddingHorizontal: Sizes.size11},
            ]}
            onPress={leftIconPress}>
            <ArrowLeftIcon
              IconWidth={IconsStyles.medium}
              IconHeight={IconsStyles.medium}
              IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
              IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
            />
          </TouchableOpacity>
        ) : null}
      </View>

      <View style={[titleContainerCenter, {}]}>
        <Text
          style={{
            fontSize: 32,
            color: theme?.PRIMARY_TEXT_COLOR,
            fontFamily: 'BraindGyumri',
            fontStyle: 'normal',
            fontWeight: 'normal',
          }}
          numberOfLines={1}
          ellipsizeMode={'tail'}>
          {title ? i18n.t(`${title}`) : ''}
        </Text>
      </View>
    </View>
  );
};

export {ScreenHeader};
