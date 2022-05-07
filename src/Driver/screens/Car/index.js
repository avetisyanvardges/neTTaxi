import React, {Component} from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import {ScreenHeader} from '../../components/ScreenHeader';
import {BackgroundColors, Colors, Sizes} from '../../../assets/RootStyle';
import {Plus, DoublePlus} from '../../assets/Icons';
import {styles} from './style';
import {connect} from 'react-redux';
import {makeAction} from '../../../makeAction';
import i18n from '../../../assets/I18n';

class CarScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation, theme, buttonColor} = this.props;
    const {container, container1, container2, text} = styles(theme);
    return (
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR,
          }}>
          <ScreenHeader
            title="driver.pages.data.car.title"
            leftIcon="back"
            leftIconPress={() => navigation.goBack()}
          />
          <View style={container}>
            <Text
              style={{
                fontFamily: 'BraindGyumri',
                fontSize: 20,
                marginBottom: 15,
                color: theme?.PRIMARY_TEXT_COLOR,
              }}>
              {i18n.t('driver.pages.data.car.brand')}
            </Text>
          </View>
          <View
            style={{
              width: '95%',
              marginHorizontal: Sizes.size12,
            }}>
            <Text
              style={{
                fontFamily: 'BraindGyumri',
                fontSize: 20,
                color: theme?.PRIMARY_TEXT_COLOR,
              }}>
              {i18n.t('driver.pages.data.car.model')}
            </Text>
          </View>
          <View style={container1}>
            <View
              style={{
                width: '100%',
                height: '50%',
                borderBottomWidth: Sizes.size1,
                borderBottomColor: theme?.PRIMARY_BORDER_COLOR,
                padding: 10,
              }}>
              <Text style={[text, {color: theme?.PRIMARY_TEXT_COLOR}]}>
                {i18n.t('driver.pages.data.car.license')}
              </Text>
            </View>
            <View style={{flexDirection: 'row', height: '50%'}}>
              <View
                style={{
                  width: '50%',
                  borderEndWidth: Sizes.size1,
                  borderEndColor: theme?.PRIMARY_BORDER_COLOR,
                  padding: 10,
                }}>
                <Text style={[text, {color: theme?.PRIMARY_TEXT_COLOR}]}>
                  {i18n.t('driver.pages.data.car.date')}
                </Text>
              </View>
              <View style={{width: '50%', padding: 10}}>
                <Text style={[text, {color: theme?.PRIMARY_TEXT_COLOR}]}>
                  {i18n.t('driver.pages.data.car.color')}
                </Text>
              </View>
            </View>
          </View>
          <View style={container2}>
            <View style={{marginBottom: 61.5}}>
              <Text
                style={{
                  fontFamily: 'BraindGyumri',
                  fontSize: 20,
                  marginBottom: 10,
                  color: theme?.PRIMARY_TEXT_COLOR,
                }}>
                {i18n.t('driver.pages.data.car.license_ph')}
              </Text>
              <Plus
                IconWidth={100}
                IconHeight={100}
                IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
              />
            </View>
            <View style={{marginBottom: 61.5}}>
              <Text
                style={{
                  fontFamily: 'BraindGyumri',
                  fontSize: 20,
                  marginBottom: 10,
                  color: theme?.PRIMARY_TEXT_COLOR,
                }}>
                {i18n.t('driver.pages.data.car.tech_pass_ph')}
              </Text>
              <Plus
                IconWidth={100}
                IconHeight={100}
                IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
              />
            </View>
            <View>
              <Text
                style={{
                  fontFamily: 'BraindGyumri',
                  fontSize: 20,
                  marginBottom: 12.5,
                  color: theme?.PRIMARY_TEXT_COLOR,
                }}>
                {i18n.t('driver.pages.data.car.car_ph')}
              </Text>
              <View
                style={{
                  marginTop: 12.5,
                  marginHorizontal: 14,
                  marginBottom: 61.5,
                }}>
                <DoublePlus
                  IconWidth={75}
                  IconHeight={75}
                  IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                  IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = store => {
  return {
    theme: store.themes.theme,
    buttonColor: store.themes.buttonColor,
  };
};
export default connect(mapStateToProps, {makeAction})(CarScreen);
