import React, {Component} from 'react';
import {View, Text, Pressable} from 'react-native';
import {ScreenHeader} from '../../components/ScreenHeader';
import {Sizes} from '../../../assets/RootStyle';
import LinearGradient from 'react-native-linear-gradient';
import {deviceInfo} from '../../../assets/DeviceInfo';
import i18n from 'i18next';
import {Location} from '../../assets/Icons';
import {connect} from 'react-redux';
import {makeAction} from '../../../makeAction';
import {Picker} from '@react-native-picker/picker';

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: '',
      passenger: 'Ուղևորներ',
    };
  }
  render() {
    const {navigation, buttonColor, theme} = this.props;
    const {classes, passenger} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR}}>
        <ScreenHeader
          title="orders.title"
          leftIcon="back"
          leftIconPress={() => navigation.goBack()}
        />
        <LinearGradient
          start={{x: 0, y: 0.5}}
          end={{x: 1.3, y: 0.5}}
          colors={buttonColor?.PRIMARY_BUTTON_COLOR}
          style={{
            width: deviceInfo.deviceWidth - Sizes.size20,
            marginHorizontal: Sizes.size10,
            borderRadius: Sizes.size10,
            marginTop: Sizes.size52,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR,
              margin: Sizes.size2,
              borderRadius: Sizes.size8,
            }}>
            <Picker
              style={{
                width: deviceInfo.deviceWidth - Sizes.size25,
                paddingHorizontal: Sizes.size40,
                color: theme?.PRIMARY_TEXT_COLOR,
              }}
              selectedValue={classes}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({classes: itemValue});
              }}>
              <Picker.Item
                label={i18n.t('client.pages.activations.economy')}
                value="economy"
              />
              {/* eslint-disable-next-line react/jsx-no-undef */}
              <Picker.Item
                label={i18n.t('client.pages.activations.comfort')}
                value="comfort"
              />
              <Picker.Item
                label={i18n.t('client.pages.activations.comfortPlus')}
                value="comfortPlus"
              />
              <Picker.Item
                label={i18n.t('client.pages.activations.business')}
                value="business"
              />
              <Picker.Item
                label={i18n.t('client.pages.activations.minivan')}
                value="minivan"
              />
            </Picker>
          </View>
        </LinearGradient>
        <LinearGradient
          start={{x: 0, y: 0.5}}
          end={{x: 1.3, y: 0.5}}
          colors={buttonColor?.PRIMARY_BUTTON_COLOR}
          style={{
            width: deviceInfo.deviceWidth - Sizes.size20,
            marginHorizontal: Sizes.size10,
            borderRadius: Sizes.size10,
            marginTop: Sizes.size20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Pressable
            style={{
              width: deviceInfo.deviceWidth - Sizes.size24,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR,
              margin: Sizes.size2,
              borderRadius: Sizes.size8,
            }}>
            <View style={{flex: 1, marginHorizontal: Sizes.size15}}>
              <Text
                style={{
                  fontSize: Sizes.size20,
                  color: theme?.PRIMARY_TEXT_COLOR,
                }}>
                Սկզբնակետ
              </Text>
            </View>
            <View
              style={{
                width: Sizes.size45,
                height: Sizes.size45,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Location
                IconWidth={Sizes.size35}
                IconHeight={Sizes.size35}
                IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
              />
            </View>
          </Pressable>
        </LinearGradient>
        <LinearGradient
          start={{x: 0, y: 0.5}}
          end={{x: 1.3, y: 0.5}}
          colors={buttonColor?.PRIMARY_BUTTON_COLOR}
          style={{
            width: deviceInfo.deviceWidth - Sizes.size20,
            marginHorizontal: Sizes.size10,
            borderRadius: Sizes.size10,
            marginTop: Sizes.size20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Pressable
            style={{
              width: deviceInfo.deviceWidth - Sizes.size24,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR,
              margin: Sizes.size2,
              borderRadius: Sizes.size8,
            }}>
            <View style={{flex: 1, marginHorizontal: Sizes.size15}}>
              <Text
                style={{
                  fontSize: Sizes.size20,
                  color: theme?.PRIMARY_TEXT_COLOR,
                }}>
                Վերջնակետ
              </Text>
            </View>
            <View
              style={{
                width: Sizes.size45,
                height: Sizes.size45,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Location
                IconWidth={Sizes.size35}
                IconHeight={Sizes.size35}
                IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
              />
            </View>
          </Pressable>
        </LinearGradient>
        <LinearGradient
          start={{x: 0, y: 0.5}}
          end={{x: 1.3, y: 0.5}}
          colors={buttonColor?.PRIMARY_BUTTON_COLOR}
          style={{
            width: deviceInfo.deviceWidth - Sizes.size20,
            marginHorizontal: Sizes.size10,
            borderRadius: Sizes.size10,
            marginTop: Sizes.size20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR,
              margin: Sizes.size2,
              borderRadius: Sizes.size8,
            }}>
            <Picker
              style={{
                width: deviceInfo.deviceWidth - Sizes.size25,
                paddingHorizontal: Sizes.size40,
                color: theme?.PRIMARY_TEXT_COLOR,
              }}
              selectedValue={passenger}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({passenger: itemValue});
              }}>
              <Picker.Item label="Ուղևորներ" value="#" />
              <Picker.Item label="1" value="one" />
              <Picker.Item label="2" value="two" />
              <Picker.Item label="3" value="three" />
            </Picker>
          </View>
        </LinearGradient>
      </View>
    );
  }
}
const mapStateToProps = store => {
  return {
    theme: store.themes.theme,
    buttonColor: store.themes.buttonColor,
  };
};

export default connect(mapStateToProps, {makeAction})(Order);
