import React from "react";
import Landing from "../../utils/Landing";
const Team = (props) => {
  const workspace =props.workspaceData;
  const profile = props.profileData;

  if (props.workspaceData.loading) {
    return <h2> Loading...</h2>;
  } else if (props.workspaceData.error) {
    return <h2>{props.data.error}</h2>;
  } else
  return (
    <div>
      <Landing
        heading={workspace.currentWorkspace.name}
        type="team"
        data={workspace.currentWorkspace.teams}
        userId={profile._id}
      />
    </div>
  );
};

export default Team;
