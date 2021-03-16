import { API } from "../../backend";

export const signInUser = (data) => {
  return fetch(`${API}/auth/signIn`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      // console.log(err);
    });
};

export const signUpUser = (data) => {
  return fetch(`${API}/auth/signUp`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      // console.log(err);
    });
};

export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};

export const checkUserExists = (data) =>{
  return fetch(`${API}/auth/checkUserNameAvailability`,{
    method:"POST",
    headers:{
      Accept:"application/json",
      "Content-Type":"application/json",
    },
    body:JSON.stringify({username:data})
  })
  .then((res)=>{
    return res.json();
  })
  .catch(err=>{

  })
}

export const signOut = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    // localStorage.removeItem("state");

    // next();

    return fetch(`${API}/auth/signout`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        // console.log(err);
      });
  }
};