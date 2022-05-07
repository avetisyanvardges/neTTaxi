import {StyleSheet} from 'react-native';
import {Sizes, Colors} from '../../../assets/RootStyle';

const styles = theme => {
  return StyleSheet.create({
    container: {
      width: '95%',
      borderBottomWidth: Sizes.size1,
      borderBottomColor: theme?.PRIMARY_BORDER_COLOR,
      marginHorizontal: Sizes.size12,
      marginTop: Sizes.size15,
      marginBottom: Sizes.size10,
      flexDirection: 'row',
    },
    container1: {
      width: '95%',
      borderBottomWidth: Sizes.size1,
      borderBottomColor: theme?.PRIMARY_BORDER_COLOR,
      marginHorizontal: Sizes.size12,
      marginBottom: Sizes.size10,
      flexDirection: 'row',
    },
    drawer: {
      width: 410,
      marginBottom: 5,
    },
  });
};

export {styles};
