import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {BackgroundColors, Colors, Sizes} from '../../../assets/RootStyle';
import {ScreenHeader} from '../../components/ScreenHeader';
import {DrawerItem} from '@react-navigation/drawer';
import i18n from '../../../assets/I18n';
import {Message, Contact, Pointer} from '../../assets/Icons';
import {styles} from './style';
import {connect} from 'react-redux';
import {makeAction} from '../../../makeAction';
class DriverHelpScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation, theme, buttonColor} = this.props;
    const {container, text} = styles();
    return (
      <View style={{flex: 1, backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR}}>
        <ScreenHeader
          title="driver.pages.settings.help.title"
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
            label={i18n.t('driver.pages.settings.help.message')}
            onPress={() => navigation.navigate('Message')}
            style={{width: Sizes.size320, marginBottom: 5}}
            icon={() => (
              <Message
                IconWidth={Sizes.size26}
                IconHeight={Sizes.size26}
                IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
              />
            )}
          />
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              marginRight: Sizes.size10,
              marginBottom: Sizes.size12,
              maxWidth: 15,
            }}>
            <Pointer
              IconWidth={13}
              IconHeight={21}
              IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
              IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
            />
          </View>
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
            label={i18n.t('driver.pages.settings.help.contact_us')}
            onPress={() => navigation.navigate('Contact')}
            style={{width: Sizes.size320, marginBottom: Sizes.size5}}
            icon={() => (
              <Contact
                IconWidth={Sizes.size26}
                IconHeight={Sizes.size26}
                IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
              />
            )}
          />
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              marginRight: Sizes.size10,
              marginBottom: Sizes.size12,
              maxWidth: 15,
            }}>
            <Pointer
              IconWidth={13}
              IconHeight={21}
              IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
              IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
            />
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
export default connect(mapStateToProps, {makeAction})(DriverHelpScreen);
