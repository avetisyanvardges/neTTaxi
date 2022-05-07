import {StyleSheet} from 'react-native';
import {Colors, Sizes} from '../../../assets/RootStyle';

const styles = theme => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: Sizes.size20,
      paddingHorizontal: Sizes.size3,
      marginHorizontal: Sizes.size25,
      marginTop: Sizes.size26,
      borderBottomColor: Colors.borderDefColor,
      borderBottomWidth: 1,
    },
    circle: {
      width: Sizes.size5,
      height: Sizes.size5,
      borderRadius: 50,
      backgroundColor: '#2C2C2C',
      marginRight: Sizes.size8,
    },
    text: {
      fontSize: Sizes.size20,
      fontFamily: 'BraindGyumri',
    },
    titleContainer: {
      flex: 1,
    },
    linkRightContainer: {
      width: Sizes.size20,
      height: Sizes.size20,
    },
    linkRightIcon: {
      justifyContent: 'center',
    },
    linkStateContainer: {
      alignItems: 'flex-end',
      maxWidth: Sizes.size90,
    },
    linkStateText: {
      fontSize: Sizes.size12,
      color: Colors.silver,
      marginHorizontal: Sizes.size11,
    },
  });
};

export {styles};
