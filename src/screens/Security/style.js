import {StyleSheet} from 'react-native';
import {Colors, Sizes} from '../../assets/RootStyle';

const styles = theme => {
  return StyleSheet.create({
    underLine: {
      marginHorizontal: Sizes.size15,
      paddingHorizontal: Sizes.size12,
      borderBottomWidth: Sizes.size1,
      borderBottomColor: Colors.borderDefColor,
      marginTop: Sizes.size30,
      marginBottom: Sizes.size10,
    },
  });
};

export {styles};
