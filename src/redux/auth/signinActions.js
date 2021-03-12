import { SET_USER_LOGIN_DETAILS, SET_USER_DETAILS } from "./authTypes";
export const setUserLoginDetails = (data) => {
    // console.log("ACTION: "+data);
    return {
      type: SET_USER_LOGIN_DETAILS,
      data: data,
    };
  };
  
  export const setUserDetails = (data) => {
    return {
      type: SET_USER_DETAILS,
      data: data,
    };
  };
  