import React from "react";
import Landing from "../../utils/Landing";
import Loading from "../../utils/Loading/Loading";
const Team = (props) => {
  const workspace =props.workspaceData;
  const profile = props.profileData;

  const openTeams = () =>{
    //TODO:   props.updateCurrentTeam(tid);
    console.log("Teams");
  }
  const goBack = () =>{
    props.setCurrentPage("Workspace");
  }

  if (props.workspaceData.loading) {
    return <Loading/>
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
        openItem={openTeams}
        goBack={goBack}
        ownerId={workspace.currentWorkspace.owner}
        showMembers={props.showMembers}
        setShowMembers={props.setShowMembers}
      />
    </div>
  );
};

export default Team;
