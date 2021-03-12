import { SET_USER_LOGIN_DETAILS, SET_USER_DETAILS } from "../constants";

export const setUserLoginDetails = (data) => {
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

// export const fetchWorkSpaces = (userId, token) => {
//   return (dispatch) => {
//     dispatch(fetchWorkSpacesOfUser)
//     fetch(`${API}/db/getWorkSpaces`, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({userId:userId,token:token}),
//     })
//       .then((res) => {
//         const workspaces= res.json();
//         dispatch()
//       })
//       .catch((err) => {
//         // console.log(err);
//       });
//   };
// };
