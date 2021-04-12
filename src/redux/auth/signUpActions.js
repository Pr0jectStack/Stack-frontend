import { API } from "../../backend";
import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,UPDATE_SIGN_UP_DATA } from "./authTypes";

const signUpRequest = () => {
  return {
    type: SIGN_UP_REQUEST,
  };
};

const signUpSuccess = (userData) => {
  return {
    type: SIGN_UP_SUCCESS,
    payload: userData,
  };
};

const signUpFailure = (errorMsg) => {
  return {
    type: SIGN_UP_FAILURE,
    payload: errorMsg,
  };
};
const updateSignUpData = (userData) =>{
  return{
    type: UPDATE_SIGN_UP_DATA,
    payload:userData
  }
}

export const signUpUser = (data) => {
  return (dispatch) => {
    dispatch(signUpRequest());
    fetch(`${API}/auth/signUp`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        const p =response.json();
        p.then(data=>{
          console.log(data);
          if(data.error){
            dispatch(signUpFailure(data.error));
          }
          else{
            dispatch(signUpSuccess(data.message));
          }
        })
        // console.log(p);
        // const userData= response.data;
        // dispatch(signUpSuccess(userData));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(signUpFailure(errorMsg));
      });
  };
};

export const updateSignUpUserData = () =>{
  return (dispatch) =>{
    dispatch(updateSignUpData());
  }
}
