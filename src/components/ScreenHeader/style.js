import {StyleSheet} from 'react-native';
import {
  Sizes,
  Shadow,
  BorderStyles,
  Colors,
  BackgroundColors,
} from '../../assets/RootStyle';

const styles = theme => {
  return StyleSheet.create({
    touchableIconContainer: {
      paddingVertical: Sizes.size15,
    },
    iconWidth: {
      width: '100%',
    },
    headerContainer: {
      height: Sizes.size65,
      marginVertical: Sizes.size25,
      flexDirection: 'row',
      backgroundColor: '#F2F2F2',
      borderColor: Colors.borderDefColor,
      borderBottomWidth: 1,
      borderLeftWidth: 0.1,
      borderRightWidth: 0.1,
      borderBottomLeftRadius: Sizes.size20,
      borderBottomRightRadius: Sizes.size20,
    },
    iconContainer: {
      alignItems: 'flex-start',
    },
    titleContainerCenter: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: Sizes.size70,
    },
    titleContainerEnd: {
      justifyContent: 'center',
      alignItems: 'flex-end',
      width: '80%',
      paddingHorizontal: Sizes.size11,
    },
    titleStyle: {
      fontSize: Sizes.size22,
      fontFamily: 'BraindGyumri',
      color: Colors.black,
      fontWeight: '500',
    },
    touchable: {
      backgroundColor: theme?.PRIMARY_TEXT_COLOR_LIGHT,
      borderRadius: BorderStyles.radius.circle,
      top: Sizes.size4,
      width: Sizes.size8,
      height: Sizes.size8,
      alignSelf: 'flex-end',
      right: Sizes.size3,
    },
    count: {
      color: theme?.color?.PRIMARY_COLOR_FAINT,
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
