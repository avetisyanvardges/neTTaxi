import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {styles} from './style';
import {ScreenHeader} from '../../components/ScreenHeader';
import {BackgroundColors, Sizes} from '../../../assets/RootStyle';
import LinearGradient from 'react-native-linear-gradient';
import i18n from '../../../assets/I18n';
import {deviceInfo} from '../../../assets/DeviceInfo';
import {LinearBorder} from '../../components/LinearBorder';
import {LinearButton} from '../../components/LinearButton';
// import {Picker} from '@react-native-picker/picker';

class CarMagnetDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfCars: '',
      freeCars: '25',
      time: '0',
      magnets: '0',
    };
  }

  render() {
    const {route, navigation} = this.props;
    const {container, content} = styles();
    const {pageInfo} = route.params;
    const {numberOfCars, freeCars, time, magnets} = this.state;

    const calculatorForMagnets = number => {
      if (pageInfo === 'econom') {
        if (number === 'one') {
          this.setState({
            time: '24Ժ',
            magnets: '40 բալ',
          });
        } else if (number === 'two') {
          this.setState({
            time: '36Ժ',
            magnets: '80 բալ',
          });
        } else if (number === 'three') {
          this.setState({
            time: '48Ժ',
            magnets: '120 բալ',
          });
        }
      } else if (pageInfo === 'comfort') {
        if (number === 'one') {
          this.setState({
            time: '24Ժ',
            magnets: '50 բալ',
          });
        } else if (number === 'two') {
          this.setState({
            time: '36Ժ',
            magnets: '100 բալ',
          });
        } else if (number === 'three') {
          this.setState({
            time: '48Ժ',
            magnets: '120 բալ',
          });
        }
      } else if (pageInfo === 'comfortPlus') {
        if (number === 'one') {
          this.setState({
            time: '24Ժ',
            magnets: '60 բալ',
          });
        } else if (number === 'two') {
          this.setState({
            time: '36Ժ',
            magnets: '120 բալ',
          });
        } else if (number === 'three') {
          this.setState({
            time: '48Ժ',
            magnets: '150 բալ',
          });
        }
      } else if (pageInfo === 'buissnes') {
        if (number === 'one') {
          this.setState({
            time: '24Ժ',
            magnets: '100 բալ',
          });
        } else if (number === 'two') {
          this.setState({
            time: '36Ժ',
            magnets: '200 բալ',
          });
        } else if (number === 'three') {
          this.setState({
            time: '48Ժ',
            magnets: '250 բալ',
          });
        }
      } else if (pageInfo === 'miniven') {
        if (number === 'one') {
          this.setState({
            time: '24Ժ',
            magnets: '60 բալ',
          });
        } else if (number === 'two') {
          this.setState({
            time: '36Ժ',
            magnets: '120 բալ',
          });
        } else if (number === 'three') {
          this.setState({
            time: '48Ժ',
            magnets: '180 բալ',
          });
        }
      }
    };

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={container}>
          <ScreenHeader
            title={`activations.${pageInfo}`}
            leftIcon="back"
            leftIconPress={() => navigation.goBack()}
          />
          <View
            style={{marginHorizontal: Sizes.size15, marginTop: Sizes.size50}}>
            <Text style={{fontSize: Sizes.size18}}>
              {i18n.t('pages.activations.number_of_cars')}
            </Text>
            <LinearGradient
              start={{x: 0, y: 0.5}}
              end={{x: 1.3, y: 0.5}}
              colors={[
                BackgroundColors.gradientColorStart,
                BackgroundColors.gradientColorEnd,
              ]}
              style={{
                width: Sizes.size90,
                height: Sizes.size45,
                borderRadius: Sizes.size10,
                marginTop: Sizes.size10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: Sizes.size86,
                  height: Sizes.size41,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#F2F2F2',
                  margin: Sizes.size2,
                  borderRadius: Sizes.size8,
                }}>
                {/*<Picker*/}
                {/*  style={{*/}
                {/*    width: Sizes.size105,*/}
                {/*    paddingHorizontal: Sizes.size40,*/}
                {/*  }}*/}
                {/*  selectedValue={numberOfCars}*/}
                {/*  onValueChange={(itemValue, itemIndex) => {*/}
                {/*    this.setState({numberOfCars: itemValue});*/}
                {/*    calculatorForMagnets(itemValue);*/}
                {/*  }}>*/}
                {/*  <Picker.Item label="1" value="one" />*/}
                {/*  <Picker.Item label="2" value="two" />*/}
                {/*  <Picker.Item label="3" value="three" />*/}
                {/*</Picker>*/}
              </View>
            </LinearGradient>
          </View>
          <View>
            <LinearBorder
              style={{
                width: deviceInfo.deviceWidth - Sizes.size30,
                height: Sizes.size50,
                marginTop: Sizes.size50,
                marginHorizontal: Sizes.size15,
                borderRadius: Sizes.size10,
              }}
              props={
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#F2F2F2',
                    margin: Sizes.size2,
                    borderRadius: Sizes.size8,
                  }}>
                  <View style={{flex: 1, marginHorizontal: Sizes.size10}}>
                    <Text>{i18n.t('pages.activations.vacantCars')}</Text>
                  </View>
                  <View style={{width: Sizes.size45, height: Sizes.size46}}>
                    <TextInput
                      value={freeCars}
                      onChangeText={number =>
                        this.setState({numberOfCars: number})
                      }
                      keyboardType={'numeric'}
                      style={{
                        flex: 1,
                        fontSize: Sizes.size20,
                        textAlign: 'center',
                      }}
                    />
                  </View>
                </View>
              }
            />
            <LinearBorder
              style={{
                width: deviceInfo.deviceWidth - Sizes.size30,
                height: Sizes.size50,
                marginTop: Sizes.size20,
                marginHorizontal: Sizes.size15,
                borderRadius: Sizes.size10,
              }}
              props={
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#F2F2F2',
                    margin: Sizes.size2,
                    borderRadius: Sizes.size8,
                  }}>
                  <View style={{flex: 1, marginHorizontal: Sizes.size10}}>
                    <Text>{i18n.t('pages.activations.time')}</Text>
                  </View>
                  <View style={{width: Sizes.size45, height: Sizes.size46}}>
                    <TextInput
                      value={time}
                      onChangeText={number =>
                        this.setState({numberOfCars: number})
                      }
                      keyboardType={'numeric'}
                      style={{
                        flex: 1,
                        fontSize: Sizes.size20,
                        textAlign: 'center',
                      }}
                    />
                  </View>
                </View>
              }
            />

            <LinearBorder
              style={{
                width: deviceInfo.deviceWidth - Sizes.size30,
                height: Sizes.size50,
                marginTop: Sizes.size20,
                marginHorizontal: Sizes.size15,
                borderRadius: Sizes.size10,
              }}
              props={
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#F2F2F2',
                    margin: Sizes.size2,
                    borderRadius: Sizes.size8,
                  }}>
                  <View style={{flex: 1, marginHorizontal: Sizes.size10}}>
                    <Text>{i18n.t('pages.activations.magnet')}</Text>
                  </View>
                  <View style={{width: Sizes.size60, height: Sizes.size46}}>
                    <TextInput
                      value={magnets}
                      onChangeText={number =>
                        this.setState({numberOfCars: number})
                      }
                      keyboardType={'numeric'}
                      style={{
                        flex: 1,
                        fontSize: Sizes.size20,
                        textAlign: 'center',
                      }}
                    />
                  </View>
                </View>
              }
            />
          </View>
          <View
            style={{marginTop: Sizes.size80, marginHorizontal: Sizes.size15}}>
            <LinearButton
              startColor={BackgroundColors.gradientColorStart}
              endColor={BackgroundColors.gradientColorEnd}
              title={i18n.t('texts.activate')}
              size={'big'}
              disabled={numberOfCars === '0'}
              onPress={() => {}}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default CarMagnetDetail;
