import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {BackgroundColors, Colors, Sizes} from '../../../assets/RootStyle';
import {ScreenHeader} from '../../components/ScreenHeader';
import {Message, Contact, Pointer} from '../../assets/Icons';
import {styles} from './style';
import {TextInput} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {makeAction} from '../../../makeAction';
import i18n from '../../../assets/I18n';
class MessageScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation, theme, buttonColor} = this.props;
    const {container, text} = styles();
    return (
      <View style={{flex: 1, backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR}}>
        <ScreenHeader
          title="driver.pages.settings.help.message"
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
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'BraindGyumri',
              marginBottom: 5,
              color: theme?.PRIMARY_TEXT_COLOR,
            }}>
            {i18n.t('driver.pages.settings.help.message')}
          </Text>
        </View>
        <View
          style={{
            width: '95%',
            height: 140,
            marginHorizontal: Sizes.size12,
            borderBottomWidth: Sizes.size1,
            borderBottomColor: theme?.PRIMARY_BORDER_COLOR,
          }}>
          <TextInput />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
            marginRight: 12,
            marginTop: 20,
          }}>
          <Message
            IconWidth={Sizes.size26}
            IconHeight={Sizes.size26}
            IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
            IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
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
export default connect(mapStateToProps, {makeAction})(MessageScreen);
