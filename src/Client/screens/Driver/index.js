import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {ScreenHeader} from '../../components/ScreenHeader';

class Driver extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1}}>
        <ScreenHeader
          title="driver.title"
          leftIcon="back"
          leftIconPress={() => navigation.goBack()}
        />
        <Text>Driver page</Text>
      </View>
    );
  }
}

export default Driver;
