import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {styles} from './style';
import {ScreenHeader} from '../../components/ScreenHeader';
import {BackgroundColors, Sizes} from '../../../assets/RootStyle';
import i18n from '../../../assets/I18n';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {makeAction} from '../../../makeAction';

class Security extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation, buttonColor, theme} = this.props;
    const {underLine} = styles();
    return (
      <View style={{flex: 1, backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR}}>
        <ScreenHeader
          title="security.title"
          leftIcon="back"
          leftIconPress={() => navigation.goBack()}
        />
        <View
          style={{
            marginHorizontal: Sizes.size34,
            marginTop: Sizes.size35,
          }}>
          <Text
            style={{fontSize: Sizes.size19, color: theme?.PRIMARY_TEXT_COLOR}}>
            {i18n.t('client.pages.security.based_safety')}
          </Text>
        </View>
        <View style={underLine} />
        <View>
          <View
            style={{
              marginTop: Sizes.size25,
              marginHorizontal: Sizes.size34,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <LinearGradient
              start={{x: 0, y: 0.5}}
              end={{x: 1.3, y: 0.5}}
              colors={buttonColor?.PRIMARY_BUTTON_COLOR}
              style={{
                width: Sizes.size8,
                height: Sizes.size8,
                marginRight: Sizes.size7,
                borderRadius: Sizes.size50,
              }}
            />
            <Text style={{color: theme?.PRIMARY_TEXT_COLOR}}>
              {i18n.t('client.pages.security.mask')}
            </Text>
          </View>
          <View
            style={{
              marginTop: Sizes.size25,
              marginHorizontal: Sizes.size34,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <LinearGradient
              start={{x: 0, y: 0.5}}
              end={{x: 1.3, y: 0.5}}
              colors={buttonColor?.PRIMARY_BUTTON_COLOR}
              style={{
                width: Sizes.size8,
                height: Sizes.size8,
                marginRight: Sizes.size7,
                borderRadius: Sizes.size50,
              }}
            />
            <Text style={{color: theme?.PRIMARY_TEXT_COLOR}}>
              {i18n.t('client.pages.security.online_payments')}
            </Text>
          </View>
          <View
            style={{
              marginTop: Sizes.size25,
              marginHorizontal: Sizes.size34,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <LinearGradient
              start={{x: 0, y: 0.5}}
              end={{x: 1.3, y: 0.5}}
              colors={buttonColor?.PRIMARY_BUTTON_COLOR}
              style={{
                width: Sizes.size8,
                height: Sizes.size8,
                marginRight: Sizes.size7,
                borderRadius: Sizes.size50,
              }}
            />
            <Text style={{color: theme?.PRIMARY_TEXT_COLOR}}>
              {i18n.t('client.pages.security.disinfect')}
            </Text>
          </View>
          <View
            style={{
              marginTop: Sizes.size25,
              marginHorizontal: Sizes.size34,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <LinearGradient
              start={{x: 0, y: 0.5}}
              end={{x: 1.3, y: 0.5}}
              colors={buttonColor?.PRIMARY_BUTTON_COLOR}
              style={{
                width: Sizes.size8,
                height: Sizes.size8,
                marginRight: Sizes.size7,
                borderRadius: Sizes.size50,
              }}
            />
            <Text style={{color: theme?.PRIMARY_TEXT_COLOR}}>
              {i18n.t('client.pages.security.wash_hands')}
            </Text>
          </View>
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

export default connect(mapStateToProps, {makeAction})(Security);
