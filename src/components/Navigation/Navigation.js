import React from "react";
import NavBar from "./components/NavBar/NavBar";
import GuestNavBar from "./components/NavBar/GuestNavBar";
import SideBar from "./components/SideBar/SideBar";
import _ from "lodash";

const Navigation = (props) => {
  const { data, signOutUser } = props;
  const logOutUser = () => {
    signOutUser();
    setTimeout(() => {
      window.location.reload();
    }, 20);
  };
  return (
    <div>
      {data.userData === null ? (
        <GuestNavBar />
      ) : (
        <>
          <SideBar />
          <NavBar
            image={data.userData.image}
            username={data.userData.username}
            logOutUser={logOutUser}
          />
        </>
      )}
    </div>
  );
};

export default Navigation;
