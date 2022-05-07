import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ScreenHeader} from '../../components/ScreenHeader';
import i18n from '../../../assets/I18n';
import {BackgroundColors, Colors, Sizes} from '../../../assets/RootStyle';
import {Message, Phone} from '../../assets/Icons';
import {deviceInfo} from '../../../assets/DeviceInfo';
import Modal from 'react-native-modal';
import {LinearTextGradient} from 'react-native-text-gradient';
import {connect} from 'react-redux';
import {makeAction} from '../../../makeAction';
class Help extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPhoneModalVizible: false,
    };
  }
  render() {
    const {navigation, buttonColor, theme} = this.props;
    const {isPhoneModalVizible} = this.state;
    const phoneToggleModal = () => {
      this.setState({isPhoneModalVizible: !isPhoneModalVizible});
    };

    return (
      <View style={{flex: 1, backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR}}>
        <ScreenHeader
          title="help.title"
          leftIcon="back"
          leftIconPress={() => navigation.goBack()}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Message')}
          style={{
            paddingHorizontal: Sizes.size10,
            paddingVertical: Sizes.size27,
            marginHorizontal: Sizes.size29,
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomColor: Colors.borderDefColor,
            borderBottomWidth: 1,
          }}>
          <Message
            IconWidth={Sizes.size22}
            IconHeight={Sizes.size22}
            IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
            IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
          />
          <View style={{marginHorizontal: Sizes.size12}}>
            <Text style={{color: theme?.PRIMARY_TEXT_COLOR}}>
              {i18n.t('client.pages.help.message')}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={phoneToggleModal}
          style={{
            paddingHorizontal: Sizes.size10,
            paddingVertical: Sizes.size27,
            marginHorizontal: Sizes.size29,
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomColor: Colors.borderDefColor,
            borderBottomWidth: 1,
          }}>
          <Phone
            IconWidth={Sizes.size22}
            IconHeight={Sizes.size22}
            IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
            IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
          />
          <View style={{marginHorizontal: Sizes.size12}}>
            <Text style={{color: theme?.PRIMARY_TEXT_COLOR}}>
              {i18n.t('client.pages.help.contact_us')}
            </Text>
          </View>
        </TouchableOpacity>
        <Modal
          isVisible={isPhoneModalVizible}
          onBackdropPress={phoneToggleModal}
          deviceWidth={deviceInfo.deviceWidth}
          deviceHeight={deviceInfo.deviceHeight + Sizes.size20}
          style={{
            alignItems: 'center',
          }}>
          <View
            style={{
              width: Sizes.size230,
              height: Sizes.size220,
              borderRadius: Sizes.size20,
              backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <LinearTextGradient
              locations={[0, 1]}
              colors={['#3C449F', '#AF41C1']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <Text
                style={{
                  fontSize: Sizes.size35,
                  color: theme?.PRIMARY_TEXT_COLOR,
                }}>
                4-58-41
              </Text>
            </LinearTextGradient>
          </View>
        </Modal>
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

export default connect(mapStateToProps, {makeAction})(Help);
