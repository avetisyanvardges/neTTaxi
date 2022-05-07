import React, {Component} from 'react';
import {View} from 'react-native';
import {BackgroundColors, Sizes} from '../../../assets/RootStyle';
import {DrawerItem} from '@react-navigation/drawer';
import i18n from '../../../assets/I18n';
import {ScreenHeader} from '../../components/ScreenHeader';
import Modal from 'react-native-modal';
import {Armenian, Russian, English} from '../../assets/Icons';
import {styles} from './style';
import {connect} from 'react-redux';
import {makeAction} from '../../../makeAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setCustomText, setCustomTextInput} from 'react-native-global-props';
import {Pomegranate} from '../../assets/Icons/Pomegranate';
class DriverLanguageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVizible: false,
      isPaymentModalVizible: false,
    };
  }
  render() {
    const {navigation, theme, buttonColor} = this.props;
    const {isModalVizible} = this.state;
    const {container, container1, drawer} = styles(theme);

    const changeLanguage = value => {
      i18n.changeLanguage(value);
      AsyncStorage.setItem('@lang', JSON.stringify(value));
      this.setState({isModalVizible: !isModalVizible});
      if (value === 'ru') {
        const customTextInputProps = {
          style: {
            fontFamily: 'OswaldLight',
            fontSize: Sizes.size17,
          },
        };
        const customTextProps = {
          style: {
            fontFamily: 'OswaldLight',
            fontSize: Sizes.size17,
          },
        };

        setCustomText(customTextProps);
        setCustomTextInput(customTextInputProps);
      } else {
        const customTextInputProps = {
          style: {
            fontFamily: 'BraindGyumri',
            fontSize: Sizes.size17,
          },
        };
        const customTextProps = {
          style: {
            fontFamily: 'BraindGyumri',
            fontSize: Sizes.size17,
          },
        };
        setCustomText(customTextProps);
        setCustomTextInput(customTextInputProps);
      }
    };
    return (
      <View style={{flex: 1, backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR}}>
        <ScreenHeader
          title="driver.pages.settings.language"
          leftIcon="back"
          leftIconPress={() => navigation.goBack()}
        />
        <View style={container}>
          <DrawerItem
            label={i18n.t('Հայերեն')}
            onPress={() => changeLanguage('am')}
            style={drawer}
            icon={() => (
              <Pomegranate
                IconWidth={21}
                IconHeight={23}
                IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
              />
            )}
          />
        </View>
        <View style={container1}>
          <DrawerItem
            label={i18n.t('Русский')}
            onPress={() => changeLanguage('ru')}
            style={drawer}
            icon={() => (
              <Russian
                IconWidth={15}
                IconHeight={20}
                IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
              />
            )}
          />
        </View>
        <View style={container1}>
          <DrawerItem
            label={i18n.t('English')}
            onPress={() => changeLanguage('en')}
            style={drawer}
            icon={() => (
              <English
                IconWidth={17}
                IconHeight={25}
                IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
              />
            )}
          />
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
export default connect(mapStateToProps, {makeAction})(DriverLanguageScreen);
