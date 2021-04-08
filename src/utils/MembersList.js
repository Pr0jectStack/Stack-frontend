import React,{useState} from "react";
import { push as Menu } from "react-burger-menu";
const MembersList = (props) => {
  
  const { type, workspaceData, owner = "", teamLeader = "",showMembers,setShowMembers } = props;
  
  
  

  const handleOnClose = () => {
    setShowMembers("");
  };
  if (workspaceData.loading) {
    return <></>
    // return <h1>Loading...</h1>
  } else {
    const owner = workspaceData.currentWorkspace.owner;
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
      <div className="text-white">
        <h2>Members</h2>
        <hr/>
        <span style={{marginTop:"10%"}}>
        {showMembers === "workspace" && workspaceData.currentWorkspace.members.map((member) => {
          return (
            <p>
              <i class="fa fa-user" aria-hidden="true"></i>{'  '}
              {member.username} 
              <small style={{float:"right"}}>{member._id == owner
                ? <span style={{color:"orange"}}>  owner</span>
                : member.id == teamLeader
                ? "TL"
                : "member"}
              
              </small>
            </p>
          );
        })}
        </span>
      </div>
      </Menu>
    );
  }
};

export default MembersList;
