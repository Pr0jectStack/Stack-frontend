import React from "react";
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import CalendarHeatmap from "react-calendar-heatmap";
import TeamCard from "./components/TeamCard";
import default_image from "./default_image.jpg";
import "./Profile.css";

const Profile = () => {
  const { setUserDetailsHandler } = props;

  const SocialMediaIcon = ({ icon, text }) => {
    return (
      <h6 style={{ color: "lightgrey" }}>
        <span className={icon} style={{ marginRight: "10px", color: "grey" }} />
        {text}
      </h6>
    );
  };

  const HR = () => {
    return (
      <div
        className="mt-4 mb-4"
        style={{
          backgroundColor: "#222128",
          height: "1px",
          width: "250px",
        }}
      />
    );
  };

  const Workspace = () => {
    return (
      <div className="mb-5">
        <h5
          style={{
            color: "lightgrey",
            fontSize: "17px",
            marginBottom: "10px",
            fontWeight: "600",
          }}
        >
          Workspaces
        </h5>
        <Row>
          <Col lg={8} style={{ borderRadius: "25px" }}>
            <Image
              src={default_image}
              style={{ width: "40px", height: "40px", margin: "2px" }}
              thumbnail
            />
            <Image
              src={default_image}
              style={{ width: "40px", height: "40px", margin: "2px" }}
              thumbnail
            />
            <Image
              src={default_image}
              style={{ width: "40px", height: "40px", margin: "2px" }}
              thumbnail
            />
            <Image
              src={default_image}
              style={{ width: "40px", height: "40px", margin: "2px" }}
              thumbnail
            />
          </Col>
        </Row>
      </div>
    );
  };

  return (
    <Container style={{ marginTop: "5%" }} fluid>
      <Row>
        <Col lg={1} />
        <Col xs={12} lg={2}>
          <Image
            src={default_image}
            style={{ height: "250px", width: "250px", marginBottom: "30px" }}
            roundedCircle
          />
          <h3
            style={{
              fontSize: "160%",
              color: "lightgrey",
              marginBottom: "0px",
              fontWeight: "600",
            }}
          >
            Elizabeth Burnham
          </h3>
          <h4
            style={{
              color: "grey",
              fontWeight: "300",
              marginBottom: "40px",
            }}
          >
            elizab
          </h4>
          <h6 style={{ color: "lightgrey" }}>
            I got so much procrastinating done today.
          </h6>
          <Button
            size="sm"
            className="mt-4"
            style={{
              textTransform: "capitalize",
              width: "250px",
              backgroundColor: "#222130",
            }}
            block
          >
            Edit Profile
          </Button>

          <SocialMediaIcon icon={"fa fa-at"} text={"elizab@gmail.com"} />
          <SocialMediaIcon icon={"fa fa-github"} text={"elizab"} />
          <SocialMediaIcon icon={"fa fa-twitter"} text={"elizab"} />
          <SocialMediaIcon icon={"fa fa-instagram"} text={"elizab"} />
          <SocialMediaIcon icon={"fa fa-link"} text={"elizab.com"} />
          <HR />
          <Workspace />
        </Col>
        <Col xs={12} lg={1} />
        <Col xs={12} lg={7}>
          <h3 className="mb-3" style={{ color: "lightgrey" }}>
            Teams
          </h3>
          <Row>
            <TeamCard
              teamName="Bottom Fragger"
              workspaceName="Ball of Duty"
              role="Developer"
              percentComplete={20}
            />
            <TeamCard
              teamName="Bad Intentions"
              workspaceName="Gold Diggers"
              role="Owner"
              percentComplete={80}
            />
            <TeamCard
              teamName="Chicks with Kicks"
              workspaceName="Win or Booze"
              role="Team Leader"
              percentComplete={50}
            />
            <TeamCard
              teamName="Boom Shaka Laka"
              workspaceName="Off in the church"
              role="Designer"
              percentComplete={2}
            />
          </Row>
          <div className="mt-4">
            <h6 style={{ color: "lightgrey" }}>Task heatmap</h6>
            <Card
              style={{
                borderWidth: "2px",
                borderColor: "#222128",
                backgroundColor: "inherit",
              }}
            >
              <Card.Body style={{ paddingBottom: "0px", marginBottom: "0px" }}>
                <CalendarHeatmap
                  weekdayLabels={[
                    "Sun",
                    "Mon",
                    "Tue",
                    "Wed",
                    "Thurs",
                    "Fri",
                    "Sat",
                  ]}
                  titleForValue={(value) => {
                    if (!value) {
                      return `0 tasks completed.`;
                    }
                    return `${value.count} tasks completed on ${value.date}`;
                  }}
                  showWeekdayLabels={true}
                  startDate={new Date("2020-12-20")}
                  endDate={new Date("2021-12-31")}
                  values={[
                    { date: "2021-01-01", count: 20 },
                    { date: "2021-02-01", count: 2 },
                    { date: "2021-03-01", count: 17 },
                    { date: "2021-03-02", count: 1 },
                    { date: "2021-03-03", count: 2 },
                    { date: "2021-03-04", count: 5 },
                    { date: "2021-05-05", count: 1 },
                    { date: "2021-05-06", count: 5 },
                    { date: "2021-05-08", count: 1 },
                    { date: "2021-05-12", count: 2 },
                  ]}
                  classForValue={(value) => {
                    if (!value) {
                      return "color-empty";
                    }
                    return `color-scale-${(value.count % 4) + 1}`;
                  }}
                />
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
