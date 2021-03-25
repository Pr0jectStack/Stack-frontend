import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./guestProfileTypes";

const initialState = {
  loading: false,
  userData: null,
  error: "",
};

const guestProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
        userData: null,
        error: "",
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.payload,
        error: "",
      };
    case FETCH_USER_FAILURE:
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

export default guestProfileReducer;
