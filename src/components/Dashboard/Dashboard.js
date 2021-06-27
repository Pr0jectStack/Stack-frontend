import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import WorkspaceContainer from "../../containers/WorkspaceContainer";
import TeamContainer from "../../containers/TeamContainer";
import TaskContainer from "../../containers/TaskContainer";
import MembersListContainer from "../../containers/MembersListContainer";
import Loading from "../../utils/Loading/Loading";
import { toast } from "react-toastify";

const Dashboard = (props) => {
  const [currentPage, setCurrentPage] = useState("Workspace");
  const [showMembers, setShowMembers] = useState("");

  useEffect(() => {
    props.getUserById(props.data.userData._id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Display a 3s Toast on the top right corner of the screen
   * @param {string} status - SUCCESS/ ERROR
   * @param {string} message - Text for the Toast Body
   */
  const showToast = (status, message) => {
    if (status === "SUCCESS") toast.success(message, { toastId: "success" });
    else toast.error(message, { toastId: "error" });
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
