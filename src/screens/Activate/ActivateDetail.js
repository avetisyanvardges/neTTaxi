import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {styles} from './style';
import {ScreenHeader} from '../../components/ScreenHeader';
import Activate from '../../components/Activate';
class ActivateDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {route,navigation } = this.props;
    const {container, content} = styles();
    const {pageInfo} = route.params;
    
    return (
      <View style={container}>
        <ScreenHeader
          title={`activations.${pageInfo.item}`}
          leftIcon="back"
          leftIconPress={() => navigation.goBack()}
        />
        <View style={content}>
          <Activate pageInfo={pageInfo.item} />
        </View>
      </View>
    );
  }
}

export default ActivateDetail;
