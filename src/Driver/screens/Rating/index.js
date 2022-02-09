import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {ScreenHeader} from '../../../Client/components/ScreenHeader';
class RatingScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1}}>
        <ScreenHeader
          title="pages.rating.title"
          leftIcon="back"
          leftIconPress={() => navigation.goBack()}
        />
        <Text>Rating page</Text>
      </View>
    );
  }
}

export default RatingScreen;
