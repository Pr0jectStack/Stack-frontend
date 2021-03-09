import React from "react";
import { scaleDown as Menu } from "react-burger-menu";
import "./SideBar.css";

const SideBar = () => {
  return (
    <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
      <a id="home" className="menu-item" href="/dashboard">
        <i className="fa fa-folder-o" aria-hidden={true} />
        <span>Workspaces</span>
      </a>
      <a className="menu-item d-sm-block d-md-none" href="/profile">
        <i className="fa fa-user" aria-hidden={true} /> <span>Account</span>
      </a>
      <a className="menu-item d-sm-block d-md-none">
        <i className="fa fa-cog" aria-hidden={true} /> <span>Settings</span>
      </a>
      <a className="menu-item d-sm-block d-md-none">
        <i className="fa fa-sign-out" aria-hidden={true} /> <span>Log Out</span>
      </a>
    </Menu>
  );
};
export default SideBar;
