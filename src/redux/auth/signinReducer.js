import { SET_USER_LOGIN_DETAILS, SET_USER_DETAILS } from "./authTypes";

const intialLoginDetails = {
  login_details: {},
};

const initialUserDetails = {
  userDetails: {},
};

export const login_details = (state = intialLoginDetails, action) => {
  console.log(JSON.stringify(action.data));
  switch (action.type) {
    case SET_USER_LOGIN_DETAILS:
      return {
        ...state,
        login_details: action.data,
      };
    default:
      return state;
  }
};

export const userDetails = (state = initialUserDetails, action) => {
  switch (action.type) {
    case SET_USER_DETAILS:
      return { ...state, userDetails: action.data };
    default:
      return state;
  }
};
