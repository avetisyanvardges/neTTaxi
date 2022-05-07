import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {BackgroundColors, Colors, Sizes} from '../../../assets/RootStyle';
import {ScreenHeader} from '../../components/ScreenHeader';
import {styles} from './style';
import {connect} from 'react-redux';
import {makeAction} from '../../../makeAction';
import i18n from '../../../assets/I18n';
class DDriverScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation, theme} = this.props;
    const {container, view1, view2, text, border} = styles(theme);
    return (
      <View style={{flex: 1, backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR}}>
        <ScreenHeader
          title="driver.pages.data.driver.title"
          leftIcon="back"
          leftIconPress={() => navigation.goBack()}
        />
        <View style={view1}>
          <View style={border}>
            <Text style={text}>
              {i18n.t('driver.pages.data.driver.name_sur')} *
            </Text>
          </View>
        </View>
        <View style={container} />
        <View style={view2}>
          <View style={border}>
            <Text style={text}>
              {i18n.t('driver.pages.data.driver.phone')} *
            </Text>
          </View>
        </View>
        <View style={container} />
        <View style={view2}>
          <View style={border}>
            <Text style={text}>
              {i18n.t('driver.pages.data.driver.passport')} *
            </Text>
          </View>
        </View>
        <View style={container} />
      </View>
    );
  }
}

const mapStateToProps = store => {
  return {
    theme: store.themes.theme,
  };
};
export default connect(mapStateToProps, {makeAction})(DDriverScreen);
