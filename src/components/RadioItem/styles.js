import {StyleSheet} from 'react-native';
import {Colors, Sizes} from '../../assets/RootStyle';

const styles = theme => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    circle: {
      width: Sizes.size5,
      height: Sizes.size5,
      borderRadius: 50,
      backgroundColor: '#2C2C2C',
      marginRight: Sizes.size8,
    },
    text: {
      fontSize: Sizes.size22,
    },
    titleContainer: {
      width: Sizes.size242,
      flexDirection: 'row',
      alignItems: 'center',
    },
    linkRightContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    linkIcon: {
      marginHorizontal: Sizes.size12,
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
