import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {ScreenHeader} from '../../components/ScreenHeader';
import {BackgroundColors, Colors, Sizes} from '../../../assets/RootStyle';
import {About, Address, Language, Payment, Question} from '../../assets/Icons';
import i18n from '../../../assets/I18n';
import TaxiPrice from '../../assets/Icons/TaxiPrice';
import {connect} from 'react-redux';
import {makeAction} from '../../../makeAction';
class Info extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation, buttonColor, theme} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR}}>
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
              IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
              IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
            />
            <View style={{marginHorizontal: Sizes.size12}}>
              <Text style={{color: theme?.PRIMARY_TEXT_COLOR}}>
                {i18n.t('client.pages.info.tariffs')}
              </Text>
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
              IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
              IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
            />
            <View style={{marginHorizontal: Sizes.size12}}>
              <Text style={{color: theme?.PRIMARY_TEXT_COLOR}}>
                {i18n.t('client.pages.info.about_us')}
              </Text>
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
              IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
              IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
            />
            <View style={{marginHorizontal: Sizes.size12}}>
              <Text style={{color: theme?.PRIMARY_TEXT_COLOR}}>
                {i18n.t('client.pages.info.use_site')}
              </Text>
            </View>
          </TouchableOpacity>
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

export default connect(mapStateToProps, {makeAction})(Info);
