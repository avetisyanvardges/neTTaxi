import React from 'react';
import {StatusBar, View} from 'react-native';
import MainNavigation from './Navigation';

const Main = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <MainNavigation />
    </View>
  );
};

export default Main;
