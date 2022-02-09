import React, {Component} from 'react';
import {View, Text, Image, Pressable, TextInput} from 'react-native';
import {styles} from './style';
import {ScreenHeader} from '../../components/ScreenHeader';
import {BackgroundColors, Colors, Shadow, Sizes} from '../../../assets/RootStyle';
import LinearGradient from 'react-native-linear-gradient';
import {
  Camera,
  DefaultUser,
  Email,
  Registration,
  Telephone,
} from '../../assets/Icons';
import UserImag from '../../assets/images/man.png';
import i18n from 'i18next';
import {deviceInfo} from '../../../assets/DeviceInfo';
import {RegInput} from '../../components/RegistrationInput';
class RegistrationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserImage: false,
    };
  }
  render() {
    const {navigation} = this.props;
    const {UserImage} = this.state;
    return (
      <View style={{flex: 1}}>
        <ScreenHeader
          title="registration.title"
          leftIcon="back"
          leftIconPress={() => navigation.goBack()}
        />
        <View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: Sizes.size130,
            }}>
            <View
              style={{
                width: Sizes.size100,
                height: Sizes.size100,
                marginRight: Sizes.size40,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <LinearGradient
                start={{x: 0, y: 0.5}}
                end={{x: 1.3, y: 0.5}}
                colors={[
                  BackgroundColors.gradientColorStart,
                  BackgroundColors.gradientColorEnd,
                ]}
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
                      backgroundColor: '#F3F3F3',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <DefaultUser
                      IconWidth={Sizes.size28}
                      IconHeight={Sizes.size28}
                      IconColor={'#1c3746'}
                    />
                  </View>
                )}
              </LinearGradient>
              <View
                style={{
                  position: 'absolute',
                  left: Sizes.size60,
                  top: Sizes.size65,
                  ...Shadow,
                }}>
                <Pressable
                  style={{
                    width: Sizes.size20,
                    height: Sizes.size20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: BackgroundColors.gray,
                    borderRadius: Sizes.size5,
                  }}>
                  <Camera
                    IconWidth={Sizes.size18}
                    IconHeight={Sizes.size18}
                    IconColor={Colors.white}
                  />
                </Pressable>
              </View>
            </View>
            <View
              style={{
                width: Sizes.size80,
                height: Sizes.size35,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>{i18n.t('texts.save')}</Text>
            </View>
          </View>
        </View>
        <View>
          <RegInput
            placeholder={i18n.t('pages.registration.name')}
            props={
              <Registration
                IconWidth={Sizes.size22}
                IconHeight={Sizes.size22}
                IconColorStart={BackgroundColors.gradientColorStart}
                IconColorEnd={BackgroundColors.gradientColorEnd}
              />
            }
          />
          <RegInput
            placeholder={i18n.t('pages.registration.last_name')}
            props={
              <Registration
                IconWidth={Sizes.size22}
                IconHeight={Sizes.size22}
                IconColorStart={BackgroundColors.gradientColorStart}
                IconColorEnd={BackgroundColors.gradientColorEnd}
              />
            }
          />
          <RegInput
            placeholder={i18n.t('pages.registration.phone_number')}
            props={
              <Telephone
                IconWidth={Sizes.size22}
                IconHeight={Sizes.size22}
                IconColorStart={BackgroundColors.gradientColorStart}
                IconColorEnd={BackgroundColors.gradientColorEnd}
              />
            }
          />
          <RegInput
            placeholder={i18n.t('pages.registration.birth')}
            props={
              <Registration
                IconWidth={Sizes.size22}
                IconHeight={Sizes.size22}
                IconColorStart={BackgroundColors.gradientColorStart}
                IconColorEnd={BackgroundColors.gradientColorEnd}
              />
            }
          />
          <RegInput
            placeholder={i18n.t('pages.registration.email')}
            props={
              <Email
                IconWidth={Sizes.size22}
                IconHeight={Sizes.size22}
                IconColorStart={BackgroundColors.gradientColorStart}
                IconColorEnd={BackgroundColors.gradientColorEnd}
              />
            }
          />
        </View>
      </View>
    );
  }
}

export default RegistrationScreen;
