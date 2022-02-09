import React from 'react';
import {Image, Text, View} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {BackgroundColors, Sizes} from '../../../assets/RootStyle';
import {
  WalletIcon,
  SettingsIcon,
  SecurityIcon,
  ReinforcementsIcon,
  DataIcon,
  SuggestionsIcon,
  RatingIcon,
} from '../../assets/Icons';
import {styles} from './style';
import userPic from '../../assets/images/user.png';
import {LinearTextGradient} from 'react-native-text-gradient';
import {AirbnbRating} from 'react-native-ratings';
import i18n from '../../../assets/I18n';
import LinearGradient from 'react-native-linear-gradient';
const DrawerMenu = props => {
  const {profilePic, profileInfo, starStyle, underLine} = styles();
  return (
    <DrawerContentScrollView
      style={{
        backgroundColor: '#F2F2F2',
      }}
      contentContainerStyle={{flex: 1}}>
      <View>
        <View>
          <View style={profilePic}>
            <LinearGradient
              locations={[0, 1]}
              colors={['#3C449F', '#AF41C1']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={{borderRadius: Sizes.size26}}>
              <Image
                source={userPic}
                style={{
                  width: Sizes.size52,
                  height: Sizes.size52,
                  borderRadius: Sizes.size40,
                }}
              />
            </LinearGradient>
          </View>
          <View style={profileInfo}>
            <LinearTextGradient
              locations={[0, 1]}
              colors={['#3C449F', '#AF41C1']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <Text>+37477314814</Text>
            </LinearTextGradient>
            <LinearTextGradient
              locations={[0, 1]}
              colors={['#3C449F', '#AF41C1']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <Text style={{fontSize: 18}}>Name Surname</Text>
            </LinearTextGradient>
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
        <View style={[underLine]} />
        <View>
          <View>
            <DrawerItem
              label={i18n.t('pages.reinforcements.title')}
              onPress={() => props.navigation.navigate('Reinforcements')}
              icon={() => (
                <ReinforcementsIcon
                  IconWidth={Sizes.size22}
                  IconHeight={Sizes.size22}
                  IconColorStart={BackgroundColors.gradientColorStart}
                  IconColorEnd={BackgroundColors.gradientColorEnd}
                />
              )}
            />

            <DrawerItem
              label={i18n.t('pages.wallet.title')}
              onPress={() => props.navigation.navigate('Wallet')}
              icon={() => (
                <WalletIcon
                  IconWidth={Sizes.size22}
                  IconHeight={Sizes.size22}
                  IconColorStart={BackgroundColors.gradientColorStart}
                  IconColorEnd={BackgroundColors.gradientColorEnd}
                />
              )}
            />

            <DrawerItem
              label={i18n.t('pages.data.title')}
              onPress={() => props.navigation.navigate('Data')}
              icon={() => (
                <DataIcon
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
              icon={() => (
                <SettingsIcon
                  IconWidth={Sizes.size22}
                  IconHeight={Sizes.size22}
                  IconColorStart={BackgroundColors.gradientColorStart}
                  IconColorEnd={BackgroundColors.gradientColorEnd}
                />
              )}
            />

            <DrawerItem
              label={i18n.t('pages.suggestions.title')}
              onPress={() => props.navigation.navigate('Suggestions')}
              icon={() => (
                <SuggestionsIcon
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
              icon={() => (
                <SecurityIcon
                  IconWidth={Sizes.size22}
                  IconHeight={Sizes.size22}
                  IconColorStart={BackgroundColors.gradientColorStart}
                  IconColorEnd={BackgroundColors.gradientColorEnd}
                />
              )}
            />

            <DrawerItem
              label={i18n.t('pages.rating.title')}
              onPress={() => props.navigation.navigate('Rating')}
              icon={() => (
                <RatingIcon
                  IconWidth={Sizes.size22}
                  IconHeight={Sizes.size22}
                  IconColorStart={BackgroundColors.gradientColorStart}
                  IconColorEnd={BackgroundColors.gradientColorEnd}
                />
              )}
            />
          </View>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerMenu;
