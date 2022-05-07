import {StyleSheet} from 'react-native';
import {Sizes, Colors, BackgroundColors} from '../../../assets/RootStyle';

const styles = theme => {
  return StyleSheet.create({
    container: {
      width: '95%',
      flex: 1,
      alignItems: 'center',
      marginTop: 120,
    },
    text: {
      fontSize: 50,
      color: theme?.PRIMARY_BORDER_COLOR,
    },
  });
};

export {styles};
