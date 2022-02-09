import React, {useEffect, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {BackgroundColors, Sizes} from '../../../assets/RootStyle';
import LinearGradient from 'react-native-linear-gradient';
import {LinearButton} from '../LinearButton';
import i18n from '../../../assets/I18n';
// import {Picker} from '@react-native-picker/picker';
const AreaMagnet = () => {
  const [diameter, setDiameter] = useState();
  const [time, setTime] = useState();
  const [price, setPrice] = useState();
  useEffect(() => {
    calculatorForMagnets(time, diameter);
  }, [diameter, time]);

  const calculatorForMagnets = (time, diameter) => {
    if (
      (diameter === '1' && time === 'one') ||
      (diameter === '2' && time === 'one')
    ) {
      setPrice('40');
    } else if (diameter === '1' && time === 'onePart') {
      setPrice('60');
    } else if (diameter === '1' && time === 'two') {
      setPrice('120');
    } else if (diameter === '2' && time === 'onePart') {
      setPrice('80');
    } else if (diameter === '2' && time === 'two') {
      setPrice('140');
    } else if (diameter === '3' && time === 'one') {
      setPrice('50');
    } else if (diameter === '3' && time === 'onePart') {
      setPrice('100');
    } else if (diameter === '3' && time === 'two') {
      setPrice('140');
    }
  };

  return (
    <View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View>
          <View
            style={{
              width: Sizes.size100,
              marginHorizontal: Sizes.size25,
              marginVertical: Sizes.size67,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>{i18n.t('pages.activations.diameter')}</Text>
            <LinearGradient
              start={{x: 0, y: 0.5}}
              end={{x: 1.3, y: 0.5}}
              colors={[
                BackgroundColors.gradientColorStart,
                BackgroundColors.gradientColorEnd,
              ]}
              style={{
                width: Sizes.size90,
                height: Sizes.size45,
                borderRadius: Sizes.size10,
                marginTop: Sizes.size10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: Sizes.size86,
                  height: Sizes.size41,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#F2F2F2',
                  margin: Sizes.size2,
                  borderRadius: Sizes.size8,
                }}>
                {/*<Picker*/}
                {/*  style={{*/}
                {/*    width: Sizes.size105,*/}
                {/*    paddingHorizontal: Sizes.size50,*/}
                {/*  }}*/}
                {/*  selectedValue={diameter}*/}
                {/*  onValueChange={(itemValue, itemIndex) => {*/}
                {/*    setDiameter(itemValue);*/}
                {/*  }}>*/}
                {/*  <Picker.Item label="1 Հա" value="1" />*/}
                {/*  <Picker.Item label="2 Հա" value="2" />*/}
                {/*  <Picker.Item label="3 Հա" value="3" />*/}
                {/*</Picker>*/}
              </View>
            </LinearGradient>
          </View>
          <View
            style={{
              width: Sizes.size100,
              marginHorizontal: Sizes.size25,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>{i18n.t('pages.activations.time')}</Text>
            <LinearGradient
              start={{x: 0, y: 0.5}}
              end={{x: 1.3, y: 0.5}}
              colors={[
                BackgroundColors.gradientColorStart,
                BackgroundColors.gradientColorEnd,
              ]}
              style={{
                width: Sizes.size90,
                height: Sizes.size45,
                borderRadius: Sizes.size10,
                marginTop: Sizes.size10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: Sizes.size86,
                  height: Sizes.size41,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#F2F2F2',
                  margin: Sizes.size2,
                  borderRadius: Sizes.size8,
                }}>
                {/*<Picker*/}
                {/*  style={{*/}
                {/*    width: Sizes.size105,*/}
                {/*    paddingHorizontal: Sizes.size50,*/}
                {/*  }}*/}
                {/*  selectedValue={time}*/}
                {/*  onValueChange={(itemValue, itemIndex) => {*/}
                {/*    setTime(itemValue);*/}
                {/*  }}>*/}
                {/*  <Picker.Item label="24 Ժ" value="one" />*/}
                {/*  <Picker.Item label="36 ժ" value="onePart" />*/}
                {/*  <Picker.Item label="48 ժ" value="two" />*/}
                {/*</Picker>*/}
              </View>
            </LinearGradient>
          </View>
        </View>
        <View>
          <LinearGradient
            start={{x: 0, y: 0.5}}
            end={{x: 1.3, y: 0.5}}
            colors={[
              BackgroundColors.gradientColorStart,
              BackgroundColors.gradientColorEnd,
            ]}
            style={{
              width: Sizes.size100,
              height: Sizes.size100,
              borderRadius: Sizes.size50,
              marginTop: Sizes.size70,
              marginHorizontal: Sizes.size95,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: Sizes.size80,
                height: Sizes.size80,
                borderRadius: Sizes.size50,
                backgroundColor: '#F2F2F2',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: Sizes.size30}}>{price} բալ</Text>
            </View>
          </LinearGradient>
        </View>
      </View>
      <View style={{marginTop: Sizes.size80, marginHorizontal: Sizes.size25}}>
        <LinearButton
          startColor={BackgroundColors.gradientColorStart}
          endColor={BackgroundColors.gradientColorEnd}
          title={i18n.t('texts.activate')}
          size={'big'}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export {AreaMagnet};
