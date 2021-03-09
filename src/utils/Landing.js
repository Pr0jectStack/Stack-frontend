import React,{useState} from "react";
import { Row, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import CardItems from "./CardItems";
import "./Landing.css";
const Landing = ({ heading,type,_id }) => {

  const [redirect, setRedirect] = useState(false)

  const redirectToForm = () =>{
    if(redirect){
      return <Redirect to={type === "workspace"?"/createWorkspace":"/createTeam"}/>
    }
  }

  return (
    <div className="">
      {redirectToForm()}
      <h1 className="landing-h1 mt-2">{heading}</h1>
      <Row style={{ marginTop: "6%", maxWidth: "95%", marginLeft: "10px" }}>
        <Col md="12 mb-2" lg="4">
          <div style={{ left: "0px", right: "0px" }} onClick={()=>setRedirect(true)}>
            <CardItems demo type={type} />
          </div>
        </Col>
        <Col md="12  mb-2" lg="4">
          <CardItems
            title="Team A"
            type={type}
            subtitle="Frontend"
            description="A bare bones development team for building professional web sites or software for the web platform will typically."
            teamLeader="Manoj Pandey"
            members={["asdassd", "asdsaasdsd", "asdsasd"]}
          />
        </Col>
        <Col md="12  mb-2" lg="4">
          <CardItems
            title="Team A"
            type={type}
            subtitle="Frontend"
            description="A bare bones development team for building professional web sites or software for the web platform will typically."
            teamLeader="Manoj Pandey"
            members={["asdassd", "asdsaasdsd", "asdsasd"]}
          />
        </Col>
        <Col md="12  mb-2" lg="4">
          <CardItems
            title="Team A"
            type={type}
            subtitle="Frontend"
            description="A bare bones development team for building professional web sites or software for the web platform will typically."
            teamLeader="Manoj Pandey"
            members={["asdassd", "asdsaasdsd", "asdsasd"]}
          />
        </Col>
        <Col md="12  mb-2" lg="4">
          <CardItems
            title="Team A"
            type={type}
            subtitle="Frontend"
            description="A bare bones development team for building professional web sites or software for the web platform will typically."
            teamLeader="Manoj Pandey"
            members={["asdassd", "asdsaasdsd", "asdsasd"]}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Landing;
