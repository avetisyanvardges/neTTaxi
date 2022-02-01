import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import ActivateScreen from './screens/Activate';
import WalletScreen from './screens/Wallet';
import OrderScreen from './screens/Orders';
import SettingScreen from './screens/Settings';
import HelpScreen from './screens/Help';
import InfoScreen from './screens/Info';
import SecurityScreen from './screens/Security';
import RegistrationScreen from './screens/Registration';
import DriverScreen from './screens/Driver';
import SettingDetail from './screens/SettingDetail';
import ActivateDetail from './screens/Activate/ActivateDetail';
import DrawerMenu from './components/DrawerMenu';
import SelectTheme from './screens/SelectTheme';
import Theme from './components/Select/Theme';
import Animated from 'react-native-reanimated';
import {StyleSheet} from 'react-native';
import Tariffs from './screens/Tarifs';
import Verification from './screens/Verification';
import CarMagnetDetail from './screens/Activate/CarMagnetDetail';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Screens = ({navigation, style}) => {
  return (
    <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'SelectTheme'}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SettingDetail" component={SettingDetail} />
        <Stack.Screen name="ActivateDetail" component={ActivateDetail} />
        <Stack.Screen name="Activations" component={ActivateScreen} />
        <Stack.Screen name="CarMagnetDetail" component={CarMagnetDetail} />
        <Stack.Screen name="Wallet" component={WalletScreen} />
        <Stack.Screen name="Orders" component={OrderScreen} />
        <Stack.Screen name="Settings" component={SettingScreen} />
        <Stack.Screen name="Help" component={HelpScreen} />
        <Stack.Screen name="Info" component={InfoScreen} />
        <Stack.Screen name="Security" component={SecurityScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Driver" component={DriverScreen} />
        <Stack.Screen name="SelectTheme" component={SelectTheme} />
        <Stack.Screen name="Tariffs" component={Tariffs} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="Theme" component={Theme} />
      </Stack.Navigator>
    </Animated.View>
  );
};

const AppDrawer = () => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.9],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 20],
  });
  console.log(scale, borderRadius, 111111);
  const animatedStyle = {borderRadius, transform: [{scale}]};
  return (
    <Drawer.Navigator
      drawerType="slide"
      overlayColor="transparent"
      screenOptions={{headerShown: false}}
      drawerContentOptions={{
        activeBackgroundColor: 'transparent',
        activeTintColor: 'green',
        inactiveTintColor: 'green',
        contentContainerStyle: {flex: 1},
      }}
      sceneContainerStyle={{backgroundColor: '#F2F2F2'}}
      drawerContent={props => {
        setProgress(props.progress);
        return <DrawerMenu {...props} />;
      }}
      drawerStyle={{
        flex: 1,
        width: '60%',
        backgroundColor: 'transparent',
      }}>
      <Drawer.Screen name={'Screens'}>
        {props => <Screens {...props} style={animatedStyle} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default AppDrawer;
const styles = StyleSheet.create({
  stack: {
    flex: 1,
    overflow: 'hidden',
  },
});
