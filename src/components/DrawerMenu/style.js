import {StyleSheet} from 'react-native';
import {Colors, Shadow, Sizes} from '../../assets/RootStyle';
import {deviceInfo} from '../../assets/DeviceInfo';

const styles = theme => {
  return StyleSheet.create({
    profilePic: {
      alignItems: 'center',
      marginTop: Sizes.size27,
    },
    profileInfo: {
      alignItems: 'center',
      marginTop: Sizes.size7,
    },
    starStyle: {
      flexDirection: 'row',
      marginTop: Sizes.size10,
    },
    underLine: {
      width: '100%',
      paddingHorizontal: Sizes.size12,
      borderBottomWidth: Sizes.size1,
      borderBottomColor: Colors.borderDefColor,
      marginHorizontal: Sizes.size12,
      marginTop: deviceInfo.deviceHeight < 822 ? Sizes.size15 : Sizes.size25,
      marginBottom: Sizes.size10,
    },
  });
};

export {styles};
