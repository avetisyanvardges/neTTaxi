import React, {Component} from 'react';
import {View, Text, FlatList, TextInput} from 'react-native';
import {styles} from './style';
import {ScreenHeader} from '../../components/ScreenHeader';
import {BackgroundColors, Sizes} from '../../../assets/RootStyle';
import i18n from '../../../assets/I18n';
import LinearGradient from 'react-native-linear-gradient';

class Message extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation, buttonColor, theme} = this.props;
    const {underLine} = styles();
    return (
      <View style={{flex: 1, backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR}}>
        <ScreenHeader
          title="message.title"
          leftIcon="back"
          leftIconPress={() => navigation.goBack()}
        />
        <View
          style={{borderWidth: 1, borderColor: 'blue', width: Sizes.size18_5}}>
          <TextInput />
        </View>
      </View>
    );
  }
}

export default Message;
