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
    },
    container1: {
      marginHorizontal: Sizes.size12,
      marginTop: Sizes.size50,
      marginBottom: Sizes.size10,
      width: '95%',
      height: 150,
      borderWidth: Sizes.size1,
      borderColor: theme?.PRIMARY_BORDER_COLOR,
    },
    container2: {
      width: '95%',
      flexDirection: 'column',
      marginHorizontal: Sizes.size12,
      marginTop: Sizes.size50,
      marginBottom: Sizes.size10,
    },
    text: {
      fontFamily: 'BraindGyumri',
      fontSize: 20,
      marginTop: 5,
      color: theme?.PRIMARY_TEXT_COLOR,
    },
  });
};

export {styles};
