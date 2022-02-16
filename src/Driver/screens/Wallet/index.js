import React, {Component} from 'react';
import {View} from 'react-native';
import {ScreenHeader} from '../../../Driver/components/ScreenHeader';
class WalletScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1}}>
        <ScreenHeader
          title="driver.pages.wallet.title"
          leftIcon="back"
          leftIconPress={() => navigation.goBack()}
        />
      </View>
    );
  }
}

export default WalletScreen;
