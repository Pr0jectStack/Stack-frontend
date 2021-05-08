import React from "react";
import { Container, Image } from "react-bootstrap";
import team from "./team.jpg";
import "./About.css";

const About = () => {
  return (
    <Container id="container">
      <Image className="d-none d-md-block d-lg-block" src={team} id="image" />
      <Image
        className="d-small-block d-md-none d-lg-none"
        src={team}
        id="image-small"
      />
      <h6 id="well-hello">WELL HELLO THERE</h6>
      <div id="heading">
        <h2>We're Collab</h2>
        <h3 className="d-none d-md-block d-lg-block">
          A collaborative task manager
        </h3>
        <h3 className="d-none d-md-block d-lg-block">
          focused on productivity and efficiency.
        </h3>
        <h3 className="d-sm-block d-md-none">
          A collaborative task manager focused on productivity and efficiency.
        </h3>
      </div>
      <div id="description">
        <p>
          We are two individuals with a passion for development. We made Collab
          with a single goal in mind - make task management smoother and
          collaborating on it even smoother. We combined all the essential
          features required, added a little cherry on the top, wrapped it in
          nice box and Collab was born.
        </p>
        <p style={{ fontSize: "25px" }}>☺︎</p>
        <p>Akshay Gupta & Ritvij Srivastava</p>
      </div>
    </Container>
  );
};

export default About;
