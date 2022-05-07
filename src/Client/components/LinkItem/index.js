import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ArrowRight} from '../../assets/Icons';
import {styles} from './styles';
import * as RootNavigation from '../../../RootNavigation';
import {Sizes} from '../../../assets/RootStyle';
import i18n from '../../../assets/I18n';
import {useSelector} from 'react-redux';

const LinkItem = ({title, titleColor, navigate, linkState, query, onPress}) => {
  const buttonColor = useSelector(store => store.themes.buttonColor);
  const theme = useSelector(store => store.themes.theme);

  const {
    text,
    container,
    titleContainer,
    linkRightContainer,
    linkRightIcon,
    linkStateContainer,
    linkStateText,
  } = styles();
  return (
    <TouchableOpacity
      onPress={() => {
        if (onPress) {
          onPress();
        }

        RootNavigation.navigate(navigate, {pageInfo: query});
      }}
      activeOpacity={0.7}
      style={container}>
      <View style={titleContainer}>
        <Text
          style={[text, {color: theme?.PRIMARY_TEXT_COLOR}]}
          numberOfLines={1}
          ellipsizeMode="tail">
          {i18n.t(`${title}`)}
        </Text>
      </View>
      <View style={linkRightContainer}>
        <View style={linkRightIcon}>
          <ArrowRight
            IconWidth={Sizes.size16}
            IconHeight={Sizes.size16}
            IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
            IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export {LinkItem};
