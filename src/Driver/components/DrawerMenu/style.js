import {StyleSheet} from 'react-native';
import {Colors, Sizes} from '../../../assets/RootStyle';

const styles = theme => {
  return StyleSheet.create({
    profilePic: {
      alignItems: 'center',
      marginTop: Sizes.size27,
      borderRadius: Sizes.size20,
    },
    profileInfo: {
      alignItems: 'center',
      marginTop: Sizes.size7,
    },
    starStyle: {
      flexDirection: 'row',
      marginTop: Sizes.size10,
    },
    underLine: {
      width: '100%',
      paddingHorizontal: Sizes.size12,
      borderBottomWidth: Sizes.size1,
      borderBottomColor: Colors.silver,
      marginHorizontal: Sizes.size12,
      marginTop: Sizes.size25,
      marginBottom: Sizes.size10,
    },
  });
};

export {styles};
