import React, {useEffect, useState} from 'react';
import {Image, Text, View, Switch} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Sizes} from '../../../assets/RootStyle';
import {
  Magnets,
  Orders,
  Help,
  Info,
  Settings,
  Security,
  Driver,
  Sun,
  Moon,
  DefaultUser,
} from '../../assets/Icons';
import {styles} from './style';
import {LinearTextGradient} from 'react-native-text-gradient';
import {AirbnbRating} from 'react-native-ratings';
import i18n from '../../../assets/I18n';
import {deviceInfo} from '../../../assets/DeviceInfo';
import {useDispatch, useSelector} from 'react-redux';
import {DARK_THEME, LIGHT_THEME} from '../../../actionsTypes';
import UserImag from '../../assets/images/man.png';
import LinearGradient from 'react-native-linear-gradient';
import {makeAction} from '../../../makeAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DrawerMenu = props => {
  useEffect(() => {
    _getTheme();
  }, []);

  const buttonColor = useSelector(store => store.themes.buttonColor);
  const theme = useSelector(store => store.themes.theme);
  const dispatch = useDispatch();
  const UserImage = false;
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
        borderTopRightRadius: Sizes.size35,
        borderBottomRightRadius: Sizes.size35,
      }}
      contentContainerStyle={{
        flex: 1,
      }}>
      <View>
        <View>
          <View style={profilePic}>
            <LinearGradient
              start={{x: 0, y: 0.5}}
              end={{x: 1.3, y: 0.5}}
              colors={buttonColor?.PRIMARY_BUTTON_COLOR}
              style={{
                width: Sizes.size70,
                height: Sizes.size70,
                borderRadius: Sizes.size50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {UserImage ? (
                <Image source={UserImag} />
              ) : (
                <View
                  style={{
                    width: Sizes.size55,
                    height: Sizes.size55,
                    borderRadius: Sizes.size27,
                    backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <DefaultUser
                    IconWidth={Sizes.size28}
                    IconHeight={Sizes.size28}
                    IconColor={theme?.PRIMARY_TEXT_COLOR}
                  />
                </View>
              )}
            </LinearGradient>
          </View>
          <View style={profileInfo}>
            {/*<LinearTextGradient*/}
            {/*  locations={[0, 1]}*/}
            {/*  colors={buttonColor?.PRIMARY_BUTTON_COLOR}*/}
            {/*  start={{x: 0, y: 0}}*/}
            {/*  end={{x: 1, y: 0}}>*/}
            {/*  <Text>+37477314814</Text>*/}
            {/*</LinearTextGradient>*/}
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
            }}>
            <DrawerItem
              label={i18n.t('client.pages.activations.title')}
              onPress={() => props.navigation.navigate('Activations')}
              labelStyle={{
                fontSize:
                  deviceInfo.deviceHeight < 822 ? Sizes.size16 : Sizes.size20,
                color: theme?.PRIMARY_TEXT_COLOR,
              }}
              icon={() => (
                <Magnets
                  IconWidth={Sizes.size22}
                  IconHeight={Sizes.size22}
                  IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                  IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
                />
              )}
            />
            <DrawerItem
              label={i18n.t('client.pages.orders.title')}
              onPress={() => props.navigation.navigate('Orders')}
              labelStyle={{
                fontSize:
                  deviceInfo.deviceHeight < 822 ? Sizes.size16 : Sizes.size20,
                color: theme?.PRIMARY_TEXT_COLOR,
              }}
              icon={() => (
                <Orders
                  IconWidth={Sizes.size22}
                  IconHeight={Sizes.size22}
                  IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                  IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
                />
              )}
            />

            <DrawerItem
              label={i18n.t('client.pages.settings.title')}
              onPress={() => props.navigation.navigate('Settings')}
              labelStyle={{
                fontSize:
                  deviceInfo.deviceHeight < 822 ? Sizes.size16 : Sizes.size20,
                color: theme?.PRIMARY_TEXT_COLOR,
              }}
              icon={() => (
                <Settings
                  IconWidth={Sizes.size22}
                  IconHeight={Sizes.size22}
                  IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                  IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
                />
              )}
            />
            <DrawerItem
              label={i18n.t('client.pages.help.title')}
              onPress={() => props.navigation.navigate('Help')}
              labelStyle={{
                fontSize:
                  deviceInfo.deviceHeight < 822 ? Sizes.size16 : Sizes.size20,
                color: theme?.PRIMARY_TEXT_COLOR,
              }}
              icon={() => (
                <Help
                  IconWidth={Sizes.size24}
                  IconHeight={Sizes.size24}
                  IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                  IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
                />
              )}
            />
            <DrawerItem
              label={i18n.t('client.pages.info.title')}
              onPress={() => props.navigation.navigate('Info')}
              labelStyle={{
                fontSize:
                  deviceInfo.deviceHeight < 822 ? Sizes.size16 : Sizes.size20,
                color: theme?.PRIMARY_TEXT_COLOR,
              }}
              icon={() => (
                <Info
                  IconWidth={Sizes.size22}
                  IconHeight={Sizes.size22}
                  IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                  IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
                />
              )}
            />
            <DrawerItem
              label={i18n.t('client.pages.security.title')}
              onPress={() => props.navigation.navigate('Security')}
              labelStyle={{
                fontSize:
                  deviceInfo.deviceHeight < 822 ? Sizes.size16 : Sizes.size20,
                color: theme?.PRIMARY_TEXT_COLOR,
              }}
              icon={() => (
                <Security
                  IconWidth={Sizes.size22}
                  IconHeight={Sizes.size22}
                  IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                  IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
                />
              )}
            />
            <DrawerItem
              label={i18n.t('client.pages.driverr.title')}
              onPress={() => props.navigation.navigate('Driver')}
              labelStyle={{
                fontSize:
                  deviceInfo.deviceHeight < 822 ? Sizes.size16 : Sizes.size20,
                color: theme?.PRIMARY_TEXT_COLOR,
              }}
              icon={() => (
                <Driver
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

export default DrawerMenu;
