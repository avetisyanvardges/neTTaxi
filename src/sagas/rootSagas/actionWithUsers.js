import {SET_USER_LOCATION} from '../../actionsTypes';
import AsyncStorage from '@react-native-community/async-storage';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import Geolocation from 'react-native-geolocation-service';
import * as Platform from 'react-native';
import {put} from '@redux-saga/core/effects';

function* getUserLocation(data) {
  try {
    if (Platform.OS === 'android') {
      const dataLocation =
        yield RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
          interval: 10000,
          fastInterval: 10000,
        });
      let location = {};
      yield new Promise((resolve, reject) => {
        if (dataLocation === 'enabled' || dataLocation === 'already-enabled') {
          Geolocation.getCurrentPosition(
            position => {
              location = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                longitudeDelta: 0.001,
                latitudeDelta: 0.001,
              };
              resolve(location);
            },
            error => {
              reject(error);
            },
          );
        }
      });
      yield put({type: SET_USER_LOCATION, payload: location});
      if (data.payload?.callBack) {
        data?.payload?.callBack(location);
      }
    } else {
      let location = {};
      yield new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(
          position => {
            location = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              longitudeDelta: 0.001,
              latitudeDelta: 0.001,
            };
            resolve(location);
          },
          error => {
            reject(error);
          },
        );
      });
      yield put({type: SET_USER_LOCATION, payload: location});
      if (data.payload?.callBack) {
        data?.payload?.callBack(location);
      }
    }
  } catch (e) {
    console.log(e.toString(), 'getUserLocation');
  }
}

function* updateLocation(data) {
  try {
    const {location} = data.payload;
    let token = yield AsyncStorage.getItem('token');
    yield axios.post(
      `${apiUrl}/user/location`,
      {location},
      {headers: {'X-authorization': `${token}`}},
    );
  } catch (e) {
    if (e.response.data.message) {
      yield put({
        type: SET_TOAST_MASSAGE,
        payload: {visible: true, type: 'error', text: e.response.data.message},
      });
    } else {
      yield put({
        type: SET_TOAST_MASSAGE,
        payload: {
          visible: true,
          type: 'error',
          text: i18n.t('alerts.something_went_wrong'),
        },
      });
    }

    yield put({type: HIDE_TOAST});
    console.log(e.toString(), 'updateUserData');
  }
}

export {getUserLocation, updateLocation};
