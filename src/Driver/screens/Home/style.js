import {StyleSheet} from 'react-native';
import {Sizes} from '../../../assets/RootStyle';

const styles = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    menuIcon: {
      width: Sizes.size35,
      height: Sizes.size35,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: Sizes.size20,
      left: Sizes.size20,
      borderRadius: Sizes.size10,
    },
  });
};

export {styles};
