import {StyleSheet} from 'react-native';
import {Sizes} from '../../../assets/RootStyle';
import {deviceInfo} from '../../../assets/DeviceInfo';

const styles = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR,
    },
    carCount: {
      marginHorizontal: Sizes.size15,
      marginTop: Sizes.size50,
    },
    carCountText: {
      fontFamily: 'BraindGyumri',
      fontSize: Sizes.size18,
      color: theme?.PRIMARY_TEXT_COLOR,
    },
    carCountLinear: {
      width: Sizes.size90,
      height: Sizes.size45,
      borderRadius: Sizes.size10,
      marginTop: Sizes.size10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    carCountBody: {
      width: Sizes.size86,
      height: Sizes.size41,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR,
      margin: Sizes.size2,
      borderRadius: Sizes.size8,
    },
    carCountPicker: {
      width: Sizes.size105,
      paddingHorizontal: Sizes.size40,
      color: theme?.PRIMARY_TEXT_COLOR,
    },
    linearBorderStyle: {
      width: deviceInfo.deviceWidth - Sizes.size30,
      marginTop: Sizes.size20,
      height: Sizes.size50,
      marginHorizontal: Sizes.size15,
      borderRadius: Sizes.size10,
    },
    linearBody: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR,
      margin: Sizes.size2,
      borderRadius: Sizes.size8,
    },
    linearBodyText: {
      flex: 1,
      marginHorizontal: Sizes.size10,
    },
    linearBodyInputContainer: {
      width: Sizes.size45,
      height: Sizes.size46,

      color: theme?.PRIMARY_TEXT_COLOR,
    },
    linearBodyInput: {
      flex: 1,
      fontSize: Sizes.size20,
      textAlign: 'center',
      color: theme?.PRIMARY_TEXT_COLOR,
    },
  });
};

export {styles};
