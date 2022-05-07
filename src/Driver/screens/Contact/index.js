import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {BackgroundColors, Colors, Sizes} from '../../../assets/RootStyle';
import {ScreenHeader} from '../../components/ScreenHeader';
import {Message, Contact, Pointer} from '../../assets/Icons';
import {styles} from './style';
import {TextInput} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {makeAction} from '../../../makeAction';
class ContactScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation, theme} = this.props;
    const {container, text} = styles(theme);
    return (
      <View style={{flex: 1, backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR}}>
        <ScreenHeader
          title="driver.pages.settings.help.contact_us"
          leftIcon="back"
          leftIconPress={() => navigation.goBack()}
        />
        <View style={container}>
          <Text style={text}>4-58-58</Text>
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
export default connect(mapStateToProps, {makeAction})(ContactScreen);
