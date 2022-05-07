import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import {BackgroundColors, Fonts, Sizes} from '../../../assets/RootStyle';
import {styles} from './style';
import MapView from 'react-native-maps';
import {CurrentLocationIcon, Dramapanak, MenuIcon} from '../../assets/Icons';
import {mapstyle} from '../../../assets/utils/mapTheme';
import Geolocation from '@react-native-community/geolocation';
import * as Platform from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {GET_USER_LOCATION} from '../../../actionsTypes';
import connect from 'react-redux/lib/connect/connect';
import {makeAction} from '../../../makeAction';

async function requestPermissions() {
  if (Platform.OS === 'ios') {
    Geolocation.requestAuthorization();
    Geolocation.setRNConfiguration({
      skipPermissionRequests: false,
      authorizationLevel: 'whenInUse',
    });
  }

  if (Platform.OS === 'android') {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
  }
}

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 40.7929026,
        longitude: 43.84649710000001,
        latitudeDelta: 0.015,
        longitudeDelta: 0.015,
      },
    };
  }
  componentDidMount() {
    requestPermissions();
    this.bacToUserLocation();
    this.props.makeAction(GET_USER_LOCATION, {
      callBack: userLocation => {
        if (userLocation) {
          this.getCoordinate(userLocation);
        }
      },
    });
  }

  getCoordinate = location => {
    console.log(location, 'LOC');
    if (location?.latitude) {
      this.setState({
        region: {
          ...this.state.region,
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.015,
        },
      });
    }
    // this.props.makeAction(UPDATE_USER_LOCATION, {location: location});
  };

  bacToUserLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position.coords.latitude, position.coords.longitude);
        this.mapRef.animateToRegion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        });
        // Geocoder.from(position.coords.latitude, position.coords.longitude).then(json => {
        //   var addressComponent = json.results[0].address_components[0];
        //   console.log(addressComponent);
        // })
        // .catch(error => console.warn(error));
      },
      error => {
        console.error(error);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };
  onRegionChange = region => {
    this.state.region = region;
    // if (this.timeOut) clearTimeout(this.timeOut)
    // this.timeOut = setTimeout(() => {
    //   this.setState({ region }, async () => {
    //     await this.getZoom()
    //     this.getEvents()
    //   });
    // }, 500)
  };

  render() {
    const {container, content, menuIcon, text, target} = styles();
    const {navigation, buttonColor, theme} = this.props;
    return (
      <View
        style={{
          height: '104%',
        }}>
        <MapView
          ref={ref => (this.mapRef = ref)}
          style={{...StyleSheet.absoluteFill}}
          provider="google"
          showsUserLocation={true}
          showsCompass={false}
          loadingEnabled={true}
          initialRegion={this.state.region}
          maxZoomLevel={19}
          minZoomLevel={3}
          onRegionChange={region => this.onRegionChange(region)}
          customMapStyle={theme?.PRIMARY_MAP_STYLE}
        />
        <View style={container}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: Sizes.size30,
            }}>
            <TouchableOpacity
              style={menuIcon}
              onPress={() => navigation.openDrawer()}>
              <MenuIcon
                IconWidth={Sizes.size34}
                IconHeight={Sizes.size34}
                IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
              />
            </TouchableOpacity>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <View style={content}>
                <Dramapanak
                  IconWidth={Sizes.size20}
                  IconHeight={Sizes.size20}
                  IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                  IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
                />
                <Text style={text}>2000 Դ</Text>
              </View>
            </View>
            <Pressable onPress={this.bacToUserLocation} style={target}>
              <CurrentLocationIcon
                IconWidth={Sizes.size22}
                IconHeight={Sizes.size22}
                IconColorStart={buttonColor?.PRIMARY_BUTTON_COLOR[0]}
                IconColorEnd={buttonColor?.PRIMARY_BUTTON_COLOR[1]}
              />
            </Pressable>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = store => {
  return {
    userLocation: store.profileData.location,
    theme: store.themes.theme,
    buttonColor: store.themes.buttonColor,
  };
};

export default connect(mapStateToProps, {makeAction})(HomeScreen);
