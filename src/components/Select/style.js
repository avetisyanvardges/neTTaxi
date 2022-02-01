import {StyleSheet} from 'react-native';
import {deviceInfo} from '../../assets/DeviceInfo';
import {BackgroundColors, Colors, Sizes} from '../../assets/RootStyle';
const styles = theme => {
  return StyleSheet.create({
    menTheme: {
      width: deviceInfo.deviceWidth / 2,
      height: deviceInfo.deviceHeight,
      borderTopRightRadius: Sizes.size100,
    },
    womenTheme: {
      width: deviceInfo.deviceWidth / 2,
      height: deviceInfo.deviceHeight,
    },
    menThemeDark: {
      flex: 1,
      borderTopRightRadius: Sizes.size100,
    },
    selectText: {
      fontFamily: 'BraindGyumri',
      fontSize: Sizes.size30,
      color: '#E39EDC',
      marginTop: Sizes.size70,
      marginHorizontal: Sizes.size10,
      alignSelf: 'flex-end',
    },
    themeMode: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    themeModeDarkText: {
      marginHorizontal: Sizes.size10,
      color: Colors.white

    },
    themeModeLightText: {
      color: Colors.white

    },
    themeText: {
      fontSize: Sizes.size30,
      color: '#222045',
      fontFamily: 'BraindGyumri',
      marginTop: Sizes.size71,
      marginHorizontal: Sizes.size10,
      alignSelf: 'flex-start',
    },
    womanThemeContainer: {
      height: deviceInfo.deviceHeight+Sizes.size15,
      borderBottomLeftRadius: Sizes.size130,
    },
  });
};

export {styles};
