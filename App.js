import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './src/redux';
import Main from './src/Main';
import {View} from 'react-native';
import {setCustomText, setCustomTextInput} from 'react-native-global-props';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18next';

const App = () => {
  useEffect(() => {
    getLanguage();
  }, []);

  const getLanguage = async () => {
    const data = await AsyncStorage.getItem('@lang');
    const parse = JSON.parse(data);
    console.log(parse, 'parse');
    i18n.changeLanguage(parse);

    const customTextInputProps = {
      style: {
        fontFamily: 'BraindGyumri',
      },
    };
    const customTextProps = {
      style: {
        fontFamily: 'BraindGyumri',
      },
    };
    setCustomText(customTextProps);
    setCustomTextInput(customTextInputProps);
  };

  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <Main />
      </Provider>
    </View>
  );
};

export default App;
