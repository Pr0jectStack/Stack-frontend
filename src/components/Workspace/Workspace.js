import React from "react";
import { Redirect } from "react-router-dom";
import Landing from "../../utils/Landing";
const Workspace = (props) => {

  const workspaces = props.data.workspaces;
  const userId = props.data._id;

  const openWorkspace = (wid)=>{
    props.updateCurrentWorkspace(wid);
    
  }

  return (
    <div>
      <Landing
        heading="Workspaces"
        type="workspace"
        data={workspaces}
        userId={userId}
        openItem={openWorkspace}
      />
    </div>
  );
};

export default Workspace;
