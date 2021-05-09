import { SIGN_OUT_REQUEST, SIGN_OUT_SUCCESS, SIGN_OUT_FAILURE,SIGN_IN_REQUEST } from "./authTypes";

const initialState = {
  loading: false,
  userData: null,
  error: "",
  signOutSuccess:false
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
        signOutSuccess:true
      };
    case SIGN_OUT_FAILURE:
      return {
        ...state,
        loading: false,
        userData: null,
        error: action.payload,
      };
    case SIGN_IN_REQUEST:
      return {
          ...state,
        signOutSuccess:false
      };
    
    default:
      return state;
  }
};

export default signoutReducer;
