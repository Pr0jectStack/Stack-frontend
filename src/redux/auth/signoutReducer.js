import { SIGN_OUT_REQUEST, SIGN_OUT_SUCCESS, SIGN_OUT_FAILURE } from "./authTypes";

const initialState = {
  loading: false,
  userData: null,
  error: "",
};

const signoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_OUT_REQUEST:
      return {
        ...state,
        loading: true,
        userData: null,
        error: "",
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        loading: false,
        userData:null,
        error: "",
      };
    case SIGN_OUT_FAILURE:
      return {
        ...state,
        loading: false,
        userData: null,
        error: action.payload,
      };
    
    default:
      return state;
  }
};

export default signoutReducer;
