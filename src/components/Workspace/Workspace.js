import React from "react";
import Landing from "../../utils/Landing";
const Workspace = (props) => {
  const workspaces = props.data.workspaces;
  const userId = props.data._id;
  return (
    <div>
      <Landing
        heading="Workspaces"
        type="workspace"
        data={workspaces}
        userId={userId}
      />
    </div>
  );
};

export default Workspace;
