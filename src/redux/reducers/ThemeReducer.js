import {
  manThemeDark,
  manThemeLight,
  womanThemeDark,
  womanThemeLight,
} from '../../assets/utils/theme';
import {
  MAN_THEME_LIGHT,
  WOMAN_THEME_LIGHT,
  MAN_THEME_DARK,
  WOMAN_THEME_DARK,
} from '../../actionsTypes';

const initialState = {
  theme: {...manThemeLight},
};
export default (state = initialState, action) => {
  switch (action.type) {
    case MAN_THEME_LIGHT:
      return {
        ...state,
        theme: {...manThemeLight},
      };
    case WOMAN_THEME_LIGHT:
      return {
        ...state,
        theme: {...womanThemeLight},
      };
    case MAN_THEME_DARK:
      return {
        ...state,
        theme: {...manThemeDark},
      };
    case WOMAN_THEME_DARK:
      return {
        ...state,
        theme: {...womanThemeDark},
      };
    default:
      return state;
  }
};
