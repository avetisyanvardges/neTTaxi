import React, {useEffect, useState} from 'react';
import {Image, Text, View, Switch} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {BackgroundColors, Sizes} from '../../../assets/RootStyle';
import {
  ReinforcementsIcon,
  WalletIcon,
  DataIcon,
  SettingsIcon,
  SuggestionsIcon,
  SecurityIcon,
  RatingIcon,
} from '../../assets/Icons';
import {styles} from './style';
import userPic from '../../assets/images/user.png';
import {AirbnbRating} from 'react-native-ratings';
import i18n from '../../../assets/I18n';
import {deviceInfo} from '../../../assets/DeviceInfo';
import {Moon, Sun} from '../../../Client/assets/Icons';
import {makeAction} from '../../../makeAction';
import {DARK_THEME, LIGHT_THEME} from '../../../actionsTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
const DriverDrawer = props => {
  useEffect(() => {
    _getTheme();
  }, []);

  const buttonColor = useSelector(store => store.themes.buttonColor);
  const theme = useSelector(store => store.themes.theme);
  const dispatch = useDispatch();
  const [isEnabled, setIsEnabled] = useState(false);
  const {profilePic, profileInfo, starStyle, underLine} = styles();
  const _getTheme = () => {
    AsyncStorage.getItem('theme').then(res => {
      const response = JSON.parse(res);
      if (response) {
        dispatch(makeAction(DARK_THEME));
      } else {
        dispatch(makeAction(LIGHT_THEME));
      }

      setIsEnabled(response);
    });
  };

  const toggleSwitch = event => {
    setIsEnabled(previousState => !previousState);
    if (event) {
      dispatch(makeAction(DARK_THEME));
      AsyncStorage.setItem('theme', JSON.stringify(event));
    } else {
      dispatch(makeAction(LIGHT_THEME));
      AsyncStorage.setItem('theme', JSON.stringify(event));
    }
  };

  return (
    <DrawerContentScrollView
      style={{
        backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR,
      }}
      contentContainerStyle={{flex: 1}}>
      <View>
        <View>
          <View style={profilePic}>
            <Image
              source={userPic}
              style={{
                width: Sizes.size52,
                height: Sizes.size52,
                borderRadius: Sizes.size40,
              }}
            />
          </View>
          <View style={profileInfo}>
            <Text style={{color: theme?.PRIMARY_TEXT_COLOR}}>+37444750756</Text>
            <View style={starStyle}>
              <AirbnbRating
                count={5}
                reviews={false}
                showRating={false}
                defaultRating={Math.round(3.2) || 0}
                size={Sizes.size20}
                isDisabled={true}
                selectedColor={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
              />
            </View>
          </View>
        </View>
        <View style={underLine} />
        <View>
          <View
            style={{
              marginTop:
                deviceInfo.deviceHeight < 822 ? Sizes.size5 : Sizes.size35,
              color: theme?.PRIMARY_TEXT_COLOR,
            }}>
            <DrawerItem
              label={i18n.t('driver.pages.reinforcements.title')}
              onPress={() => props.navigation.navigate('Reinforcements')}
              labelStyle={{
                fontSize:
                  deviceInfo.deviceHeight < 822 ? Sizes.size16 : Sizes.size20,
                color: theme?.PRIMARY_TEXT_COLOR,
              }}
              icon={() => (
                <ReinforcementsIcon
                  IconWidth={Sizes.size22}
                  IconHeight={Sizes.size22}
                  IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                  IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
                />
              )}
            />
            <DrawerItem
              label={i18n.t('driver.pages.wallet.title')}
              onPress={() => props.navigation.navigate('Wallet')}
              labelStyle={{
                fontSize:
                  deviceInfo.deviceHeight < 822 ? Sizes.size16 : Sizes.size20,
                color: theme?.PRIMARY_TEXT_COLOR,
              }}
              icon={() => (
                <WalletIcon
                  IconWidth={Sizes.size22}
                  IconHeight={Sizes.size22}
                  IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                  IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
                />
              )}
            />

            <DrawerItem
              label={i18n.t('driver.pages.data.title')}
              onPress={() => props.navigation.navigate('Data')}
              labelStyle={{
                fontSize:
                  deviceInfo.deviceHeight < 822 ? Sizes.size16 : Sizes.size20,
                color: theme?.PRIMARY_TEXT_COLOR,
              }}
              icon={() => (
                <DataIcon
                  IconWidth={Sizes.size22}
                  IconHeight={Sizes.size22}
                  IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                  IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
                />
              )}
            />
            <DrawerItem
              label={i18n.t('driver.pages.settings.title')}
              onPress={() => props.navigation.navigate('Settings')}
              labelStyle={{
                fontSize:
                  deviceInfo.deviceHeight < 822 ? Sizes.size16 : Sizes.size20,
                color: theme?.PRIMARY_TEXT_COLOR,
              }}
              icon={() => (
                <SettingsIcon
                  IconWidth={Sizes.size24}
                  IconHeight={Sizes.size24}
                  IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                  IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
                />
              )}
            />
            <DrawerItem
              label={i18n.t('driver.pages.suggestions.title')}
              onPress={() => props.navigation.navigate('Suggestions')}
              labelStyle={{
                fontSize:
                  deviceInfo.deviceHeight < 822 ? Sizes.size16 : Sizes.size20,
                color: theme?.PRIMARY_TEXT_COLOR,
              }}
              icon={() => (
                <SuggestionsIcon
                  IconWidth={Sizes.size22}
                  IconHeight={Sizes.size22}
                  IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                  IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
                />
              )}
            />
            <DrawerItem
              label={i18n.t('driver.pages.security.title')}
              onPress={() => props.navigation.navigate('Security')}
              labelStyle={{
                fontSize:
                  deviceInfo.deviceHeight < 822 ? Sizes.size16 : Sizes.size20,
                color: theme?.PRIMARY_TEXT_COLOR,
              }}
              icon={() => (
                <SecurityIcon
                  IconWidth={Sizes.size22}
                  IconHeight={Sizes.size22}
                  IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                  IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
                />
              )}
            />
            <DrawerItem
              label={i18n.t('driver.pages.rating.title')}
              onPress={() => props.navigation.navigate('Rating')}
              labelStyle={{
                fontSize:
                  deviceInfo.deviceHeight < 822 ? Sizes.size16 : Sizes.size20,
                color: theme?.PRIMARY_TEXT_COLOR,
              }}
              icon={() => (
                <RatingIcon
                  IconWidth={Sizes.size22}
                  IconHeight={Sizes.size22}
                  IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                  IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
                />
              )}
            />
          </View>
          <View
            style={{
              marginTop:
                deviceInfo.deviceHeight < 822 ? Sizes.size35 : Sizes.size93,
              color: theme?.PRIMARY_TEXT_COLOR,
              flexDirection: 'row',
              marginHorizontal: Sizes.size18,
            }}>
            <Sun
              IconWidth={Sizes.size22}
              IconHeight={Sizes.size22}
              IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
              IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
            />
            <Switch
              trackColor={{
                false: buttonColor?.PRIMARY_BUTTON_COLOR[0],
                true: buttonColor?.PRIMARY_BUTTON_COLOR[1],
              }}
              thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => toggleSwitch(!isEnabled)}
              value={isEnabled}
              style={{marginLeft: Sizes.size7}}
            />
            <Moon
              IconWidth={Sizes.size22}
              IconHeight={Sizes.size22}
              IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
              IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
            />
          </View>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default DriverDrawer;
