import {StyleSheet} from 'react-native';
import {BackgroundColors, Shadow, Sizes} from '../../../assets/RootStyle';

const styles = theme => {
  return StyleSheet.create({
    container: {
      height: '104%',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    mapStyle: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    userLocationButton: {
      position: 'absolute',
      zIndex: 100,
      width: Sizes.size36,
      height: Sizes.size36,
      right: Sizes.size15,
      top: Sizes.size40,
      backgroundColor: BackgroundColors.white,
      borderRadius: Sizes.size20,
      justifyContent: 'center',
      alignItems: 'center',
      ...Shadow,
    },
  });
};

export {styles};
