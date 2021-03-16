import React from "react";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import Workspace from "../Workspace/Workspace";

const Dashboard = () => {
  return (
    <div className="mx-auto" id="outer-container">
      <main id="page-wrap">
        <Workspace/>
      </main>
    </div>
  );
};

export default Dashboard;
