import {takeLatest, all} from 'redux-saga/effects';
import {getUserLocation, updateLocation} from './rootSagas/actionWithUsers';
import {GET_USER_LOCATION, UPDATE_USER_LOCATION} from '../actionsTypes';

function* actionWatcher() {
  yield takeLatest(GET_USER_LOCATION, getUserLocation);
  yield takeLatest(UPDATE_USER_LOCATION, updateLocation);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
