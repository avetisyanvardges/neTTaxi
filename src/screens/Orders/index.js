import React, {Component} from 'react';
import {View, Text, Pressable} from 'react-native';
import {styles} from './style';
import {ScreenHeader} from '../../components/ScreenHeader';
// import {Picker} from '@react-native-picker/picker';
import {BackgroundColors, Sizes} from '../../assets/RootStyle';
import LinearGradient from 'react-native-linear-gradient';
import {deviceInfo} from '../../assets/DeviceInfo';
import i18n from 'i18next';
import {Location} from '../../assets/images/Icons';

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: '',
      passenger: 'Ուղևորներ',
    };
  }
  render() {
    const {navigation} = this.props;
    const {classes, passenger} = this.state;
    return (
      <View style={{flex: 1}}>
        <ScreenHeader
          title="orders.title"
          leftIcon="back"
          leftIconPress={() => navigation.goBack()}
        />
        <LinearGradient
          start={{x: 0, y: 0.5}}
          end={{x: 1.3, y: 0.5}}
          colors={[
            BackgroundColors.gradientColorStart,
            BackgroundColors.gradientColorEnd,
          ]}
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
              backgroundColor: '#F2F2F2',
              margin: Sizes.size2,
              borderRadius: Sizes.size8,
            }}>
            {/*<Picker*/}
            {/*  style={{*/}
            {/*    width: deviceInfo.deviceWidth - Sizes.size25,*/}
            {/*    paddingHorizontal: Sizes.size40,*/}
            {/*  }}*/}
            {/*  selectedValue={classes}*/}
            {/*  onValueChange={(itemValue, itemIndex) => {*/}
            {/*    this.setState({classes: itemValue});*/}
            {/*  }}>*/}
            {/*  <Picker.Item*/}
            {/*    label={i18n.t('pages.activations.econom')}*/}
            {/*    value="econom"*/}
            {/*  />*/}
            {/*  <Picker.Item*/}
            {/*    label={i18n.t('pages.activations.comfort')}*/}
            {/*    value="comfort"*/}
            {/*  />*/}
            {/*  <Picker.Item*/}
            {/*    label={i18n.t('pages.activations.comfortPlus')}*/}
            {/*    value="comfortPlus"*/}
            {/*  />*/}
            {/*  <Picker.Item*/}
            {/*    label={i18n.t('pages.activations.buissnes')}*/}
            {/*    value="buissnes"*/}
            {/*  />*/}
            {/*  <Picker.Item*/}
            {/*    label={i18n.t('pages.activations.miniven')}*/}
            {/*    value="miniven"*/}
            {/*  />*/}
            {/*</Picker>*/}
          </View>
        </LinearGradient>
        <LinearGradient
          start={{x: 0, y: 0.5}}
          end={{x: 1.3, y: 0.5}}
          colors={[
            BackgroundColors.gradientColorStart,
            BackgroundColors.gradientColorEnd,
          ]}
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
              backgroundColor: '#F2F2F2',
              margin: Sizes.size2,
              borderRadius: Sizes.size8,
            }}>
            <View style={{flex: 1, marginHorizontal: Sizes.size15}}>
              <Text style={{fontSize: Sizes.size20}}>Սկզբնակետ</Text>
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
                IconColorStart={BackgroundColors.gradientColorStart}
                IconColorEnd={BackgroundColors.gradientColorEnd}
              />
            </View>
          </Pressable>
        </LinearGradient>
        <LinearGradient
          start={{x: 0, y: 0.5}}
          end={{x: 1.3, y: 0.5}}
          colors={[
            BackgroundColors.gradientColorStart,
            BackgroundColors.gradientColorEnd,
          ]}
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
              backgroundColor: '#F2F2F2',
              margin: Sizes.size2,
              borderRadius: Sizes.size8,
            }}>
            <View style={{flex: 1, marginHorizontal: Sizes.size15}}>
              <Text style={{fontSize: Sizes.size20}}>Վերջնակետ</Text>
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
                IconColorStart={BackgroundColors.gradientColorStart}
                IconColorEnd={BackgroundColors.gradientColorEnd}
              />
            </View>
          </Pressable>
        </LinearGradient>
        <LinearGradient
          start={{x: 0, y: 0.5}}
          end={{x: 1.3, y: 0.5}}
          colors={[
            BackgroundColors.gradientColorStart,
            BackgroundColors.gradientColorEnd,
          ]}
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
              backgroundColor: '#F2F2F2',
              margin: Sizes.size2,
              borderRadius: Sizes.size8,
            }}>
            {/*<Picker*/}
            {/*  style={{*/}
            {/*    width: deviceInfo.deviceWidth - Sizes.size25,*/}
            {/*    paddingHorizontal: Sizes.size40,*/}
            {/*  }}*/}
            {/*  selectedValue={passenger}*/}
            {/*  onValueChange={(itemValue, itemIndex) => {*/}
            {/*    this.setState({passenger: itemValue});*/}
            {/*  }}>*/}
            {/*  <Picker.Item label="Ուղևորներ" value="#" />*/}
            {/*  <Picker.Item label="1" value="one" />*/}
            {/*  <Picker.Item label="2" value="two" />*/}
            {/*  <Picker.Item label="3" value="three" />*/}
            {/*</Picker>*/}
          </View>
        </LinearGradient>
      </View>
    );
  }
}

export default Order;
