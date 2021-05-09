import React from "react";
import NavBar from "./components/NavBar/NavBar";
import GuestNavBar from "./components/NavBar/GuestNavBar";
import SideBar from "./components/SideBar/SideBar";
import _ from "lodash";

const Navigation = (props) => {
  const { data, signOutUser,signOutData } = props;
  const logOutUser = () => {
    signOutUser();
    // setTimeout(() => {
    //   window.location.reload();
    // }, 1000);
  };
  if(signOutData.signOutSuccess){
     if (typeof window !== undefined) {
            localStorage.clear();
    }
    window.location.reload();
  }
  return (
    <div>
      {data.userData === null ? (
        <GuestNavBar />
      ) : (
        <>
          <SideBar logOutUser={logOutUser} />
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
