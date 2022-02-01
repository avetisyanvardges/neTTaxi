import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {styles} from './style';
import {ScreenHeader} from '../../components/ScreenHeader';
class Wallet extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="#F2F2F2" />
        <ScreenHeader
          title="driver.title"
          leftIcon="back"
          leftIconPress={() => navigation.goBack()}
        />
        <Text>Wallet pAge</Text>
      </View>
    );
  }
}

export default Wallet;
