import {StyleSheet} from 'react-native';
import {BackgroundColors, Colors, Shadow, Sizes} from '../../assets/RootStyle';
import {deviceInfo} from '../../assets/DeviceInfo';

const styles = theme => {
  return StyleSheet.create({
    container: {
      height: '104%',
    },
    locationInput: {
      flex: 1,
      fontSize: Sizes.size18,
      paddingLeft: Sizes.size10,
    },
    routeLocation: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    startOfTheRouteInput: {
      flex: 1,
      fontSize: Sizes.size18,
      paddingLeft: Sizes.size10,
    },
    frequentlyUsedButtons: {
      flexDirection: 'row',
      position: 'absolute',
      zIndex: 100,
      bottom: Sizes.size57,
      left: Sizes.size185,
    },
    endOfTheRouteInput: {
      flex: 1,
      fontSize: Sizes.size18,
      paddingLeft: Sizes.size10,
    },
    classItemContainer: {
      width: Sizes.size150,
      height: deviceInfo.deviceHeight < 822 ? Sizes.size140 : Sizes.size150,
      borderRadius: Sizes.size12,
      marginHorizontal: Sizes.size10,
      marginVertical: Sizes.size15,
      ...Shadow,
    },
    classItemTitle: {
      fontSize: Sizes.size18,
      color: Colors.black,
      marginVertical: Sizes.size11,
    },
    classItemPrice: {
      fontSize: Sizes.size18,
      color: Colors.black,
    },
    classItemImage: {
      width: Sizes.size145,
      height: Sizes.size100,
      marginLeft: Sizes.size23,
    },
    buttonContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      width: Sizes.size45,
      height: Sizes.size45,
      borderWidth: 1,
      borderRadius: 20,
    },
    menuIcon: {
      width: Sizes.size30,
      height: Sizes.size30,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: Sizes.size40,
      left: Sizes.size15,
    },
    randomAddress: {
      width: Sizes.size40,
      height: Sizes.size40,
      borderRadius: Sizes.size22,
      backgroundColor: BackgroundColors.white,
      marginHorizontal: Sizes.size15,
      justifyContent: 'center',
      alignItems: 'center',
      ...Shadow,
    },
    home: {
      width: Sizes.size40,
      height: Sizes.size40,
      borderRadius: Sizes.size22,
      backgroundColor: BackgroundColors.white,
      justifyContent: 'center',
      alignItems: 'center',
      ...Shadow,
    },
    work: {
      width: Sizes.size40,
      height: Sizes.size40,
      borderRadius: Sizes.size22,
      backgroundColor: BackgroundColors.white,
      marginHorizontal: Sizes.size15,
      justifyContent: 'center',
      alignItems: 'center',
      ...Shadow,
    },
    address: {
      position: 'absolute',
      flexDirection: 'row',
      alignItems: 'center',
      zIndex: 100,
      width: Sizes.size292,
      height: Sizes.size37,
      top: Sizes.size82,
      paddingHorizontal: Sizes.size16,
      borderRadius: Sizes.size12,
      backgroundColor: BackgroundColors.white,
      ...Shadow,
    },
  });
};

export {styles};
