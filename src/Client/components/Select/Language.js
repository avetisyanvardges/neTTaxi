import React, {useState, useEffect} from 'react';
import {View, FlatList, TouchableOpacity, Image, Text} from 'react-native';
import i18n from '../../../assets/I18n';
import {withNavigationFocus} from '@react-navigation/compat';
import AsyncStorage from '@react-native-community/async-storage';
import {BackgroundColors, Colors, Sizes} from '../../../assets/RootStyle';
import {RadioItem} from '../RadioItem';
import Select from './index';
import LinearGradient from 'react-native-linear-gradient';
import * as RootNavigation from '../../../RootNavigation';
import * as Animatable from 'react-native-animatable';
import {Matryoshka, Pomegranate, BigBen} from '../../assets/Icons';
import {setCustomText, setCustomTextInput} from 'react-native-global-props';
const Language = () => {
  const [lang, setLang] = useState([
    {
      title: 'Հայերեն',
      value: 'am',
      icon: <Pomegranate IconWidth={Sizes.size53} IconHeight={Sizes.size56} />,
      fontFamily: 'BraindGyumri',
    },
    {
      title: 'English',
      value: 'en',
      icon: <BigBen IconWidth={Sizes.size60} IconHeight={Sizes.size60} />,
      fontFamily: 'BraindGyumri',
    },
    {
      title: 'Русский',
      value: 'ru',
      icon: <Matryoshka IconWidth={Sizes.size60} IconHeight={Sizes.size60} />,
      fontFamily: 'OswaldLight',
    },
  ]);

  const [selected, setSelected] = useState();
  useEffect(() => {
    getLanguage();
  }, []);

  const getLanguage = async () => {
    const data = await AsyncStorage.getItem('@lang');
    const parse = JSON.parse(data);
    console.log(data, 55);
    if (parse === 'ru') {
      const customTextInputProps = {
        style: {
          fontFamily: 'OswaldLight',
        },
      };
      const customTextProps = {
        style: {
          fontFamily: 'OswaldLight',
          fontSize: Sizes.size35,
        },
      };

      setCustomText(customTextProps);
      setCustomTextInput(customTextInputProps);
    } else {
      const customTextInputProps = {
        style: {
          fontFamily: 'BraindGyumri',
          fontSize: Sizes.size35,
        },
      };
      const customTextProps = {
        style: {
          fontFamily: 'BraindGyumri',
          fontSize: Sizes.size35,
        },
      };
      setCustomText(customTextProps);
      setCustomTextInput(customTextInputProps);
    }
  };

  const changeLanguage = value => {
    i18n.changeLanguage(value);
    AsyncStorage.setItem('@lang', JSON.stringify(value));
    setSelected(value);
    RootNavigation.navigate('Verification');
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => changeLanguage(item.value)}
        style={{flexDirection: 'row', alignItems: 'center'}}>
        <Animatable.View
          useNativeDriver={true}
          animation="flipInY"
          easing="ease-in-out">
          <View
            style={{
              marginVertical: Sizes.size10,
              marginHorizontal: Sizes.size5,
            }}>
            {item.icon}
          </View>
        </Animatable.View>
        <Animatable.View
          useNativeDriver={true}
          animation="bounceInRight"
          easing="ease-in-out">
          <Text>{i18n.t(item.title)}</Text>
        </Animatable.View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, borderWidth: 1}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={BackgroundColors.appColorForMenLight}
        style={{flex: 1}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            height: Sizes.size200,
          }}>
          <Text>Choose your Language</Text>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <FlatList
            keyExtractor={(item, i) => i.toString()}
            data={lang}
            renderItem={renderItem}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default withNavigationFocus(Language);
