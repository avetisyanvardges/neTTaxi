import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {ArrowLeftIcon} from '../../assets/Icons';
import {Sizes, IconsStyles, BackgroundColors} from '../../../assets/RootStyle';
import i18n from '../../../assets/I18n';
import {LinearTextGradient} from 'react-native-text-gradient';
const ScreenHeader = ({title, leftIcon, leftIconPress}) => {
  const {
    headerContainer,
    iconContainer,
    titleStyle,
    touchableIconContainer,
    iconWidth,
    titleContainerCenter,
  } = styles();
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
              IconColorStart={BackgroundColors.gradientColorStart}
              IconColorEnd={BackgroundColors.gradientColorEnd}
            />
          </TouchableOpacity>
        ) : null}
      </View>

      <View style={[titleContainerCenter, {}]}>
        <LinearTextGradient
          locations={[0, 1]}
          colors={['#3C449F', '#AF41C1']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <Text
            style={{
              fontSize: 32,
              color: '#fff',
              // fontFamily: 'BraindGyumri',
              // fontStyle: 'normal',
              // fontWeight: 'normal',
            }}
            numberOfLines={1}
            ellipsizeMode={'tail'}>
            {title ? i18n.t(`${title}`) : ''}
          </Text>
        </LinearTextGradient>
      </View>
    </View>
  );
};

export {ScreenHeader};
