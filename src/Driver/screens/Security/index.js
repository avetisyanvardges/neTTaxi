import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {KetIcon} from '../../assets/Icons';
import {ScreenHeader} from '../../components/ScreenHeader';
import {styles} from './style';
import {BackgroundColors} from '../../../assets/RootStyle';
import {connect} from 'react-redux';
import {makeAction} from '../../../makeAction';
import i18n from '../../../assets/I18n';
class DriverSecurityScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation, buttonColor, theme} = this.props;
    const {container, text, ket, text2} = styles(theme);
    return (
      <View style={{flex: 1, backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR}}>
        <ScreenHeader
          title="driver.pages.security.title"
          leftIcon="back"
          leftIconPress={() => navigation.goBack()}
        />
        <View style={container}>
          <Text style={text}>
            {i18n.t('driver.pages.security.based_safety')}
          </Text>
        </View>
        <View style={ket}>
          <KetIcon
            IconWidth={15}
            IconHeight={15}
            IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
            IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
          />
          <Text style={text2}>{i18n.t('driver.pages.security.mask')}</Text>
        </View>
        <View style={ket}>
          <KetIcon
            IconWidth={15}
            IconHeight={15}
            IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
            IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
          />
          <Text style={text2}>
            {i18n.t('driver.pages.security.online_payments')}
          </Text>
        </View>
        <View style={ket}>
          <KetIcon
            IconWidth={15}
            IconHeight={15}
            IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
            IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
          />
          <Text style={text2}>{i18n.t('driver.pages.security.disinfect')}</Text>
        </View>
        <View style={ket}>
          <KetIcon
            IconWidth={15}
            IconHeight={15}
            IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
            IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
          />
          <Text style={text2}>
            {i18n.t('driver.pages.security.wash_hands')}
          </Text>
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
export default connect(mapStateToProps, {makeAction})(DriverSecurityScreen);
