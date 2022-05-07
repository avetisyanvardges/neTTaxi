import {combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import ThemeReducer from './reducers/ThemeReducer';
import scaleMenuReducer from './reducers/scaleMenuReducer';
import profileData from './reducers/profileData';

let reducers = combineReducers({
  themes: ThemeReducer,
  scale: scaleMenuReducer,
  profileData: profileData,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

export default store;
