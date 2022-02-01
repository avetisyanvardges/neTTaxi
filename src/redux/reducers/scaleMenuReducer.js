import {
    SCALE_MENU
  } from '../../actionsTypes';
import Animated from 'react-native-reanimated';
  
  const initialState = {
    scale: new Animated.Value(0),
  };
  export default (state = initialState, action) => {
    switch (action.type) {
      case SCALE_MENU:
        return {
          ...state,
          scale: action.payload,
        };
      default:
        return state;
    }
  };