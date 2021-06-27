import React, { useEffect, useState } from "react";
import LandingContainer from "../../containers/LandingContainer";
import Landing from "../../utils/Landing";
import Loading from "../../utils/Loading/Loading";
import { Redirect, useParams } from "react-router-dom";
import MembersListContainer from "../../containers/MembersListContainer";
const Team = (props) => {
  
  const workspace = props.workspaceData;
  const profile = props.profileData;
  const { wid } = useParams();

  const [loading, setLoading] = useState(true);
  const [showMembers, setShowMembers] = useState("");
  useEffect(() => {
    props.getWorkspaceById(wid);
    setLoading(false);
  }, []);

  if (props.workspaceData.loading || loading) {
    return <Loading />;
  } else if (props.workspaceData.error) {
    return <h2>{props.data.error}</h2>;
  } else
    return (
      <div className="mx-auto" id="outer-container">
        {showMembers && (
          <MembersListContainer
            showMembers={showMembers}
            setShowMembers={setShowMembers}
          />
        )}
        <main id="page-wrap">
          <LandingContainer
            heading={workspace.currentWorkspace.name}
            type="team"
            data={workspace.currentWorkspace.teams}
            userId={profile._id}
            ownerId={workspace.currentWorkspace.owner}
            showMembers={showMembers}
            setShowMembers={setShowMembers}
          />
        </main>
      </div>
    );
};

export default Team;
