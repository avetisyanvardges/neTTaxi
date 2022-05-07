import React, {Component} from 'react';
import {View} from 'react-native';
import {ScreenHeader} from '../../../Driver/components/ScreenHeader';
import {connect} from 'react-redux';
import {makeAction} from '../../../makeAction';
class DriverWalletScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation, theme} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR}}>
        <ScreenHeader
          title="driver.pages.wallet.title"
          leftIcon="back"
          leftIconPress={() => navigation.goBack()}
        />
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
export default connect(mapStateToProps, {makeAction})(DriverWalletScreen);
