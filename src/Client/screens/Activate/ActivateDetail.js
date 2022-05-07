import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {styles} from './style';
import {ScreenHeader} from '../../components/ScreenHeader';
import Activate from '../../components/Activate';
import {connect} from 'react-redux';
import {makeAction} from '../../../makeAction';
class ActivateDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {route, navigation, theme} = this.props;
    const {container, content} = styles(theme);
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
const mapStateToProps = store => {
  return {
    theme: store.themes.theme,
    buttonColor: store.themes.buttonColor,
  };
};

export default connect(mapStateToProps, {makeAction})(ActivateDetail);
