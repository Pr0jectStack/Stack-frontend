import React,{useState} from "react";
import { Redirect } from "react-router-dom";
import WorkspaceContainer from "../../containers/WorkspaceContainer";
import GuestProfileContainer from "../../containers/GuestProfileContainer";
import TeamContainer from "../../containers/TeamContainer";
import MembersList from "../../utils/MembersList";
import MembersListContainer from "../../containers/MembersListContainer";

const Dashboard = (props) => {

  const [currentPage, setCurrentPage] = useState("Workspace");
  const [showMembers, setShowMembers] = useState("");

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
        {showMembers && <MembersListContainer showMembers={showMembers} setShowMembers={setShowMembers}/>}
        <main id="page-wrap">
          {currentPage === "Workspace" && <WorkspaceContainer setCurrentPage={setCurrentPage} showMembers={showMembers} setShowMembers={setShowMembers}/>}
          {currentPage === "Team" && <TeamContainer setCurrentPage={setCurrentPage} showMembers={showMembers} setShowMembers={setShowMembers} />}
        </main>
      </div>
    );
};

export default Dashboard;
