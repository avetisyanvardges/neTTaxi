import React, {Component} from 'react';
import {View} from 'react-native';
import {BackgroundColors, Sizes} from '../../../assets/RootStyle';
import {ScreenHeader} from '../../components/ScreenHeader';
import {DrawerItem} from '@react-navigation/drawer';
import i18n from '../../../assets/I18n';
import {CashIcon, Non_CashIcon} from '../../assets/Icons';
import {styles} from './style';
import {connect} from 'react-redux';
import {makeAction} from '../../../makeAction';
class PaymentOptionScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation, theme, buttonColor} = this.props;
    const {container, text} = styles();
    return (
      <View style={{flex: 1, backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR}}>
        <ScreenHeader
          title="driver.pages.settings.payment.title"
          leftIcon="back"
          leftIconPress={() => navigation.goBack()}
        />
        <View
          style={{
            width: '95%',
            borderBottomWidth: Sizes.size1,
            borderBottomColor: theme?.PRIMARY_BORDER_COLOR,
            marginHorizontal: Sizes.size12,
            marginTop: Sizes.size15,
            marginBottom: Sizes.size10,
            flexDirection: 'row',
          }}>
          <DrawerItem
            label={i18n.t('driver.pages.settings.payment.cash')}
            onPress={() => console.log('Cash')}
            style={{width: 410, marginBottom: 5}}
            icon={() => (
              <CashIcon
                IconWidth={20}
                IconHeight={20}
                IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
              />
            )}
          />
        </View>
        <View
          style={{
            width: '95%',
            borderBottomWidth: Sizes.size1,
            borderBottomColor: theme?.PRIMARY_BORDER_COLOR,
            marginHorizontal: Sizes.size12,
            flexDirection: 'row',
          }}>
          <DrawerItem
            label={i18n.t('driver.pages.settings.payment.non_cash')}
            onPress={() => console.log('Non-cash')}
            style={{width: 410, marginBottom: 5}}
            icon={() => (
              <Non_CashIcon
                IconWidth={20}
                IconHeight={20}
                IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
              />
            )}
          />
        </View>
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
export default connect(mapStateToProps, {makeAction})(PaymentOptionScreen);
