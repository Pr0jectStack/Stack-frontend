import React from "react";
import Workspace from "../Workspace/Workspace";
import { Redirect } from "react-router-dom";
import WorkspaceContainer from "../../containers/WorkspaceContainer";
import GuestProfileContainer from "../../containers/GuestProfileContainer";

const Dashboard = (props) => {
  if (props.data.loading) {
    return <h2> Loading...</h2>;
  } else if (props.data.error) {
    return <h2>{props.data.error}</h2>;
  } else if (props.data && props.data.userData === null) {
    return <Redirect to="/" />;
  } else
    return (
      <div className="mx-auto" id="outer-container">
        <GuestProfileContainer isOpen={false} userId={props.data.userData._id} />
        <main id="page-wrap">
          <WorkspaceContainer />
        </main>
      </div>
    );
};

export default Dashboard;
