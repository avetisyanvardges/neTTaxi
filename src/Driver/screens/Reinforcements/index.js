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
