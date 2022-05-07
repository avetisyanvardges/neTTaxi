import {StyleSheet} from 'react-native';
import {Sizes, Colors} from '../../../assets/RootStyle';

const styles = theme => {
  return StyleSheet.create({
    container: {
      width: '95%',
      marginHorizontal: Sizes.size12,
      borderBottomWidth: Sizes.size1,
      borderBottomColor: theme?.PRIMARY_BORDER_COLOR,
      marginTop: 60,
    },
    view1: {
      width: '95%',
      marginHorizontal: Sizes.size12,
      marginTop: 50,
    },
    view2: {
      width: '95%',
      marginHorizontal: Sizes.size12,
      marginTop: 70,
    },
    border: {
      borderBottomWidth: Sizes.size1,
      borderBottomColor: theme?.PRIMARY_BORDER_COLOR,
    },
    text: {
      fontFamily: 'BraindGyumri',
      color: theme?.PRIMARY_TEXT_COLOR,
      fontSize: 20,
      marginHorizontal: Sizes.size5,
    },
  });
};

export {styles};
