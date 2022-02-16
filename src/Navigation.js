import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './Client/screens/Home';
import DriverHomeScreen from './Driver/screens/Home';
import LoginScreen from './Client/screens/Login';
import ActivateScreen from './Client/screens/Activate';
import WalletScreen from './Client/screens/Wallet';
import DriverWalletScreen from './Driver/screens/Wallet';
import OrderScreen from './Client/screens/Orders';
import SettingScreen from './Client/screens/Settings';
import DriverSettingScreen from './Driver/screens/Settings';
import HelpScreen from './Client/screens/Help';
import InfoScreen from './Client/screens/Info';
import SecurityScreen from './Client/screens/Security';
import DriverSecurityScreen from './Driver/screens/Security';
import RegistrationScreen from './Client/screens/Registration';
import DriverScreen from './Client/screens/Driver';
import SettingDetail from './Client/screens/SettingDetail';
import ActivateDetail from './Client/screens/Activate/ActivateDetail';
import DrawerMenu from './Client/components/DrawerMenu';
import DriverDrawer from './Driver/components/DrawerMenu';
import SelectTheme from './Client/screens/SelectTheme';
import Theme from './Client/components/Select/Theme';
import Animated from 'react-native-reanimated';
import {StyleSheet} from 'react-native';
import Tariffs from './Client/screens/Tarifs';
import Verification from './Client/screens/Verification';
import CarMagnetDetail from './Client/screens/Activate/CarMagnetDetail';
import ReinforcementsScreen from './Driver/screens/Reinforcements';
import DataScreen from './Driver/screens/Data';
import SuggestionsScreen from './Driver/screens/Suggestions';
import RatingScreen from './Driver/screens/Rating';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const ClientScreens = ({navigation, style}) => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Home'}>
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
  );
};

const ClientMenu = () => {
  return (
    <Drawer.Navigator
      drawerType="slide"
      overlayColor="transparent"
      screenOptions={{headerShown: false}}
      sceneContainerStyle={{backgroundColor: '#F2F2F2'}}
      drawerContent={props => {
        return <DrawerMenu {...props} />;
      }}
      drawerStyle={{
        flex: 1,
        width: '60%',
        backgroundColor: 'transparent',
      }}>
      <Drawer.Screen name={'Screens'}>
        {props => <ClientScreens {...props} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

const DriverScreens = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={DriverHomeScreen} />
      <Stack.Screen name="Reinforcements" component={ReinforcementsScreen} />
      <Stack.Screen name="Wallet" component={DriverWalletScreen} />
      <Stack.Screen name="Data" component={DataScreen} />
      <Stack.Screen name="Settings" component={DriverSettingScreen} />
      <Stack.Screen name="Suggestions" component={SuggestionsScreen} />
      <Stack.Screen name="Security" component={DriverSecurityScreen} />
      <Stack.Screen name="Rating" component={RatingScreen} />
    </Stack.Navigator>
  );
};

const DriverMenu = () => {
  return (
    <Drawer.Navigator
      drawerType="slide"
      overlayColor="transparent"
      screenOptions={{headerShown: false}}
      sceneContainerStyle={{backgroundColor: '#F2F2F2'}}
      drawerContent={props => {
        return <DriverDrawer {...props} />;
      }}
      drawerStyle={{
        flex: 1,
        width: '60%',
        backgroundColor: 'transparent',
      }}>
      <Drawer.Screen name={'Screens'}>
        {props => <DriverScreens {...props} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Driver'}>
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="Client" component={ClientMenu} />
      <Stack.Screen name="Driver" component={DriverMenu} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
const styles = StyleSheet.create({
  stack: {
    flex: 1,
    overflow: 'hidden',
  },
});
