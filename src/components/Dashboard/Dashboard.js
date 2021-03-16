import React from "react";
import Workspace from "../Workspace/Workspace";
import {Redirect} from 'react-router-dom';
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
      <main id="page-wrap">
        <Workspace/>
      </main>
    </div>
  );
};

export default Dashboard;
