import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
  EMPTY_SIGN_IN_ERROR,
} from "./authTypes";

const initialState = {
  loading: false,
  userData: null,
  error: "",
};

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return {
        ...state,
        loading: true,
        userData: null,
        error: "",
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.payload,
        error: "",
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        loading: false,
        userData: null,
        error: action.payload,
      };
    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        userData: null,
        error: null,
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.payload,
        error: null,
      };
    case RESET_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        userData: null,
        error: action.payload,
      };

    case EMPTY_SIGN_IN_ERROR:
      return {
        ...state,
        loading: false,
        userData: null,
        error: "",
      };

    default:
      return state;
  }
};

export default signInReducer;
