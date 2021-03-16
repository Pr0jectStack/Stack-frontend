import {
  EDIT_USER_PROFILE_REQUEST,
  EDIT_USER_PROFILE_SUCCESS,
  EDIT_USER_PROFILE_FAILURE,
} from "./profileTypes";

const initialState = {
  loading: false,
  userData: null,
  error: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_USER_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        userData: null,
        error: "",
      };
    case EDIT_USER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.payload,
        error: "",
      };
    case EDIT_USER_PROFILE_FAILURE:
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

export default profileReducer;
