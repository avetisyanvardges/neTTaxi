import {StyleSheet} from 'react-native';
import {Colors, Sizes} from '../../assets/RootStyle';

const styles = theme => {
  return StyleSheet.create({
    container: {
      marginHorizontal: Sizes.size29,
      marginVertical: Sizes.size13,
      borderBottomWidth: 1,
      borderBottomColor: Colors.borderDefColor,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: Sizes.size11,
    },
    text: {
      fontSize: Sizes.size18,
      marginLeft: Sizes.size16,
    },
  });
};

export {styles};
