import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Select from '../../components/Select';
class SelectTheme extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Select pageInfo={'Language'} />
      </View>
    );
  }
}

export default SelectTheme;
