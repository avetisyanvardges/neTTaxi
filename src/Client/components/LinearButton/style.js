import {StyleSheet} from 'react-native';
import {Colors, Shadow, Sizes} from '../../../assets/RootStyle';
import {deviceInfo} from '../../../assets/DeviceInfo';

const styles = theme => {
  return StyleSheet.create({
    container: {
      borderRadius: Sizes.size15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textStyle: {
      color: Colors.white,
    },
    small: {
      width: Sizes.size145,
      padding: deviceInfo.deviceHeight < 822 ? Sizes.size8 : Sizes.size12,
    },
    normal: {
      width: Sizes.size250,
      padding: Sizes.size8,
    },
    big: {
      width: Sizes.size320,
      padding: deviceInfo.deviceHeight < 822 ? Sizes.size8 : Sizes.size12,
    },
    smallFontSize: {
      fontSize: Sizes.size25,
    },
    normalFontSize: {
      fontSize: Sizes.size25,
    },
    bigFontSize: {
      fontSize: Sizes.size25,
    },
  });
};

export {styles};
