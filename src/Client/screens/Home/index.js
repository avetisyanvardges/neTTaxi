import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Platform,
  TextInput,
  Pressable,
} from 'react-native';
import {useDrawerStatus} from '@react-navigation/drawer';
import {
  BackgroundColors,
  Colors,
  Fonts,
  IconsStyles,
  Shadow,
  Sizes,
} from '../../../assets/RootStyle';
import {styles} from './style';
import {
  MenuIcon,
  HomeIcon,
  Work,
  RandomAddress,
  ArrowLeft,
  UserStart,
} from '../../assets/Icons';
import Map from '../Map';
import {LinearButton} from '../../components/LinearButton';
import LinearGradient from 'react-native-linear-gradient';
import i18n from 'i18next';
import {deviceInfo} from '../../../assets/DeviceInfo';
import {useSelector} from 'react-redux';

const Home = ({navigation}) => {
  const buttonColor = useSelector(store => store.themes.buttonColor);
  const [buttonSize, setButtonSize] = useState('small');
  const [order, setOrder] = useState(false);
  const [userLocation, setUserLOcation] = useState({
    userLocationStart: 'Սկզբնակետ',
    userLocationEnd: 'Նշեք վերջնակետը',
  });
  // React.useEffect(() => {
  //   const unsubscribe = navigation.addListener('drawerClose', e => {
  //     console.log(e, 7777);
  //   });
  //
  //   return unsubscribe;
  // }, [navigation]);

  const isOpen = useDrawerStatus() === 'open';
  const {
    container,
    routeLocation,
    startOfTheRouteInput,
    endOfTheRouteInput,
    frequentlyUsedButtons,
    locationInput,
    menuIcon,
    classItemContainer,
    classItemTitle,
    randomAddress,
    home,
    work,
    address,
    classItemPrice,
    classItemImage,
  } = styles();
  // ------------------------ CAR CLASSES DATA -------------------------
  const DATA = [
    {
      id: 0,
      title: 'Էկոնոմ',
      price: '300դր',
      img: require('../../assets/images/car.png'),
    },
    {
      id: 1,
      title: 'Կոմֆորտ',
      price: '400դր',
      img: require('../../assets/images/car.png'),
    },
    {
      id: 2,
      title: 'Կոմֆորտ +',
      price: '600դր',
      img: require('../../assets/images/car.png'),
    },
  ];
  //--------------------- CAR CLASSES ITEM -------------------------
  const Item = ({title, price, img}) => (
    <Pressable style={classItemContainer}>
      <LinearGradient
        start={{x: 0, y: 0.5}}
        end={{x: 1.3, y: 0.5}}
        colors={['#FFFFFF', buttonColor?.PRIMARY_BUTTON_COLOR[0]]}
        style={{borderRadius: Sizes.size12}}>
        <View style={{marginLeft: Sizes.size20}}>
          <Text style={classItemTitle}>{title}</Text>
          <Text style={classItemPrice}>{price}</Text>
        </View>

        <Image source={img} style={classItemImage} />
      </LinearGradient>
    </Pressable>
  );
  // --------------------- CAR CLASSES RENDER ITEM ---------------------
  const renderItem = ({item}) => (
    <Item title={item.title} price={item.price} img={item.img} />
  );
  return (
    <>
      <View style={[container]}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          {/*---------------- ADDRESS --------------- */}
          {!order ? (
            <View style={address}>
              <UserStart
                IconWidth={Sizes.size18}
                IconHeight={Sizes.size18}
                IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
              />
              <TextInput
                placeholder="12/1"
                style={locationInput}
                value={userLocation.userLocationStart}
              />
            </View>
          ) : (
            <View
              style={[
                address,
                {
                  height: Sizes.size92,
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                },
              ]}>
              <View style={routeLocation}>
                <UserStart
                  IconWidth={Sizes.size18}
                  IconHeight={Sizes.size18}
                  IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                  IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
                />
                <TextInput
                  style={startOfTheRouteInput}
                  value={userLocation.userLocationStart}
                />
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <UserStart
                  IconWidth={Sizes.size18}
                  IconHeight={Sizes.size18}
                  IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                  IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
                />
                <TextInput
                  placeholder={userLocation.userLocationEnd}
                  style={endOfTheRouteInput}
                />
              </View>
            </View>
          )}

          {/* ---------------- MAP -------------------- */}
          <Map />

          {/*------------------- ORDER BUTTON --------------- */}
          <View
            style={{
              position: 'absolute',
              bottom:
                deviceInfo.deviceHeight < 822 ? Sizes.size55 : Sizes.size50,
              left: Sizes.size25,
              zIndex: 100,
            }}>
            <View>
              <LinearButton
                startColor={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                endColor={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
                title={i18n.t('texts.order')}
                size={buttonSize}
                onPress={() => {
                  setButtonSize('big');
                  setOrder(true);
                }}
              />
            </View>
          </View>
          {!order ? (
            <>
              {/*------------------- ORDER TYPE -------------------  */}
              <TouchableOpacity
                style={menuIcon}
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <MenuIcon
                  IconWidth={Sizes.size35}
                  IconHeight={Sizes.size35}
                  IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                  IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
                />
              </TouchableOpacity>
              <View style={frequentlyUsedButtons}>
                <TouchableOpacity style={randomAddress}>
                  <RandomAddress
                    IconWidth={Sizes.size22}
                    IconHeight={Sizes.size22}
                    IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                    IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={home}>
                  <HomeIcon
                    IconWidth={Sizes.size22}
                    IconHeight={Sizes.size22}
                    IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                    IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={work}>
                  <Work
                    IconWidth={Sizes.size22}
                    IconHeight={Sizes.size22}
                    IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                    IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
                  />
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <>
              {/* ------------------- CAR CLASSES ------------------------- */}
              <TouchableOpacity
                style={menuIcon}
                onPress={() => {
                  setButtonSize('small');
                  setOrder(false);
                }}>
                <ArrowLeft
                  IconWidth={IconsStyles.medium}
                  IconHeight={IconsStyles.medium}
                  IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                  IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
                />
              </TouchableOpacity>
              <View style={{position: 'absolute', bottom: Sizes.size100}}>
                <FlatList
                  data={DATA}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  horizontal={true}
                  contentContainerStyle={{
                    alignItems: 'center',
                  }}
                  decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
                  renderToHardwareTextureAndroid
                  snapToAlignment="start"
                  bounces={false}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            </>
          )}
        </View>
      </View>
    </>
  );
};

export default Home;
