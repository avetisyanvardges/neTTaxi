import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {DollarIcon} from '../../assets/Icons/Dollar';
import {BackgroundColors, Colors, Sizes} from '../../../assets/RootStyle';
import {ScreenHeader} from '../../components/ScreenHeader';
import {styles} from './style';
import userStatPic from '../../assets/images/UserStatPic.png';
import {connect} from 'react-redux';
import {makeAction} from '../../../makeAction';
import i18n from '../../../assets/I18n';
class StatisticsScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation, theme, buttonColor} = this.props;
    const {
      container,
      profilePic,
      text,
      data,
      container2,
      dollar,
      day,
      week,
      klor,
      diagrama,
      tver,
      di2,
      weekT,
      dayT,
    } = styles(theme);
    return (
      <View style={{flex: 1, backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR}}>
        <ScreenHeader
          title="driver.pages.data.statistics.title"
          leftIcon="back"
          leftIconPress={() => navigation.goBack()}
        />

        <View style={container}>
          <Image source={userStatPic} style={profilePic} />
          <View style={data}>
            <Text style={text}>
              {i18n.t('driver.pages.data.statistics.name')}
            </Text>
            <Text style={text}>
              {i18n.t('driver.pages.data.statistics.rating')}
            </Text>
            <Text style={text}>
              {i18n.t('driver.pages.data.statistics.activity')}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={container2}>
            <View style={dollar}>
              <DollarIcon IconWidth={15} IconHeight={20} />
            </View>
            <View style={klor} />
          </View>
          <View>
            <View
              style={{
                borderWidth: Sizes.size1,
                borderColor: theme?.PRIMARY_BORDER_COLOR,
                marginTop: Sizes.size18_5,
                marginHorizontal: 77,
                maxHeight: 40,
                flexDirection: 'row',
              }}>
              <View style={day}>
                <Text style={dayT}>
                  {i18n.t('driver.pages.data.statistics.day')}
                </Text>
              </View>
              <View style={week}>
                <Text style={weekT}>
                  {i18n.t('driver.pages.data.statistics.week')}
                </Text>
              </View>
            </View>
            <View
              style={{
                marginTop: 20,
                marginHorizontal: 110,
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <Text style={text}>2000 Դ</Text>
            </View>
          </View>
        </View>
        <View style={diagrama}>
          <Text style={tver}>2500</Text>
        </View>
        <View style={diagrama}>
          <Text style={tver}>1500</Text>
        </View>
        <View style={diagrama}>
          <Text style={tver}>500</Text>
        </View>
        <View style={di2} />
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
export default connect(mapStateToProps, {makeAction})(StatisticsScreen);
