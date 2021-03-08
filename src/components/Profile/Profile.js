import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Card,
  Form,
  InputGroup,
} from "react-bootstrap";
import CalendarHeatmap from "react-calendar-heatmap";
import TeamCard from "./components/TeamCard";
import default_image from "./default_image.jpg";
import "./Profile.css";

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [smallProfileData, setSmallProfileData] = useState({
    bio: "I got so much procrastinating done today.",
    email: "elizab@gmail.com",
    github: "",
    twitter: "",
    instagram: "",
    website: "",
  });
  const [tempData, setTempData] = useState({
    bio: "I got so much procrastinating done today.",
    email: "elizab@gmail.com",
    github: "",
    twitter: "",
    instagram: "",
    website: "",
  });

  const onSave = () => {
    setIsEdit(false);
    setSmallProfileData({ ...tempData });
  };

  const onCancel = () => {
    setIsEdit(false);
  };

  const handleChange = (event) => {
    setTempData({
      ...tempData,
      [event.target.name]: event.target.value,
    });
  };

  // ! TODO: Add Links for social account ids.
  /** Display Social media icons with their respective logo. */
  const SocialMediaIcon = ({ icon, text }) => {
    return (
      <h6 style={{ color: "lightgrey" }}>
        <span className={icon} style={{ marginRight: "10px", color: "grey" }} />
        {text}
      </h6>
    );
  };

  /** Display Socials */
  const Socials = () => {
    return (
      <>
        {smallProfileData.email.length > 0 && (
          <SocialMediaIcon icon={"fa fa-at"} text={smallProfileData.email} />
        )}
        {smallProfileData.github !== null &&
          smallProfileData.github.length > 0 &&
          smallProfileData.github !== undefined && (
            <SocialMediaIcon
              icon={"fa fa-github"}
              text={smallProfileData.github}
            />
          )}
        {smallProfileData.twitter !== null &&
          smallProfileData.twitter.length > 0 &&
          smallProfileData.twitter !== undefined && (
            <SocialMediaIcon
              icon={"fa fa-twitter"}
              text={smallProfileData.twitter}
            />
          )}
        {smallProfileData.instagram !== null &&
          smallProfileData.instagram.length > 0 &&
          smallProfileData.instagram !== undefined && (
            <SocialMediaIcon
              icon={"fa fa-instagram"}
              text={smallProfileData.instagram}
            />
          )}
        {smallProfileData.website !== null &&
          smallProfileData.website.length > 1 &&
          smallProfileData.website !== undefined && (
            <SocialMediaIcon
              icon={"fa fa-link"}
              text={smallProfileData.website}
            />
          )}
      </>
    );
  };

  /** Horizontal Ruler */
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

  /**
   * Makes the Image and name,username inline with with each other.
   * Scales the image and the font size down.
   * @returns Component
   */
  const NarrowLayoutTop = () => {
    return (
      <Col className="d-small-block d-md-none">
        <Row>
          <Image
            src={default_image}
            style={{ height: "100px", width: "100px", marginBottom: "30px" }}
            roundedCircle
          />
          <Col>
            <h3
              style={{
                fontSize: "138%",
                color: "lightgrey",
                marginTop: "12%",
                marginBottom: "0px",
                fontWeight: "600",
              }}
            >
              Elizabeth Burnham
            </h3>
            <h4
              style={{
                fontSize: "155%",
                color: "grey",
                fontWeight: "300",
                marginBottom: "40px",
              }}
            >
              elizab
            </h4>
          </Col>
        </Row>
      </Col>
    );
  };

  /**
   * Makes the image, name and username appear in a column.
   * Makes the image scale to 250px.
   * @returns Component
   */
  const WideLayoutTop = () => {
    return (
      <div className="d-none d-md-block">
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
      </div>
    );
  };

  return (
    <Container style={{ marginTop: "5%" }} fluid>
      <Row>
        <Col md={1} lg={1} />
        <Col xs={12} md={4} lg={2}>
          <NarrowLayoutTop />
          <WideLayoutTop />
          {smallProfileData.bio && (
            <h6 style={{ color: "lightgrey" }}>{smallProfileData.bio}</h6>
          )}
          {isEdit ? (
            ""
          ) : (
            <Button
              onClick={() => setIsEdit(true)}
              size="sm"
              className="mt-4 mb-4 p-2"
              style={{
                textTransform: "capitalize",
                width: "100%",
                backgroundColor: "#222130",
                borderColor: "none",
                border: "0",
              }}
              block
            >
              Edit Profile
            </Button>
          )}
          {isEdit ? (
            <Row>
              <Col>
                <Form className="mt-3 mb-3" style={{ width: "250px" }}>
                  <Form.Group>
                    <Form.Control
                      style={{
                        backgroundColor: "inherit",
                        color: "lightgrey",
                        borderColor: "#222128",
                        borderWidth: "2px",
                        height: "100px",
                      }}
                      as="textarea"
                      name="bio"
                      id="bio"
                      value={tempData.bio}
                      placeholder={"Bio"}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text
                          className="fa fa-github"
                          style={{
                            color: "lightgrey",
                            backgroundColor: "inherit",
                            border: "0px",
                          }}
                        />
                      </InputGroup.Prepend>
                      <Form.Control
                        style={{
                          backgroundColor: "inherit",
                          color: "lightgrey",
                          borderColor: "#222128",
                          width: "100px",
                        }}
                        type="text"
                        name="github"
                        id="github"
                        size="sm"
                        value={tempData.github}
                        placeholder={"Github Username"}
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text
                          className="fa fa-twitter"
                          style={{
                            color: "lightgrey",
                            backgroundColor: "inherit",
                            border: "0px",
                          }}
                        />
                      </InputGroup.Prepend>
                      <Form.Control
                        style={{
                          backgroundColor: "inherit",
                          color: "lightgrey",
                          borderColor: "#222128",
                          width: "100px",
                        }}
                        type="text"
                        name="twitter"
                        id="twitter"
                        size="sm"
                        value={tempData.twitter}
                        placeholder={"Twitter Username"}
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text
                          className="fa fa-instagram"
                          style={{
                            color: "lightgrey",
                            backgroundColor: "inherit",
                            border: "0px",
                          }}
                        />
                      </InputGroup.Prepend>
                      <Form.Control
                        style={{
                          backgroundColor: "inherit",
                          color: "lightgrey",
                          borderColor: "#222128",
                          width: "100px",
                        }}
                        type="text"
                        name="instagram"
                        id="instagram"
                        size="sm"
                        value={tempData.instagram}
                        placeholder={"Instagram Username"}
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text
                          className="fa fa-link"
                          style={{
                            color: "lightgrey",
                            backgroundColor: "inherit",
                            border: "0px",
                          }}
                        />
                      </InputGroup.Prepend>
                      <Form.Control
                        style={{
                          backgroundColor: "inherit",
                          color: "lightgrey",
                          borderColor: "#222128",
                          width: "100px",
                        }}
                        type="text"
                        name="website"
                        id="website"
                        size="sm"
                        value={tempData.website}
                        placeholder={"Wesbite URL"}
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </Form.Group>
                  <Col>
                    <Row>
                      <span
                        type="button"
                        onClick={onSave}
                        className="mt-1 text-center"
                        size="sm"
                        style={{
                          width: "50px",
                          height: "30px",
                          padding: "2px",
                          textTransform: "capitalize",
                          color: "lightgrey",
                          backgroundColor: "#1e6823",
                          borderRadius: "5px",
                        }}
                      >
                        Save
                      </span>
                      <div className="mr-3"></div>
                      <span
                        type="button"
                        onClick={onCancel}
                        className="mt-1 text-center"
                        size="sm"
                        style={{
                          width: "58px",
                          height: "33px",
                          paddingTop: "2px",
                          paddingRight: "8px",
                          paddingLeft: "7px",
                          textTransform: "capitalize",
                          color: "lightgrey",
                          backgroundColor: "#222130",
                          borderRadius: "5px",
                        }}
                      >
                        Cancel
                      </span>
                    </Row>
                  </Col>
                </Form>
              </Col>
            </Row>
          ) : (
            <Socials />
          )}
          <HR />
          <Workspace />
        </Col>
        <Col className="d-none d-lg-block" lg={1} />
        <Col xs={12} md={7} lg={7}>
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
            <h6 style={{ color: "lightgrey" }}>23 tasks completed so far</h6>
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
                  endDate={new Date("2021-12-25")}
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
                    return `color-scale-${value.count > 4 ? 4 : value.count}`;
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
