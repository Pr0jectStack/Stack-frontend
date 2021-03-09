import React from "react";
import Landing from "../../utils/Landing";
import NavBar from "../NavBar/NavBar";

const Dashboard = () => {
  return (
    <div className="mx-auto">
      <NavBar />
      <Landing heading="Workspaces" type="workspace" />
    </div>
  );
};

export default Dashboard;
