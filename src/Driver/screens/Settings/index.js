import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {ScreenHeader} from '../../../Client/components/ScreenHeader';
import {DrawerItem} from '@react-navigation/drawer';
import i18n from '../../../assets/I18n';
import { HelpIcon, LanguageIcon, PaymentIcon, PointsIcon, RadiusIcon, TariffIcon } from "../../../Client/assets/Icons";
import { BackgroundColors, Colors, Sizes } from "../../../assets/RootStyle";

class SettingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1}}>
        <ScreenHeader
          title="pages.settings.title"
          leftIcon="back"
          leftIconPress={() => navigation.goBack()}
        />
        <DrawerItem
          label={i18n.t('pages.language.title')}
          onPress={() => console.log('Language')}
          icon={() => (
            <LanguageIcon
              IconWidth={Sizes.size26}
              IconHeight={Sizes.size26}
              IconColorStart={BackgroundColors.gradientColorStart}
              IconColorEnd={BackgroundColors.gradientColorEnd}
            />
          )}
        />
        <View
          style={{
            width: '95%',
            borderBottomWidth: Sizes.size1,
            borderBottomColor: '#C0ACE1',
            marginHorizontal: Sizes.size12,
            marginTop: Sizes.size15,
            marginBottom: Sizes.size10,
          }}
        />
        <DrawerItem
          label={i18n.t('pages.help.title')}
          onPress={() => console.log('Help')}
          icon={() => (
            <HelpIcon
              IconWidth={Sizes.size26}
              IconHeight={Sizes.size26}
              IconColorStart={BackgroundColors.gradientColorStart}
              IconColorEnd={BackgroundColors.gradientColorEnd}
            />
          )}
        />
        <View
          style={{
            width: '95%',
            borderBottomWidth: Sizes.size1,
            borderBottomColor: '#C0ACE1',
            marginHorizontal: Sizes.size12,
            marginTop: Sizes.size15,
            marginBottom: Sizes.size10,
          }}
        />
        <DrawerItem
          label={i18n.t('pages.paymentOption.title')}
          onPress={() => console.log('Payment Option')}
          icon={() => (
            <PaymentIcon
              IconWidth={Sizes.size26}
              IconHeight={Sizes.size26}
              IconColorStart={BackgroundColors.gradientColorStart}
              IconColorEnd={BackgroundColors.gradientColorEnd}
            />
          )}
        />
        <View
          style={{
            width: '95%',
            borderBottomWidth: Sizes.size1,
            borderBottomColor: '#C0ACE1',
            marginHorizontal: Sizes.size12,
            marginTop: Sizes.size15,
            marginBottom: Sizes.size10,
          }}
        />
      </View>
    );
  }
}

export default SettingScreen;
