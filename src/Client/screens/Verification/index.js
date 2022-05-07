import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import {Colors, Sizes} from '../../../assets/RootStyle';
import LinearGradient from 'react-native-linear-gradient';
import LoginAnim from '../../assets/images/Login.png';
import {ArrowLeft} from '../../assets/Icons';
import {LinearButton} from '../../components/LinearButton';
import {useSelector} from 'react-redux';
import i18n from '../../../assets/I18n';

const Verification = ({navigation}) => {
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const buttonColor = useSelector(store => store.themes.buttonColor);
  const [countryCode, setCountryCode] = useState('+374');
  const [phone, setPhone] = useState('');
  const [next, setNext] = useState(false);
  const [verifyCode, setVerifyCode] = useState({
    firstNum: '',
    secondNum: '',
    thirdNum: '',
    fourthNum: '',
  });

  const disabledButton = button => {
    if (button === 'number') {
      return phone.length !== 8;
    }

    if (button === 'verify') {
      return (
        !verifyCode.firstNum ||
        !verifyCode.secondNum ||
        !verifyCode.thirdNum ||
        !verifyCode.fourthNum
      );
    }
  };

  const verificationCode = () => {
    const veriCode = `${verifyCode.firstNum}${verifyCode.secondNum}${verifyCode.thirdNum}${verifyCode.fourthNum}`;
    if (phone === '77314814' && veriCode === '1234') {
      navigation.navigate('Client');
    } else if (phone === '44750756' && veriCode === '1234') {
      navigation.navigate('Driver');
    }
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LinearGradient
          start={{x: 0, y: 0.5}}
          end={{x: 1.3, y: 0.5}}
          colors={['#F4F0FA', '#D3C7E9']}
          style={{
            height: '107%',
            borderRadius: Sizes.size50,
          }}>
          {next ? (
            <Pressable
              onPress={() => setNext(false)}
              style={{
                width: Sizes.size50,
                height: Sizes.size50,
                marginTop: Sizes.size60,
                marginLeft: Sizes.size25,
              }}>
              <ArrowLeft
                IconWidth={Sizes.size25}
                IconHeight={Sizes.size25}
                IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
              />
            </Pressable>
          ) : null}
          {!next ? (
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={LoginAnim}
                style={{width: Sizes.size350, height: Sizes.size350}}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: Sizes.size60,
                }}>
                <TextInput
                  placeholder={'+374'}
                  value={countryCode}
                  maxLength={4}
                  style={{
                    fontSize: Sizes.size26,
                    borderBottomColor: Colors.borderDefColor,
                    borderBottomWidth: 1,
                  }}
                />
                <TextInput
                  placeholder={'77 31 48 14'}
                  keyboardType={'phone-pad'}
                  onChangeText={text => setPhone(text)}
                  value={phone}
                  maxLength={8}
                  style={{
                    fontSize: Sizes.size26,
                    borderBottomColor: Colors.borderDefColor,
                    borderBottomWidth: 1,
                  }}
                />
              </View>
              <View style={{marginTop: Sizes.size75}}>
                <LinearButton
                  startColor={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                  endColor={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
                  title={i18n.t('texts.next')}
                  disabled={disabledButton('number')}
                  size={'big'}
                  onPress={() => {
                    setNext(true);
                  }}
                />
              </View>
            </View>
          ) : (
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TextInput
                  maxLength={1}
                  value={verifyCode.firstNum}
                  onChangeText={code => {
                    setVerifyCode({...verifyCode, firstNum: code});
                    !verifyCode.firstNum ? secondInput.current.focus() : null;
                  }}
                  keyboardType={'numeric'}
                  style={{
                    fontSize: Sizes.size30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottomWidth: 1,
                    borderBottomColor: Colors.borderDefColor,
                    marginRight: Sizes.size25,
                  }}
                />
                <TextInput
                  ref={secondInput}
                  maxLength={1}
                  value={verifyCode.secondNum}
                  onChangeText={code => {
                    setVerifyCode({...verifyCode, secondNum: code});
                    !verifyCode.secondNum ? thirdInput.current.focus() : null;
                  }}
                  keyboardType={'numeric'}
                  style={{
                    fontSize: Sizes.size30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottomWidth: 1,
                    borderBottomColor: Colors.borderDefColor,
                    marginRight: Sizes.size25,
                  }}
                />
                <TextInput
                  ref={thirdInput}
                  maxLength={1}
                  value={verifyCode.thirdNum}
                  onChangeText={code => {
                    setVerifyCode({...verifyCode, thirdNum: code});
                    !verifyCode.thirdNum ? fourthInput.current.focus() : null;
                  }}
                  keyboardType={'numeric'}
                  style={{
                    fontSize: Sizes.size30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottomWidth: 1,
                    borderBottomColor: Colors.borderDefColor,
                    marginRight: Sizes.size25,
                  }}
                />
                <TextInput
                  ref={fourthInput}
                  maxLength={1}
                  value={verifyCode.fourthNum}
                  keyboardType={'numeric'}
                  onChangeText={code => {
                    setVerifyCode({...verifyCode, fourthNum: code});
                  }}
                  style={{
                    fontSize: Sizes.size30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottomWidth: 1,
                    borderBottomColor: Colors.borderDefColor,
                    marginRight: Sizes.size25,
                  }}
                />
              </View>
              <Text style={{marginTop: Sizes.size20}}>
                {i18n.t('texts.enter_code')}
              </Text>
              <View style={{marginTop: Sizes.size75}}>
                <LinearButton
                  startColor={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                  endColor={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
                  title={i18n.t('texts.login')}
                  disabled={disabledButton('verify')}
                  size={'big'}
                  onPress={() => {
                    verificationCode();
                  }}
                />
              </View>
            </View>
          )}
        </LinearGradient>
      </TouchableWithoutFeedback>
    </>
  );
};

export default Verification;
