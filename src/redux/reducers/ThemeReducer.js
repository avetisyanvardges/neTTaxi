import {
  DarkTheme,
  LightTheme,
  womanButton,
  manButton,
} from '../../assets/utils/theme';
import {
  DARK_THEME,
  LIGHT_THEME,
  MAN_BUTTON_COLOR,
  WOMAN_BUTTON_COLOR,
} from '../../actionsTypes';

const initialState = {
  theme: {...LightTheme},
  buttonColor: {...womanButton},
};
export default (state = initialState, action) => {
  switch (action.type) {
    case DARK_THEME:
      return {
        ...state,
        theme: {...DarkTheme},
        buttonColor: {...manButton},
      };
    case LIGHT_THEME:
      return {
        ...state,
        theme: {...LightTheme},
        buttonColor: {...womanButton},
      };
    case WOMAN_BUTTON_COLOR:
      return {
        ...state,
        buttonColor: {...womanButton},
      };
    case MAN_BUTTON_COLOR:
      return {
        ...state,
        buttonColor: {...manButton},
      };
    default:
      return state;
  }
};
