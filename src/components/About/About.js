import React from "react";
import "./About.css";
import Developers from "./Developers";
const About = () => {
  return (
    <div>
      <header>
        <a name="home"></a>
        <div className="container-fluid">
          <div className="more-space row">
            <div className="col-md-12">
              <div className="text-center intro ">
                <h1 className="text-white about-h1">Hello there,</h1>
                <h4 className="text-secondary about-h4">We are Collab.</h4>
                <h4 className="red">
                  A creative bunch who love code and design.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </header>
      
     
      
      <div className="about-us" id="startchange">
        <a name="about"></a>
        <div className="container-fluid">
          <div className="row text-center">
            <div className="descript col-xs-12 col-sm-12 col-md-12">
              <h1 className="about-h1 text-secondary">WHAT IS COLLAB ?</h1>
              <p className="about-us-p">
                Collab is a PWA collaborative tool which makes collaboration super easy. It comes with features like Voice-control, Real-time Chat functionality,
                Kanban-style workflow, hierarchial structure, and lots more. It provides Role Based Access Control as users can be categorised Owner, Team Leader and user.
                All three enjoys different sets of privileges.It gives users the ability to make Workspaces, teams and tasks.

                It uses modern technologies like ReactJS, NodeJs and Redux for State Management.
              </p>
              <a href="#team" className="team-btn">
                Our Team
              </a>
            </div>
          </div>
        </div>
      </div>
      <div style={{background:"#d6cbd3"}}>
      <div className="break2 container-fluid text-center"></div>
      <div className="row">
        <div className=" team text-center col-xs-12 col-sm-12 col-md-12">
          <h1 id="team" className="about-h1">Our Team</h1>
        </div>
      </div>
      <Developers />
      <br/><br/>
      </div>
    

   

     </div>
  );
};

export default About;