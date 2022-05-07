import {StyleSheet} from 'react-native';
import {Sizes, Colors} from '../../../assets/RootStyle';

const styles = theme => {
  return StyleSheet.create({
    header: {
      height: Sizes.size190,
      backgroundColor: theme?.PRIMARY_HEADER_COLOR,
    },
    profilePic: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginHorizontal: Sizes.size12,
    },
    userPicture: {
      width: Sizes.size70,
      height: Sizes.size70,
      borderRadius: Sizes.size35,
      borderWidth: 2,
      borderColor: theme?.PRIMARY_BORDER_COLOR,
    },
    user1Picture: {
      width: Sizes.size90,
      height: Sizes.size90,
      borderRadius: Sizes.size45,
      borderWidth: 2,
      borderColor: theme?.PRIMARY_BORDER_COLOR,
    },
    user4Picture: {
      width: Sizes.size60,
      height: Sizes.size60,
      borderRadius: Sizes.size30,
    },
    starStyle: {
      flexDirection: 'row',
      marginTop: Sizes.size10,
    },
    place: {
      bottom: 20,
      position: 'absolute',
      zIndex: 999,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme?.PRIMARY_BORDER_COLOR,
      height: Sizes.size30,
      width: Sizes.size30,
      borderRadius: Sizes.size15,
    },
    sec_place: {
      bottom: 23,
      position: 'absolute',
      zIndex: 999,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      height: Sizes.size20,
      width: Sizes.size20,
      borderRadius: Sizes.size10,
    },
    Drivers: {
      flex: 1,
      paddingHorizontal: Sizes.size15,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
    },
    DriversEnd: {
      flexDirection: 'row',
      alignItems: 'center',
      width: Sizes.size345,
      marginHorizontal: Sizes.size15,
    },
    starSTyle: {
      width: Sizes.size80,
      height: Sizes.size25,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      marginLeft: Sizes.size60,
      marginTop: Sizes.size62,
    },
  });
};

export {styles};
