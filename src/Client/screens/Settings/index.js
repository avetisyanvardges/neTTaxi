import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {ScreenHeader} from '../../components/ScreenHeader';
import {BackgroundColors, Colors, Sizes} from '../../../assets/RootStyle';
import {
  Address,
  BigBen,
  Language,
  Matryoshka,
  Payment,
  Pomegranate,
  Registration,
} from '../../assets/Icons';
import i18n from '../../../assets/I18n';
import Modal from 'react-native-modal';
import {deviceInfo} from '../../../assets/DeviceInfo';
import {RadioItem} from '../../components/RadioItem';
import AsyncStorage from '@react-native-community/async-storage';
import {setCustomText, setCustomTextInput} from 'react-native-global-props';
class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVizible: false,
      isPaymentModalVizible: false,
    };
  }
  render() {
    const {navigation} = this.props;
    const {isModalVizible, isPaymentModalVizible} = this.state;
    const {content} = styles();
    const toggleModal = () => {
      this.setState({isModalVizible: !isModalVizible});
    };

    const paymentToggleModal = () => {
      this.setState({isPaymentModalVizible: !isPaymentModalVizible});
    };

    const changeLanguage = value => {
      i18n.changeLanguage(value);
      AsyncStorage.setItem('@lang', JSON.stringify(value));
      this.setState({isModalVizible: !isModalVizible});
      if (value === 'ru') {
        const customTextInputProps = {
          style: {
            fontFamily: 'OswaldLight',
            fontSize: Sizes.size17,
          },
        };
        const customTextProps = {
          style: {
            fontFamily: 'OswaldLight',
            fontSize: Sizes.size17,
          },
        };

        setCustomText(customTextProps);
        setCustomTextInput(customTextInputProps);
      } else {
        const customTextInputProps = {
          style: {
            fontFamily: 'BraindGyumri',
            fontSize: Sizes.size17,
          },
        };
        const customTextProps = {
          style: {
            fontFamily: 'BraindGyumri',
            fontSize: Sizes.size17,
          },
        };
        setCustomText(customTextProps);
        setCustomTextInput(customTextInputProps);
      }
    };

    return (
      <View style={{flex: 1}}>
        <ScreenHeader
          title="settings.title"
          leftIcon="back"
          leftIconPress={() => navigation.goBack()}
        />
        <View style={content}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Registration')}
            style={{
              paddingHorizontal: Sizes.size10,
              paddingVertical: Sizes.size27,
              marginHorizontal: Sizes.size29,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomColor: Colors.borderDefColor,
              borderBottomWidth: 1,
            }}>
            <Registration
              IconWidth={Sizes.size22}
              IconHeight={Sizes.size22}
              IconColorStart={BackgroundColors.gradientColorStart}
              IconColorEnd={BackgroundColors.gradientColorEnd}
            />
            <View style={{marginHorizontal: Sizes.size12}}>
              <Text>{i18n.t('pages.registration.title')}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingHorizontal: Sizes.size10,
              paddingVertical: Sizes.size27,
              marginHorizontal: Sizes.size29,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomColor: Colors.borderDefColor,
              borderBottomWidth: 1,
            }}
            onPress={toggleModal}>
            <Language
              IconWidth={Sizes.size22}
              IconHeight={Sizes.size22}
              IconColorStart={BackgroundColors.gradientColorStart}
              IconColorEnd={BackgroundColors.gradientColorEnd}
            />
            <View style={{marginHorizontal: Sizes.size12}}>
              <Text>{i18n.t('pages.settings.language')}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingHorizontal: Sizes.size10,
              paddingVertical: Sizes.size27,
              marginHorizontal: Sizes.size29,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomColor: Colors.borderDefColor,
              borderBottomWidth: 1,
            }}
            onPress={() => {}}>
            <Address
              IconWidth={Sizes.size22}
              IconHeight={Sizes.size22}
              IconColorStart={BackgroundColors.gradientColorStart}
              IconColorEnd={BackgroundColors.gradientColorEnd}
            />
            <View style={{marginHorizontal: Sizes.size12}}>
              <Text>{i18n.t('pages.settings.usedAddresses')}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={paymentToggleModal}
            style={{
              paddingHorizontal: Sizes.size10,
              paddingVertical: Sizes.size27,
              marginHorizontal: Sizes.size29,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomColor: Colors.borderDefColor,
              borderBottomWidth: 1,
            }}>
            <Payment
              IconWidth={Sizes.size22}
              IconHeight={Sizes.size22}
              IconColorStart={BackgroundColors.gradientColorStart}
              IconColorEnd={BackgroundColors.gradientColorEnd}
            />
            <View style={{marginHorizontal: Sizes.size12}}>
              <Text>{i18n.t('pages.settings.payment')}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Modal
          isVisible={isModalVizible}
          onBackdropPress={toggleModal}
          deviceWidth={deviceInfo.deviceWidth}
          deviceHeight={deviceInfo.deviceHeight + Sizes.size20}
          style={{
            alignItems: 'center',
          }}>
          <View
            style={{
              width: Sizes.size230,
              height: Sizes.size220,
              borderRadius: Sizes.size20,
              backgroundColor: BackgroundColors.white,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: Sizes.size150,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Pomegranate IconWidth={Sizes.size30} IconHeight={Sizes.size30} />
              <RadioItem
                title={'Հայերեն'}
                width={Sizes.size200}
                height={Sizes.size50}
                showCircle={false}
                onPress={() => changeLanguage('am')}
              />
            </View>
            <View
              style={{
                width: Sizes.size150,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Matryoshka IconWidth={Sizes.size30} IconHeight={Sizes.size30} />
              <RadioItem
                title={'Русский'}
                fontFamily={'OswaldLight'}
                width={Sizes.size200}
                height={Sizes.size50}
                showCircle={false}
                onPress={() => changeLanguage('ru')}
              />
            </View>
            <View
              style={{
                width: Sizes.size150,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <BigBen IconWidth={Sizes.size30} IconHeight={Sizes.size30} />
              <RadioItem
                title={'English'}
                width={Sizes.size200}
                height={Sizes.size50}
                showCircle={false}
                onPress={() => changeLanguage('en')}
              />
            </View>
          </View>
        </Modal>
        <Modal
          isVisible={isPaymentModalVizible}
          onBackdropPress={paymentToggleModal}
          deviceWidth={deviceInfo.deviceWidth}
          deviceHeight={deviceInfo.deviceHeight + Sizes.size20}
          style={{
            alignItems: 'center',
          }}>
          <View
            style={{
              width: Sizes.size230,
              height: Sizes.size220,
              borderRadius: Sizes.size20,
              backgroundColor: BackgroundColors.white,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <RadioItem
              title={'Կանխիկ'}
              width={Sizes.size150}
              height={Sizes.size50}
            />
            <RadioItem
              title={'Անկանխիկ'}
              width={Sizes.size150}
              height={Sizes.size50}
            />
          </View>
        </Modal>
      </View>
    );
  }
}

export default Settings;
