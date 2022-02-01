import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ArrowRight} from '../../assets/images/Icons';
import {styles} from './styles';
import NavigationService from '../../RootNavigation';
import * as RootNavigation from '../../RootNavigation';
import {BackgroundColors, Colors, Sizes} from '../../assets/RootStyle';
import i18n from '../../assets/I18n';

const LinkItem = ({title, titleColor, navigate, linkState, query, onPress}) => {
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
          style={[text, {color: titleColor ? titleColor : Colors.black}]}
          numberOfLines={1}
          ellipsizeMode="tail">
          {i18n.t(`${title}`)}
        </Text>
      </View>
      <View style={linkRightContainer}>
        {linkState ? (
          <View style={linkStateContainer}>
            <Text style={linkStateText} numberOfLines={1} ellipsizeMode="tail">
              {i18n.t(linkState)}
            </Text>
          </View>
        ) : null}
        <View style={linkRightIcon}>
          <ArrowRight
            IconWidth={Sizes.size16}
            IconHeight={Sizes.size16}
            IconColorStart={BackgroundColors.gradientColorStart}
            IconColorEnd={BackgroundColors.gradientColorEnd}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export {LinkItem};
