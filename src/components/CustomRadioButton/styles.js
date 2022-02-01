import {StyleSheet} from 'react-native';
import {Colors, Sizes} from '../../assets/RootStyle';

const styles = theme => {
  return StyleSheet.create({
    customCheckboxContainer: {
      backgroundColor: Colors.white,
      borderRadius: Sizes.size50,
    },
  });
};

export {styles};
