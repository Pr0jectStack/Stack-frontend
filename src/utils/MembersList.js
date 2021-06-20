import React from "react";
import { push as Menu } from "react-burger-menu";
import Loading from "./Loading/Loading";
const MembersList = (props) => {
  let {
    type,
    workspaceData,
    teamData,
    owner = "",
    teamLeader = "",
    showMembers,
    setShowMembers,
  } = props;

  const handleOnClose = () => {
    setShowMembers("");
  };

  owner =
    workspaceData.currentWorkspace && workspaceData.currentWorkspace.owner;
  teamLeader = teamData.currentTeam && teamData.currentTeam.teamLeader;
  return (
    <Menu
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
      right
      isOpen={showMembers}
      onClose={handleOnClose}
      customBurgerIcon={false}
      className=""
      width={"320px"}
    >
      {(showMembers === "workspace" && workspaceData.loading) ||
      (showMembers === "team" && teamData.loading) ? (
        <Loading />
      ) : (
        <div className="text-white">
          <h2>Members</h2>
          <hr />
          <span style={{ marginTop: "10%" }}>
            {showMembers === "workspace" &&
              workspaceData.currentWorkspace.members.map((member) => {
                return (
                  <p>
                    <i class="fa fa-user" aria-hidden="true"></i>
                    {"  "}
                    {member.username}
                    <small style={{ float: "right" }}>
                      {member._id === owner ? (
                        <span style={{ color: "orange" }}> owner</span>
                      ) : (
                        "member"
                      )}
                    </small>
                  </p>
                );
              })}
            {showMembers === "team" &&
              teamData.currentTeam.members.map((member) => {
                return (
                  <p>
                    <i class="fa fa-user" aria-hidden="true"></i>
                    {"  "}
                    {member.username}
                    <small style={{ float: "right" }}>
                      {member._id === owner ? (
                        <span style={{ color: "orange" }}> owner</span>
                      ) : member._id === teamLeader ? (
                        <span style={{ color: "yellow" }}> TL</span>
                      ) : (
                        "member"
                      )}
                    </small>
                  </p>
                );
              })}
          </span>
        </div>
      )}
    </Menu>
  );
};

export default MembersList;
