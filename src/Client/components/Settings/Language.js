import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import i18n from '../../../assets/I18n';
import AsyncStorage from '@react-native-community/async-storage';
import {Colors} from '../../../assets/RootStyle';
import {RadioItem} from '../RadioItem';
const Language = () => {
  const [lang, setLang] = useState([
    {title: 'languages.arm', value: 'am'},
    {title: 'languages.en', value: 'en'},
    {title: 'languages.ru', value: 'ru'},
  ]);

  const [selected, setSelected] = useState();

  useEffect(() => {
    getLanguage();
  }, []);

  const changeLanguage = value => {
    i18n.changeLanguage(value);
    AsyncStorage.setItem('@lang', JSON.stringify(value));
    setSelected(value);
  };

  const getLanguage = async () => {
    const data = await AsyncStorage.getItem('@lang');
    const parse = JSON.parse(data);
    setSelected(parse);
  };

  const renderItem = ({item}) => {
    const value = selected === item.value;
    return (
      <RadioItem
        title={item.title}
        value={value}
        tintColors={Colors.easternBlue}
        onPress={() => changeLanguage(item.value)}
        change={() => changeLanguage(item.value)}
      />
    );
  };

  return (
    <View>
      <FlatList data={lang} renderItem={renderItem} />
    </View>
  );
};

export {Language};
