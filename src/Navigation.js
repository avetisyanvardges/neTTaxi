import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createDrawerNavigator,
  useDrawerProgress,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';

//CLIENT SCREENS
import ActivateScreen from './Client/screens/Activate';
import ActivateDetail from './Client/screens/Activate/ActivateDetail';
import CarMagnetDetail from './Client/screens/Activate/CarMagnetDetail';
import DriverScreen from './Client/screens/Driver';
import HelpScreen from './Client/screens/Help';
import HomeScreen from './Client/screens/Home';
import InfoScreen from './Client/screens/Info';
import LoginScreen from './Client/screens/Login';
import Message from './Client/screens/Message';
import OrderScreen from './Client/screens/Orders';
import RegistrationScreen from './Client/screens/Registration';
import SecurityScreen from './Client/screens/Security';
import SelectTheme from './Client/screens/SelectTheme';
import SettingDetail from './Client/screens/SettingDetail';
import SettingScreen from './Client/screens/Settings';
import Tariffs from './Client/screens/Tarifs';
import Verification from './Client/screens/Verification';
import WalletScreen from './Client/screens/Wallet';
import DrawerMenu from './Client/components/DrawerMenu';
import Theme from './Client/components/Select/Theme';

//DRIVER SCREENS
import CarScreen from './Driver/screens/Car';
import ContactScreen from './Driver/screens/Contact';
import DataScreen from './Driver/screens/Data';
import DDriverScreen from './Driver/screens/Driver';
import DriverHelpScreen from './Driver/screens/Help';
import DriverHomeScreen from './Driver/screens/Home';
import DriverLanguageScreen from './Driver/screens/Language';
import MessageScreen from './Driver/screens/Message';
import PaymentOptionScreen from './Driver/screens/Payment Option';
import RatingScreen from './Driver/screens/Rating';
import ReinforcementsScreen from './Driver/screens/Reinforcements';
import DriverSecurityScreen from './Driver/screens/Security';
import DriverSettingScreen from './Driver/screens/Settings';
import StatisticsScreen from './Driver/screens/Statistics';
import SuggestionsScreen from './Driver/screens/Suggestions';
import DriverWalletScreen from './Driver/screens/Wallet';
import DriverDrawer from './Driver/components/DrawerMenu';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const ClientScreens = ({navigation, style}) => {
  return (
    <Animated.View
      style={StyleSheet.flatten([{flex: 1, overflow: 'hidden'}, style])}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
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
        <Stack.Screen name="Message" component={Message} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="Theme" component={Theme} />
      </Stack.Navigator>
    </Animated.View>
  );
};

const ClientMenu = () => {
  const theme = useSelector(store => store.themes.theme);
  return (
    <Drawer.Navigator
      drawerType="slide"
      overlayColor="transparent"
      drawerContent={props => {
        return <DrawerMenu {...props} />;
      }}
      drawerStyle={{
        flex: 1,
        width: '60%',
        backgroundColor: 'transparent',
      }}
      screenOptions={{
        headerShown: false,
        drawerStyle: {backgroundColor: 'transparent'},
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
      <Stack.Screen name="Car" component={CarScreen} />
      <Stack.Screen name="Driver" component={DDriverScreen} />
      <Stack.Screen name="Statistics" component={StatisticsScreen} />
      <Stack.Screen name="Language" component={DriverLanguageScreen} />
      <Stack.Screen name="Help" component={DriverHelpScreen} />
      <Stack.Screen name="Message" component={MessageScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
      <Stack.Screen name="Payment Option" component={PaymentOptionScreen} />
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
      drawerContent={({progress, ...props}) => {
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
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="Driver" component={DriverMenu} />
        <Stack.Screen name="Client" component={ClientMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
