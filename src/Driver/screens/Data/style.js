import {StyleSheet} from 'react-native';
import {Sizes} from '../../../assets/RootStyle';

const styles = theme => {
  return StyleSheet.create({
    linkRightIcon: {
      justifyContent: 'center',
      width: Sizes.size20,
      height: Sizes.size20,
      borderWidth: Sizes.size1,
      borderColor: theme?.PRIMARY_BUTTON_COLOR[0],
    },
  });
};

export {styles};
