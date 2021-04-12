import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,UPDATE_SIGN_UP_DATA } from "./authTypes";

const initialState = {
  loading: false,
  userData: null,
  error: "",
};

export const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return {
        ...state,
        loading: true,
        userData: null,
        error: "",
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.payload,
        error: "",
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        loading: false,
        userData: null,
        error: action.payload,
      };
    case UPDATE_SIGN_UP_DATA:
      return {
        ...state,
        loading:false,
        userData:null,
        error:""
      }
    default:
      return state;
  }
};

export default signUpReducer;
