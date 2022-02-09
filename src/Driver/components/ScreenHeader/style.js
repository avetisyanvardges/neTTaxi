import {StyleSheet} from 'react-native';
import {Sizes} from '../../../assets/RootStyle';

const styles = theme => {
  return StyleSheet.create({
    touchableIconContainer: {
      paddingVertical: Sizes.size10,
    },
    iconWidth: {
      width: '100%',
    },
    headerContainer: {
      flexDirection: 'row',
    },
    iconContainer: {
      alignItems: 'center',
    },
    titleContainerCenter: {
      justifyContent: 'center',
      alignItems: 'center',
      right: 30,
      bottom: 5,
      flex: 1,
      paddingRight: Sizes.size29,
    },
    titleContainerEnd: {
      justifyContent: 'center',
      alignItems: 'flex-end',
      width: '80%',
      paddingHorizontal: Sizes.size11,
    },
    titleStyle: {
      fontSize: Sizes.size16,
      fontWeight: '500',
    },
    touchable: {
      borderRadius: Sizes.size25,
      top: Sizes.size4,
      width: Sizes.size8,
      height: Sizes.size8,
      alignSelf: 'flex-end',
      right: Sizes.size3,
    },
    count: {
      fontSize: Sizes.size8,
      textAlign: 'center',
    },
    counterContainer: {
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
  });
};
export {styles};
