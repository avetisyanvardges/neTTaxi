import {SET_USER_LOCATION} from '../../actionsTypes';

const INITIAL_STATE = {
  location: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER_LOCATION: {
      return {
        ...state,
        location: action.payload,
      };
    }
    default:
      return state;
  }
};
