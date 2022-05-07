import {StyleSheet} from 'react-native';
import {Sizes, Colors} from '../../../assets/RootStyle';

const styles = theme => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: '95%',
      borderBottomWidth: Sizes.size1,
      borderBottomColor: theme?.PRIMARY_BORDER_COLOR,
      marginHorizontal: Sizes.size12,
    },
    profilePic: {
      height: Sizes.size130,
      width: Sizes.size130,
      marginBottom: Sizes.size10,
    },
    data: {
      flex: 1,
      marginHorizontal: Sizes.size20,
      top: 30,
    },
    text: {
      fontFamily: 'BraindGyumri',
      color: theme?.PRIMARY_TEXT_COLOR,
      fontSize: 20,
      marginBottom: Sizes.size10,
    },
    container2: {
      maxWidth: Sizes.size35,
      margin: Sizes.size12,
    },
    dollar: {
      width: Sizes.size35,
      height: Sizes.size35,
      borderWidth: Sizes.size1,
      borderRadius: 17.5,
      backgroundColor: theme?.PRIMARY_BORDER_COLOR,
      borderColor: theme?.PRIMARY_BORDER_COLOR,
      marginTop: Sizes.size10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    klor: {
      width: Sizes.size35,
      height: Sizes.size35,
      borderWidth: Sizes.size1,
      borderRadius: 17.5,
      borderColor: theme?.PRIMARY_BORDER_COLOR,
      marginTop: Sizes.size10,
    },
    week: {
      justifyContent: 'center',
      alignItems: 'center',
      width: Sizes.size75,
      height: Sizes.size35,
      backgroundColor: Colors.white,
    },
    day: {
      justifyContent: 'center',
      alignItems: 'center',
      width: Sizes.size75,
      height: Sizes.size35,
      backgroundColor: theme?.PRIMARY_BORDER_COLOR,
    },
    dayT: {
      fontFamily: 'BraindGyumri',
      color: Colors.white,
      fontSize: Sizes.size16,
    },
    weekT: {
      fontFamily: 'BraindGyumri',
      color: theme?.PRIMARY_BORDER_COLOR,
      fontSize: Sizes.size16,
    },
    diagrama: {
      marginTop: Sizes.size32,
      borderBottomWidth: Sizes.size1,
      borderBottomColor: theme?.PRIMARY_BORDER_COLOR,
    },
    di2: {
      marginTop: Sizes.size50,
      borderBottomWidth: Sizes.size1,
      borderBottomColor: theme?.PRIMARY_BORDER_COLOR,
    },
    tver: {
      fontFamily: 'BraindGyumri',
      color: theme?.PRIMARY_TEXT_COLOR,
      fontSize: Sizes.size15,
      marginHorizontal: Sizes.size20,
      justifyContent: 'flex-end',
    },
  });
};

export {styles};
