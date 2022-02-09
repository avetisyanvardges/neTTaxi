import React, {Component, useState} from 'react';
import {
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import MapView from 'react-native-maps';
import {mapstyle} from '../../../assets/utils/mapTheme';
import {ChooseLocation, UserStart} from '../../assets/Icons';
import {makeAction} from '../../../makeAction';
import {styles} from './style';
import {BackgroundColors, Sizes} from '../../../assets/RootStyle';
import {GET_USER_LOCATION, UPDATE_USER_LOCATION} from '../../../actionsTypes';
import {connect} from 'react-redux';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';
const GOOGLE_MAPS_APIKEY = 'AIzaSyAY3HFR0nM8oauEUaoiNmTNLWVWdDrYzVw';
Geocoder.init('AIzaSyAY3HFR0nM8oauEUaoiNmTNLWVWdDrYzVw', {language: 'am'});
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

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 40.7929026,
        longitude: 43.84649710000001,
        latitudeDelta: 0.015,
        longitudeDelta: 0.015,
      },
      page: 1,
      scrollEnabled: true,
      loadingMore: false,
      searchQuery: '',
      offset: 500,
      filtersData: {},
      zoom: 3,
    };
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
  getZoom = async () => {
    const coords = await this.mapRef.getCamera();
    const zoom = Math.round(coords.zoom);
    this.state.zoom = zoom;
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
    const {userLocationButton, container, mapStyle} = styles();

    const mapHeader = () => {
      return (
        <>
          <TouchableOpacity
            style={userLocationButton}
            onPress={this.bacToUserLocation}>
            <ChooseLocation
              IconWidth={Sizes.size18}
              IconHeight={Sizes.size18}
              IconColorStart={BackgroundColors.gradientColorStart}
              IconColorEnd={BackgroundColors.gradientColorEnd}
            />
          </TouchableOpacity>
        </>
      );
    };

    return (
      <View style={container}>
        <MapView
          ref={ref => (this.mapRef = ref)}
          style={mapStyle}
          provider="google"
          showsUserLocation={true}
          showsCompass={false}
          loadingEnabled={true}
          initialRegion={this.state.region}
          maxZoomLevel={19}
          minZoomLevel={3}
          onRegionChange={region => this.onRegionChange(region)}
          customMapStyle={mapstyle}
        />
        {mapHeader()}
      </View>
    );
  }
}
const mapStateToProps = store => {
  return {
    userLocation: store.profileData.location,
  };
};

export default connect(mapStateToProps, {makeAction})(Map);
