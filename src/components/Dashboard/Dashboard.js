import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import WorkspaceContainer from "../../containers/WorkspaceContainer";
import GuestProfileContainer from "../../containers/GuestProfileContainer";
import TeamContainer from "../../containers/TeamContainer";
import TaskContainer from "../../containers/TaskContainer";
import MembersList from "../../utils/MembersList";
import MembersListContainer from "../../containers/MembersListContainer";
import Loading from "../../utils/Loading/Loading";
import { toast } from "react-toastify";

const Dashboard = (props) => {
  const [currentPage, setCurrentPage] = useState("Workspace");
  const [showMembers, setShowMembers] = useState("");

  /**
   * Display a 3s Toast on the top right corner of the screen
   * @param {string} status - SUCCESS/ ERROR
   * @param {string} message - Text for the Toast Body
   */
  const showToast = (status, message) => {
    if (status == "SUCCESS") toast.success(message);
    else toast.error(message);
  };

  if (props.data.error) {
    showToast("ERROR", props.data.error);
  }

  if (props.data.loading) {
    return <Loading />;
  } else if (props.data && props.data.userData === null) {
    return <Redirect to="/" />;
  } else
    return (
      <div className="mx-auto" id="outer-container">
        <GuestProfileContainer
          isOpen={false}
          userId={props.data.userData._id}
        />
        {showMembers && (
          <MembersListContainer
            showMembers={showMembers}
            setShowMembers={setShowMembers}
          />
        )}
        <main id="page-wrap">
          {currentPage === "Workspace" && (
            <WorkspaceContainer
              setCurrentPage={setCurrentPage}
              showMembers={showMembers}
              setShowMembers={setShowMembers}
            />
          )}
          {currentPage === "Team" && (
            <TeamContainer
              setCurrentPage={setCurrentPage}
              showMembers={showMembers}
              setShowMembers={setShowMembers}
            />
          )}
          {currentPage === "Task" && (
            <TaskContainer setCurrentPage={setCurrentPage} />
          )}
        </main>
      </div>
    );
};

export default Dashboard;
