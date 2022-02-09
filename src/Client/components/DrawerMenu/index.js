import React, {useState} from 'react';
import {Image, Text, View, Switch} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {BackgroundColors, Sizes} from '../../../assets/RootStyle';
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
} from '../../assets/Icons';
import {styles} from './style';
import userPic from '../../assets/images/user.png';
import {AirbnbRating} from 'react-native-ratings';
import i18n from '../../../assets/I18n';
import {deviceInfo} from '../../../assets/DeviceInfo';

const DrawerMenu = props => {
  const [isEnabled, setIsEnabled] = useState(false);
  const {profilePic, profileInfo, starStyle, underLine} = styles();
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <DrawerContentScrollView
      style={{
        backgroundColor: '#F2F2F2',
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
            <Text>+37477314814</Text>
            <View style={starStyle}>
              <AirbnbRating
                count={5}
                reviews={false}
                showRating={false}
                defaultRating={Math.round(3.2) || 0}
                size={Sizes.size20}
                isDisabled={true}
                selectedColor="#AF41C1"
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
              label={i18n.t('pages.activations.title')}
              onPress={() => props.navigation.navigate('Activations')}
              labelStyle={{
                fontSize:
                  deviceInfo.deviceHeight < 822 ? Sizes.size16 : Sizes.size20,
              }}
              icon={() => (
                <Magnets
                  IconWidth={Sizes.size22}
                  IconHeight={Sizes.size22}
                  IconColorStart={BackgroundColors.gradientColorStart}
                  IconColorEnd={BackgroundColors.gradientColorEnd}
                />
              )}
            />
            <DrawerItem
              label={i18n.t('pages.orders.title')}
              onPress={() => props.navigation.navigate('Orders')}
              labelStyle={{
                fontSize:
                  deviceInfo.deviceHeight < 822 ? Sizes.size16 : Sizes.size20,
              }}
              icon={() => (
                <Orders
                  IconWidth={Sizes.size22}
                  IconHeight={Sizes.size22}
                  IconColorStart={BackgroundColors.gradientColorStart}
                  IconColorEnd={BackgroundColors.gradientColorEnd}
                />
              )}
            />

            <DrawerItem
              label={i18n.t('pages.settings.title')}
              onPress={() => props.navigation.navigate('Settings')}
              labelStyle={{
                fontSize:
                  deviceInfo.deviceHeight < 822 ? Sizes.size16 : Sizes.size20,
              }}
              icon={() => (
                <Settings
                  IconWidth={Sizes.size22}
                  IconHeight={Sizes.size22}
                  IconColorStart={BackgroundColors.gradientColorStart}
                  IconColorEnd={BackgroundColors.gradientColorEnd}
                />
              )}
            />
            <DrawerItem
              label={i18n.t('pages.help.title')}
              onPress={() => props.navigation.navigate('Help')}
              labelStyle={{
                fontSize:
                  deviceInfo.deviceHeight < 822 ? Sizes.size16 : Sizes.size20,
              }}
              icon={() => (
                <Help
                  IconWidth={Sizes.size24}
                  IconHeight={Sizes.size24}
                  IconColorStart={BackgroundColors.gradientColorStart}
                  IconColorEnd={BackgroundColors.gradientColorEnd}
                />
              )}
            />
            <DrawerItem
              label={i18n.t('pages.info.title')}
              onPress={() => props.navigation.navigate('Info')}
              labelStyle={{
                fontSize:
                  deviceInfo.deviceHeight < 822 ? Sizes.size16 : Sizes.size20,
              }}
              icon={() => (
                <Info
                  IconWidth={Sizes.size22}
                  IconHeight={Sizes.size22}
                  IconColorStart={BackgroundColors.gradientColorStart}
                  IconColorEnd={BackgroundColors.gradientColorEnd}
                />
              )}
            />
            <DrawerItem
              label={i18n.t('pages.security.title')}
              onPress={() => props.navigation.navigate('Security')}
              labelStyle={{
                fontSize:
                  deviceInfo.deviceHeight < 822 ? Sizes.size16 : Sizes.size20,
              }}
              icon={() => (
                <Security
                  IconWidth={Sizes.size22}
                  IconHeight={Sizes.size22}
                  IconColorStart={BackgroundColors.gradientColorStart}
                  IconColorEnd={BackgroundColors.gradientColorEnd}
                />
              )}
            />
            <DrawerItem
              label={i18n.t('pages.driver.title')}
              onPress={() => {}}
              labelStyle={{
                fontSize:
                  deviceInfo.deviceHeight < 822 ? Sizes.size16 : Sizes.size20,
              }}
              icon={() => (
                <Driver
                  IconWidth={Sizes.size22}
                  IconHeight={Sizes.size22}
                  IconColorStart={BackgroundColors.gradientColorStart}
                  IconColorEnd={BackgroundColors.gradientColorEnd}
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
              IconColorStart={BackgroundColors.gradientColorStart}
              IconColorEnd={BackgroundColors.gradientColorEnd}
            />
            <Switch
              trackColor={{false: '#AF41C1', true: '#3C449F'}}
              thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={{marginLeft: Sizes.size7}}
            />
            <Moon
              IconWidth={Sizes.size22}
              IconHeight={Sizes.size22}
              IconColorStart={BackgroundColors.gradientColorStart}
              IconColorEnd={BackgroundColors.gradientColorEnd}
            />
          </View>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerMenu;
