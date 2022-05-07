import {StyleSheet} from 'react-native';
import {Sizes, Colors} from '../../../assets/RootStyle';

const styles = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: Sizes.size15,
    },
    content: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: Sizes.size132,
      height: Sizes.size44,
      backgroundColor: 'white',
      borderRadius: 7,
      padding: 10,
    },
    menuIcon: {
      width: Sizes.size35,
      height: Sizes.size35,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: Sizes.size10,
    },
    text: {
      fontFamily: 'BraindGyumri',
      marginLeft: 42,
    },
    target: {
      width: 44,
      height: 44,
      borderRadius: 22,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

export {styles};
