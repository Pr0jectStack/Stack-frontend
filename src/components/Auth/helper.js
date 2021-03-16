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
