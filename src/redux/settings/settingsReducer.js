import {
  CHANGE_SETTINGS_FAILURE,
  CHANGE_SETTINGS_REQUEST,
  CHANGE_SETTINGS_SUCCESS,
} from "./setttingsTypes";

const initialState = {
  loading: false,
  changedData: null,
  error: "",
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SETTINGS_REQUEST:
      return {
        ...state,
        loading: true,
        changedData: null,
        error: "",
      };
    case CHANGE_SETTINGS_SUCCESS:
      return {
        ...state,
        loading: false,
        changedData: action.payload,
        error: "",
      };
    case CHANGE_SETTINGS_FAILURE:
      return {
        ...state,
        loading: false,
        changedData: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default settingsReducer;
