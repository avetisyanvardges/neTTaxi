import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ScreenHeader} from '../../components/ScreenHeader';
import i18n from '../../assets/I18n';
import {BackgroundColors, Colors, Sizes} from '../../assets/RootStyle';
import {Message, Phone} from '../../assets/images/Icons';
import {deviceInfo} from '../../assets/DeviceInfo';
import Modal from 'react-native-modal';
class Help extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPhoneModalVizible: false,
    };
  }
  render() {
    const {navigation} = this.props;
    const {isPhoneModalVizible} = this.state;
    const phoneToggleModal = () => {
      this.setState({isPhoneModalVizible: !isPhoneModalVizible});
    };

    return (
      <View style={{flex: 1}}>
        <ScreenHeader
          title="help.title"
          leftIcon="back"
          leftIconPress={() => navigation.goBack()}
        />
        <TouchableOpacity
          onPress={() => {}}
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
            IconColorStart={BackgroundColors.gradientColorStart}
            IconColorEnd={BackgroundColors.gradientColorEnd}
          />
          <View style={{marginHorizontal: Sizes.size12}}>
            <Text>{i18n.t('pages.help.message')}</Text>
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
            IconColorStart={BackgroundColors.gradientColorStart}
            IconColorEnd={BackgroundColors.gradientColorEnd}
          />
          <View style={{marginHorizontal: Sizes.size12}}>
            <Text>{i18n.t('pages.help.contact_us')}</Text>
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
              backgroundColor: BackgroundColors.white,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: Sizes.size35,
              }}>
              4-58-41
            </Text>
          </View>
        </Modal>
      </View>
    );
  }
}

export default Help;
