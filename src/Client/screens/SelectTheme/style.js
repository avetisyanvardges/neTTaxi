import {StyleSheet} from 'react-native';
import { deviceInfo } from '../../../assets/DeviceInfo';
import {BackgroundColors, Colors, Sizes} from '../../../assets/RootStyle';

const styles = theme => {
  return StyleSheet.create({
    menTheme: {
      width: deviceInfo.deviceWidth/2,
      height: deviceInfo.deviceHeight,
      borderTopRightRadius: Sizes.size100
    },
    womenTheme: {
      width: deviceInfo.deviceWidth/2,
      height: deviceInfo.deviceHeight,
      borderBottomLeftRadius: Sizes.size130

    },
  });
};

export {styles};
