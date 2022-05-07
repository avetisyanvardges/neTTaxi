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
import {connect} from 'react-redux';
import {makeAction} from '../../../makeAction';
import {Picker} from '@react-native-picker/picker';

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
    const {route, navigation, buttonColor, theme} = this.props;
    const {
      container,
      carCount,
      carCountText,
      carCountLinear,
      carCountBody,
      carCountPicker,
      linearBorderStyle,
      linearBody,
      linearBodyText,
      linearBodyInputContainer,
      linearBodyInput,
      content,
    } = styles(theme);
    const {pageInfo} = route.params;
    const {numberOfCars, freeCars, time, magnets} = this.state;

    const calculatorForMagnets = number => {
      if (pageInfo === 'economy') {
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
      } else if (pageInfo === 'business') {
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
      } else if (pageInfo === 'minivan') {
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
          <View style={carCount}>
            <Text style={carCountText}>
              {i18n.t('client.pages.activations.number_of_cars')}
            </Text>
            <LinearGradient
              start={{x: 0, y: 0.5}}
              end={{x: 1.3, y: 0.5}}
              colors={buttonColor?.PRIMARY_BUTTON_COLOR}
              style={carCountLinear}>
              <View style={carCountBody}>
                <Picker
                  style={carCountPicker}
                  selectedValue={numberOfCars}
                  onValueChange={(itemValue, itemIndex) => {
                    this.setState({numberOfCars: itemValue});
                    calculatorForMagnets(itemValue);
                  }}>
                  <Picker.Item label="1" value="one" />
                  <Picker.Item label="2" value="two" />
                  <Picker.Item label="3" value="three" />
                </Picker>
              </View>
            </LinearGradient>
          </View>
          <View>
            <LinearBorder
              style={[linearBorderStyle, {marginTop: Sizes.size50}]}
              props={
                <View style={linearBody}>
                  <View style={linearBodyText}>
                    <Text
                      style={{
                        color: theme?.PRIMARY_TEXT_COLOR,
                        fontSize: Sizes.size17,
                        fontFamily: 'BraindGyumri',
                      }}>
                      {i18n.t('client.pages.activations.vacantCars')}
                    </Text>
                  </View>
                  <View style={linearBodyInputContainer}>
                    <TextInput
                      value={freeCars}
                      onChangeText={number =>
                        this.setState({numberOfCars: number})
                      }
                      keyboardType={'numeric'}
                      style={linearBodyInput}
                    />
                  </View>
                </View>
              }
            />
            <LinearBorder
              style={linearBorderStyle}
              props={
                <View style={linearBody}>
                  <View style={linearBodyText}>
                    <Text
                      style={{
                        color: theme?.PRIMARY_TEXT_COLOR,
                        fontSize: Sizes.size17,
                        fontFamily: 'BraindGyumri',
                      }}>
                      {i18n.t('client.pages.activations.time')}
                    </Text>
                  </View>
                  <View style={linearBodyInputContainer}>
                    <TextInput
                      value={time}
                      onChangeText={number =>
                        this.setState({numberOfCars: number})
                      }
                      keyboardType={'numeric'}
                      style={linearBodyInput}
                    />
                  </View>
                </View>
              }
            />

            <LinearBorder
              style={linearBorderStyle}
              props={
                <View style={linearBody}>
                  <View style={linearBodyText}>
                    <Text
                      style={{
                        color: theme?.PRIMARY_TEXT_COLOR,
                        fontSize: Sizes.size17,
                        fontFamily: 'BraindGyumri',
                      }}>
                      {i18n.t('client.pages.activations.magnet')}
                    </Text>
                  </View>
                  <View style={linearBodyInputContainer}>
                    <TextInput
                      value={magnets}
                      onChangeText={number =>
                        this.setState({numberOfCars: number})
                      }
                      keyboardType={'numeric'}
                      style={linearBodyInput}
                    />
                  </View>
                </View>
              }
            />
          </View>
          <View
            style={{
              marginTop: Sizes.size80,
              marginHorizontal: Sizes.size15,
            }}>
            <LinearButton
              startColor={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
              endColor={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
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

const mapStateToProps = store => {
  return {
    theme: store.themes.theme,
    buttonColor: store.themes.buttonColor,
  };
};

export default connect(mapStateToProps, {makeAction})(CarMagnetDetail);
