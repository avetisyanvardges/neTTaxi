import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {ScreenHeader} from '../../components/ScreenHeader';
import {BackgroundColors, Colors, Sizes} from '../../assets/RootStyle';
import {
  About,
  Address,
  Language,
  Payment,
  Question,
} from '../../assets/images/Icons';
import i18n from '../../assets/I18n';
import TaxiPrice from '../../assets/images/Icons/TaxiPrice';
class Info extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1}}>
        <ScreenHeader
          title="info.title"
          leftIcon="back"
          leftIconPress={() => navigation.goBack()}
        />
        <View style={{height: 300, marginVertical: Sizes.size25}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Tariffs')}
            style={{
              paddingHorizontal: Sizes.size10,
              paddingVertical: Sizes.size27,
              marginHorizontal: Sizes.size29,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomColor: Colors.borderDefColor,
              borderBottomWidth: 1,
            }}>
            <TaxiPrice
              IconWidth={Sizes.size22}
              IconHeight={Sizes.size22}
              IconColorStart={BackgroundColors.gradientColorStart}
              IconColorEnd={BackgroundColors.gradientColorEnd}
            />
            <View style={{marginHorizontal: Sizes.size12}}>
              <Text>{i18n.t('pages.info.tariffs')}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingHorizontal: Sizes.size10,
              paddingVertical: Sizes.size27,
              marginHorizontal: Sizes.size29,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomColor: Colors.borderDefColor,
              borderBottomWidth: 1,
            }}
            onPress={() => {}}>
            <About
              IconWidth={Sizes.size22}
              IconHeight={Sizes.size22}
              IconColorStart={BackgroundColors.gradientColorStart}
              IconColorEnd={BackgroundColors.gradientColorEnd}
            />
            <View style={{marginHorizontal: Sizes.size12}}>
              <Text>{i18n.t('pages.info.about_us')}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingHorizontal: Sizes.size10,
              paddingVertical: Sizes.size27,
              marginHorizontal: Sizes.size29,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomColor: Colors.borderDefColor,
              borderBottomWidth: 1,
            }}>
            <Question
              IconWidth={Sizes.size22}
              IconHeight={Sizes.size22}
              IconColorStart={BackgroundColors.gradientColorStart}
              IconColorEnd={BackgroundColors.gradientColorEnd}
            />
            <View style={{marginHorizontal: Sizes.size12}}>
              <Text>{i18n.t('pages.info.use_site')}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Info;
