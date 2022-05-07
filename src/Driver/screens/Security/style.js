import {StyleSheet} from 'react-native';
import {Sizes, Colors} from '../../../assets/RootStyle';

const styles = theme => {
  return StyleSheet.create({
    container: {
      width: '94%',
      borderBottomWidth: 1,
      borderBottomColor: theme?.PRIMARY_BORDER_COLOR,
      marginTop: 90,
      marginHorizontal: 15,
      padding: 5,
      marginBottom: 85,
    },
    text: {
      fontFamily: 'BraindGyumri',
      fontSize: Sizes.size18_5,
      marginBottom: 34,
      color: theme?.PRIMARY_TEXT_COLOR,
    },
    text2: {
      fontFamily: 'BraindGyumri',
      fontSize: Sizes.size18_5,
      marginLeft: 15,
      marginBottom: 3,
      color: theme?.PRIMARY_TEXT_COLOR,
    },
    ket: {
      flexDirection: 'row',
      maxHeight: 27,
      marginLeft: 20,
      marginBottom: 15,
      flex: 1,
      alignItems: 'center',
    },
  });
};

export {styles};
