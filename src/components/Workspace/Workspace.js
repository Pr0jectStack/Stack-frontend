import React,{useEffect} from "react";
import { Redirect,useParams } from "react-router-dom";
import LandingContainer from "../../containers/LandingContainer";
import TeamContainer from "../../containers/TeamContainer";

const Workspace = (props) => {

  const { wid } = useParams();
  const workspaces = props.data.workspaces;
  const userId = props.data._id;

  useEffect(() => {
    props.updateCurrentWorkspace(wid);
  }, [])
  


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
