import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {ScreenHeader} from '../../components/ScreenHeader';
import {DrawerItem} from '@react-navigation/drawer';
import i18n from '../../../assets/I18n';
import {HelpIcon, LanguageIcon, PaymentIcon, Pointer} from '../../assets/Icons';
import {BackgroundColors, Colors, Sizes} from '../../../assets/RootStyle';
import {connect} from 'react-redux';
import {makeAction} from '../../../makeAction';

class DriverSettingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation, theme, buttonColor} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR}}>
        <ScreenHeader
          title="driver.pages.settings.title"
          leftIcon="back"
          leftIconPress={() => navigation.goBack()}
        />
        <View style={{flexDirection: 'row'}}>
          <DrawerItem
            label={i18n.t('driver.pages.settings.language')}
            onPress={() => navigation.navigate('Language')}
            style={{width: Sizes.size320, marginBottom: 5}}
            icon={() => (
              <LanguageIcon
                IconWidth={Sizes.size26}
                IconHeight={Sizes.size26}
                IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
              />
            )}
          />
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              marginRight: Sizes.size10,
              marginBottom: Sizes.size12,
              maxWidth: 15,
            }}>
            <Pointer
              IconWidth={13}
              IconHeight={21}
              IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
              IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
            />
          </View>
        </View>

        <View
          style={{
            width: '95%',
            borderBottomWidth: Sizes.size1,
            borderBottomColor: theme?.PRIMARY_BORDER_COLOR,
            marginHorizontal: Sizes.size12,
            marginTop: Sizes.size15,
            marginBottom: Sizes.size10,
          }}
        />
        <View style={{flexDirection: 'row'}}>
          <DrawerItem
            label={i18n.t('driver.pages.settings.help.title')}
            onPress={() => navigation.navigate('Help')}
            style={{width: Sizes.size320, marginBottom: 5}}
            icon={() => (
              <HelpIcon
                IconWidth={Sizes.size26}
                IconHeight={Sizes.size26}
                IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
              />
            )}
          />
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              marginRight: Sizes.size10,
              marginBottom: Sizes.size12,
              maxWidth: 15,
            }}>
            <Pointer
              IconWidth={13}
              IconHeight={21}
              IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
              IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
            />
          </View>
        </View>

        <View
          style={{
            width: '95%',
            borderBottomWidth: Sizes.size1,
            borderBottomColor: theme?.PRIMARY_BORDER_COLOR,
            marginHorizontal: Sizes.size12,
            marginTop: Sizes.size15,
            marginBottom: Sizes.size10,
          }}
        />
        <View style={{flexDirection: 'row'}}>
          <DrawerItem
            label={i18n.t('driver.pages.settings.payment.title')}
            onPress={() => navigation.navigate('Payment Option')}
            style={{width: Sizes.size320, marginBottom: 5}}
            icon={() => (
              <PaymentIcon
                IconWidth={Sizes.size26}
                IconHeight={Sizes.size26}
                IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
              />
            )}
          />
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              marginRight: Sizes.size10,
              marginBottom: Sizes.size12,
              maxWidth: 15,
            }}>
            <Pointer
              IconWidth={13}
              IconHeight={21}
              IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
              IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
            />
          </View>
        </View>

        <View
          style={{
            width: '95%',
            borderBottomWidth: Sizes.size1,
            borderBottomColor: theme?.PRIMARY_BORDER_COLOR,
            marginHorizontal: Sizes.size12,
            marginTop: Sizes.size15,
            marginBottom: Sizes.size10,
          }}
        />
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
export default connect(mapStateToProps, {makeAction})(DriverSettingScreen);
