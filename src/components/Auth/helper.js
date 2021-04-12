import { API } from "../../backend";

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

export const checkUserExists = (data) => {
  return fetch(`${API}/auth/checkUserNameAvailability`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: data }),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {});
};

export const activateUserEmail = (token) => {
  return fetch(`${API}/auth/email-verify?token=${token}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      // console.log(err);
    });
};

export const resetUserPassword = (data) => {
  return fetch(`${API}/auth/resetPassword`, {
    method: "PUT",
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
