import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import LandingContainer from "../../containers/LandingContainer";

const Workspace = (props) => {
  const { wid } = useParams();
  const workspaces = props.data.workspaces;
  const userId = props.data._id;

  useEffect(() => {
    if (wid) {
      props.getWorkspaceById(wid);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <LandingContainer
        heading="Workspaces"
        type="workspace"
        data={workspaces}
        userId={userId}
        showMembers={props.showMembers}
        setShowMembers={props.setShowMembers}
      />
    </div>
  );
};

export default Workspace;
