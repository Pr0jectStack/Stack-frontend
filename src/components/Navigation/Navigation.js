import React from "react";
import NavBar from "../NavBar/NavBar";
import GuestNavBar from "../NavBar/GuestNavBar";
import _ from "lodash";
import { Redirect } from "react-router-dom";
const Navigation = (props) => {
  const { data, signOutUser } = props;
  const logOutUser = () => {
    signOutUser();
    setTimeout(() => {
      window.location.reload();
    }, 20);
    //
  };
  return (
    <div>
      {data.userData === null ? (
        <GuestNavBar />
      ) : (
        <NavBar username={data.userData.username} logOutUser={logOutUser} />
      )}
    </div>
  );
};

export default Navigation;
