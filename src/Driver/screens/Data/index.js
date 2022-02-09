import React, {Component} from 'react';
import {View} from 'react-native';
import {ScreenHeader} from '../../../Client/components/ScreenHeader';
import {DrawerItem} from '@react-navigation/drawer';
import i18n from '../../../assets/I18n';
import {
  CarIcon,
  DriverIcon,
  PointsIcon,
  RadiusIcon,
  StatisticsIcon,
} from '../../../Client/assets/Icons';
import {BackgroundColors, Colors, Sizes} from '../../../assets/RootStyle';
class DataScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1}}>
        <ScreenHeader
          title="pages.data.title"
          leftIcon="back"
          leftIconPress={() => navigation.goBack()}
        />
        <DrawerItem
          label={i18n.t('pages.car.title')}
          onPress={() => console.log('Car')}
          icon={() => (
            <CarIcon
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
          label={i18n.t('pages.driver.title')}
          onPress={() => console.log('Driver')}
          icon={() => (
            <DriverIcon
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
          label={i18n.t('pages.statistics.title')}
          onPress={() => console.log('Statistics')}
          icon={() => (
            <StatisticsIcon
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

export default DataScreen;
