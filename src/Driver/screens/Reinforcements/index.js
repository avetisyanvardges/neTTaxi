import React, {Component} from 'react';
import {View} from 'react-native';
import {ScreenHeader} from '../../components/ScreenHeader';
import i18n from '../../../assets/I18n';
import {PointsIcon, RadiusIcon, TariffIcon} from '../../assets/Icons';
import {BackgroundColors, Sizes} from '../../../assets/RootStyle';
import {DrawerItem} from '@react-navigation/drawer';
class ReinforcementsScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1}}>
        <ScreenHeader
          title="pages.reinforcements.title"
          leftIcon="back"
          leftIconPress={() => navigation.goBack()}
        />
        <DrawerItem
          label={i18n.t('pages.tariff.title')}
          onPress={() => console.log('Tariff')}
          icon={() => (
            <TariffIcon
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
          label={i18n.t('pages.points.title')}
          onPress={() => console.log('Point')}
          icon={() => (
            <PointsIcon
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
          label={i18n.t('pages.radius.title')}
          onPress={() => console.log('Radius')}
          icon={() => (
            <RadiusIcon
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

export default ReinforcementsScreen;
