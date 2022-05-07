import {StyleSheet} from 'react-native';
import {Sizes, Colors} from '../../../assets/RootStyle';

const styles = theme => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: '95%',
      borderBottomWidth: Sizes.size1,
      borderBottomColor: Colors.borderCol,
      marginHorizontal: Sizes.size12,
      marginTop: 35,
    },
    text: {
      fontSize: 20,
      marginHorizontal: Sizes.size12,
      marginBottom: 20,
    },
  });
};

export {styles};
