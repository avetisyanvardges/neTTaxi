import React, {useEffect} from 'react';
import AppContainer from './src/Navigation';
import {Provider} from 'react-redux';
import store from './src/redux';
import {NavigationContainer} from '@react-navigation/native';
import {
  setCustomText,
  setCustomTextInput,
  setCustomPicker,
} from 'react-native-global-props';
import {Sizes} from './src/assets/RootStyle';
import {StatusBar} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import i18n from './src/assets/I18n';
import {navigationRef} from './src/RootNavigation';
import {deviceInfo} from './src/assets/DeviceInfo';
import {View, Text} from 'react-native';

const App = () => {
  useEffect(() => {
    getLanguage();
  }, []);

  const getLanguage = async () => {
    const data = await AsyncStorage.getItem('@lang');
    const parse = JSON.parse(data);
    i18n.changeLanguage(parse);
    if (parse === 'ru') {
      const customTextInputProps = {
        style: {
          fontFamily: 'OswaldLight',
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
        },
      };
      const customTextProps = {
        style: {
          fontFamily: 'BraindGyumri',
          fontSize: deviceInfo.deviceHeight < 822 ? Sizes.size15 : Sizes.size17,
        },
      };
      setCustomText(customTextProps);
      setCustomTextInput(customTextInputProps);
    }
  };

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <AppContainer />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
