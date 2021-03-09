import React from "react";
import Landing from "../../utils/Landing";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import { Row } from "react-bootstrap";

const Dashboard = () => {
  return (
    <div className="mx-auto" id="outer-container">
      <SideBar />
      <main id="page-wrap">
        <NavBar />
        <Landing heading="Workspaces" type="workspace" />
      </main>
    </div>
  );
};

export default Dashboard;
