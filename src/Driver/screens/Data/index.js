import React, {Component} from 'react';
import {View} from 'react-native';
import {ScreenHeader} from '../../components/ScreenHeader';
import {DrawerItem} from '@react-navigation/drawer';
import i18n from '../../../assets/I18n';
import {
  ArrowRightIcon,
  CarIcon,
  DriverIcon,
  Pointer,
  PointsIcon,
  RadiusIcon,
  StatisticsIcon,
} from '../../assets/Icons';
import {BackgroundColors, Colors, Sizes} from '../../../assets/RootStyle';
import {styles} from '../../components/LinkItem/styles';
import {connect} from 'react-redux';
import {makeAction} from '../../../makeAction';
class DataScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation, theme, buttonColor} = this.props;
    const {linkRightIcon} = styles();
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR,
        }}>
        <ScreenHeader
          title="driver.pages.data.title"
          leftIcon="back"
          leftIconPress={() => navigation.goBack()}
        />
        <View style={{flexDirection: 'row'}}>
          <DrawerItem
            label={i18n.t('driver.pages.data.car.title')}
            onPress={() => navigation.navigate('Car')}
            style={{
              width: Sizes.size320,
              marginBottom: 5,
            }}
            icon={() => (
              <CarIcon
                IconWidth={Sizes.size26}
                IconHeight={Sizes.size26}
                IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
              />
            )}
          />
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              marginRight: Sizes.size10,
              marginBottom: Sizes.size12,
              maxWidth: 15,
            }}>
            <Pointer
              IconWidth={13}
              IconHeight={21}
              IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
              IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
            />
          </View>
        </View>

        <View
          style={{
            width: '95%',
            borderBottomWidth: Sizes.size1,
            borderBottomColor: theme?.PRIMARY_BORDER_COLOR,
            marginHorizontal: Sizes.size12,
            marginTop: Sizes.size15,
            marginBottom: Sizes.size10,
          }}
        />
        <View style={{flexDirection: 'row'}}>
          <DrawerItem
            label={i18n.t('driver.pages.data.driver.title')}
            onPress={() => navigation.navigate('Driver')}
            style={{
              width: Sizes.size320,
              marginBottom: 5,
            }}
            icon={() => (
              <DriverIcon
                IconWidth={Sizes.size26}
                IconHeight={Sizes.size26}
                IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
              />
            )}
          />
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              marginRight: Sizes.size10,
              marginBottom: Sizes.size12,
              maxWidth: 15,
            }}>
            <Pointer
              IconWidth={13}
              IconHeight={21}
              IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
              IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
            />
          </View>
        </View>

        <View
          style={{
            width: '95%',
            borderBottomWidth: Sizes.size1,
            borderBottomColor: theme?.PRIMARY_BORDER_COLOR,
            marginHorizontal: Sizes.size12,
            marginTop: Sizes.size15,
            marginBottom: Sizes.size10,
          }}
        />
        <View style={{flexDirection: 'row'}}>
          <DrawerItem
            label={i18n.t('driver.pages.data.statistics.title')}
            onPress={() => navigation.navigate('Statistics')}
            style={{
              width: Sizes.size320,
              marginBottom: 5,
            }}
            icon={() => (
              <StatisticsIcon
                IconWidth={Sizes.size26}
                IconHeight={Sizes.size26}
                IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
              />
            )}
          />
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              marginRight: Sizes.size10,
              marginBottom: Sizes.size12,
              maxWidth: 15,
            }}>
            <Pointer
              IconWidth={13}
              IconHeight={21}
              IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
              IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
            />
          </View>
        </View>

        <View
          style={{
            width: '95%',
            borderBottomWidth: Sizes.size1,
            borderBottomColor: theme?.PRIMARY_BORDER_COLOR,
            marginHorizontal: Sizes.size12,
            marginTop: Sizes.size15,
            marginBottom: Sizes.size10,
          }}
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
export default connect(mapStateToProps, {makeAction})(DataScreen);
