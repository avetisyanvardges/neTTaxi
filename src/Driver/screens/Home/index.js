import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {MenuIcon} from '../../../Client/assets/Icons';
import {BackgroundColors, Sizes} from '../../../assets/RootStyle';
import {styles} from '../../../Client/screens/Home/style';
const {menuIcon, money} = styles();
const DriverHome = ({navigation}) => {
  return (
    <View>
      <View>
        <TouchableOpacity
          style={menuIcon}
          onPress={() => {
            navigation.toggleDrawer();
          }}>
          <MenuIcon
            IconWidth={Sizes.size35}
            IconHeight={Sizes.size35}
            IconColorStart={BackgroundColors.gradientColorStart}
            IconColorEnd={BackgroundColors.gradientColorEnd}
          />
        </TouchableOpacity>
        <View style={money}>
          <Text> 2000</Text>
        </View>
      </View>
    </View>
  );
};

export default DriverHome;
