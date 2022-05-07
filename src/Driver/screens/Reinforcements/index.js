import React, {Component} from 'react';
import {View} from 'react-native';
import {ScreenHeader} from '../../components/ScreenHeader';
import i18n from '../../../assets/I18n';
import {PointsIcon, RadiusIcon, TariffIcon} from '../../assets/Icons';
import {BackgroundColors, Colors, Sizes} from '../../../assets/RootStyle';
import {DrawerItem} from '@react-navigation/drawer';
import {connect} from 'react-redux';
import {makeAction} from '../../../makeAction';
class ReinforcementsScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation, theme, buttonColor} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR}}>
        <ScreenHeader
          title="driver.pages.reinforcements.title"
          leftIcon="back"
          leftIconPress={() => navigation.goBack()}
        />
        <DrawerItem
          label={i18n.t('driver.pages.reinforcements.tariff.title')}
          onPress={() => console.log('Tariff')}
          icon={() => (
            <TariffIcon
              IconWidth={Sizes.size26}
              IconHeight={Sizes.size26}
              IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
              IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
            />
          )}
        />
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
        <DrawerItem
          label={i18n.t('driver.pages.reinforcements.points')}
          onPress={() => console.log('Point')}
          icon={() => (
            <PointsIcon
              IconWidth={Sizes.size26}
              IconHeight={Sizes.size26}
              IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
              IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
            />
          )}
        />
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
        <DrawerItem
          label={i18n.t('driver.pages.reinforcements.radius')}
          onPress={() => console.log('Radius')}
          icon={() => (
            <RadiusIcon
              IconWidth={Sizes.size26}
              IconHeight={Sizes.size26}
              IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
              IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
            />
          )}
        />
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
export default connect(mapStateToProps, {makeAction})(ReinforcementsScreen);
