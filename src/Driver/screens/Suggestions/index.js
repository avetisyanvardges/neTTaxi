import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {ScreenHeader} from '../../../Client/components/ScreenHeader';
class SuggestionsScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1}}>
        <ScreenHeader
          title="pages.suggestions.headerText"
          leftIcon="back"
          leftIconPress={() => navigation.goBack()}
        />
      </View>
    );
  }
}

export default SuggestionsScreen;
