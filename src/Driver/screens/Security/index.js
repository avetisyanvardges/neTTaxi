import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {ScreenHeader} from '../../../Client/components/ScreenHeader';
class SecurityScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1}}>
        <ScreenHeader
          title="pages.security.title"
          leftIcon="back"
          leftIconPress={() => navigation.goBack()}
        />
        <Text>Security Page</Text>
      </View>
    );
  }
}

export default SecurityScreen;
