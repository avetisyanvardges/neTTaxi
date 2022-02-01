import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import i18n from '../../assets/I18n';
import {BackgroundColors, Sizes} from '../../assets/RootStyle';
import {styles} from './style';
import {makeAction} from '../../makeAction';
import {connect} from 'react-redux';
import {
  MAN_THEME_LIGHT,
  WOMAN_THEME_LIGHT,
  MAN_THEME_DARK,
  WOMAN_THEME_DARK,
} from '../../actionsTypes';
class Theme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menTheme: '',
      womenTheme: '',
    };
  }
  toggleSwitchTheme = event => {
    let ACTION_TYPE;
    if (event === 'manDark') {
      ACTION_TYPE = MAN_THEME_DARK;
    } else if (event === 'manLight') {
      ACTION_TYPE = MAN_THEME_LIGHT;
    } else if (event === 'womanDark') {
      ACTION_TYPE = WOMAN_THEME_DARK;
    } else if (event === 'womanLight') {
      ACTION_TYPE = WOMAN_THEME_LIGHT;
    }

    this.props.makeAction(ACTION_TYPE);
    AsyncStorage.setItem('Theme', ACTION_TYPE);
  };
  render() {
    const {navigation, theme} = this.props;
    const {
      menTheme,
      womenTheme,
      menThemeDark,
      selectText,
      themeMode,
      themeModeDarkText,
      themeText,
      womanThemeContainer,
      themeModeLightText,
    } = styles();
    console.log(123);
    return (
      <View style={{flex: 1}}>
        <LinearGradient
          style={{flex: 1}}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 0.7}}
          colors={['#F4F0FA', '#E39EDC', '#222045']}>
          <View style={{flexDirection: 'row'}}>
            <Animatable.View
              useNativeDriver={true}
              animation="fadeInLeft"
              easing="ease-in-out"
              style={menTheme}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 0, y: 0.7}}
                colors={theme?.PRIMARY_BACKGROUND_COLOR}
                style={menThemeDark}>
                <Text style={selectText}>
                  {i18n.t('pages.selectTheme.select')}
                </Text>
                <View style={themeMode}>
                  <TouchableOpacity
                    onPress={() => {
                      this.toggleSwitchTheme('manDark');
                    }}>
                    <Text style={themeModeDarkText}>Dark</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      this.toggleSwitchTheme('manLight');
                    }}>
                    {console.log(theme?.PRIMARY_TEXT_COLOR)}
                    <Text>Light</Text>
                  </TouchableOpacity>
                </View>
              </LinearGradient>
            </Animatable.View>
            <Animatable.View
              useNativeDriver={true}
              animation="fadeInRight"
              easing="ease-in-out"
              style={womenTheme}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 0, y: 0.7}}
                colors={BackgroundColors.appColorForWomen}
                style={womanThemeContainer}>
                <Text style={themeText}>
                  {i18n.t('pages.selectTheme.theme')}
                </Text>
                <View style={themeMode}>
                  <TouchableOpacity
                    onPress={() => {
                      this.toggleSwitchTheme('womanDark');
                    }}>
                    <Text style={themeModeDarkText}>Dark</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      this.toggleSwitchTheme('womanLight');
                    }}>
                    <Text style={themeModeLightText}>Light</Text>
                  </TouchableOpacity>
                </View>
              </LinearGradient>
            </Animatable.View>
          </View>
        </LinearGradient>
      </View>
    );
  }
}
const mapStateToProps = store => {
  return {
    theme: store.themes.theme,
  };
};

export default connect(mapStateToProps, {makeAction})(Theme);
