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
import { Redirect } from "react-router-dom";

const Profile = (props) => {
  const {
    bio,
    email,
    username,
    firstName,
    lastName,
    workspaces,
    teams,
    image,
    contribution,
    socialMediaHandles,
  } = (props.data && props.data.userData) || {};

  const { github, twitter, instagram, website } = socialMediaHandles || {};

  // Convert Buffer to base64 string.
  const bufferToBase64 = (data) => {
    let binary = "";
    let bytes = new Uint8Array(data);
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  };

  // Convert the base64 String to image.
  let userImage = image
    ? `data:${image.contentType};base64,${bufferToBase64(image.data.data)}`
    : default_image;

  const [isEdit, setIsEdit] = useState(false);
  const [profileData, setProfileData] = useState({
    bio: bio,
    email: email,
    github: github,
    twitter: twitter,
    instagram: instagram,
    website: website,
  });

  const onSave = () => {
    setIsEdit(false);

    const changedUserData = {
      ...props.data.userData,
      email: profileData.email,
      bio: profileData.bio,
      socialMediaHandles: {
        github: profileData.github,
        twitter: profileData.twitter,
        instagram: profileData.instagram,
        website: profileData.website,
      },
    };
    props.editUserProfile(changedUserData);
  };

  const onCancel = () => {
    setIsEdit(false);
    setProfileData({
      ...profileData,
      bio: bio,
      github: github,
      twitter: twitter,
      instagram: instagram,
      website: website,
    });
  };

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
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
        {props.data.userData && email.length > 0 && (
          <SocialMediaIcon icon={"fa fa-at"} text={email} />
        )}
        {props.data.userData &&
          socialMediaHandles &&
          github !== undefined &&
          github !== null &&
          github.length > 0 && (
            <SocialMediaIcon icon={"fa fa-github"} text={github} />
          )}
        {props.data.userData &&
          twitter !== undefined &&
          twitter !== null &&
          twitter.length > 0 && (
            <SocialMediaIcon icon={"fa fa-twitter"} text={twitter} />
          )}
        {props.data.userData &&
          instagram !== undefined &&
          instagram !== null &&
          instagram.length > 0 && (
            <SocialMediaIcon icon={"fa fa-instagram"} text={instagram} />
          )}
        {props.data.userData &&
          website !== undefined &&
          website !== null &&
          website.length > 1 && (
            <SocialMediaIcon icon={"fa fa-link"} text={website} />
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

  // ! TODO: Add Link to Workspaces.
  /**
   * Component to build Workspaces thumbnail.
   * @returns React.Node
   */
  const Workspaces = () => {
    return (
      <div className="mx-auto mb-5" id="outer-container">
        <main id="page-wrap">
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
              {props.data.userData &&
                workspaces &&
                workspaces.map((workspace) => {
                  return (
                    <Image
                      src={default_image}
                      style={{ width: "40px", height: "40px", margin: "2px" }}
                      thumbnail
                    />
                  );
                })}
            </Col>
          </Row>
        </main>
      </div>
    );
  };

  // ! TODO: Add link to Teams

  /**
   * Component to build Teams View in the form of Cards
   * @returns React.node
   */
  const Teams = () => {
    return (
      <div>
        <h3 className="mb-3" style={{ color: "lightgrey" }}>
          Teams
        </h3>
        <Row>
          {props.data.userData && teams && teams.length > 0 ? (
            teams.map((team) => {
              return (
                <TeamCard
                  teamName="Boom Shaka Laka"
                  workspaceName="Off in the church"
                  role="Designer"
                  percentComplete={2}
                />
              );
            })
          ) : (
            <h4
              className="text-center mx-auto my-auto pb-5 pt-5"
              style={{ color: "lightgrey" }}
            >
              Not part of any teams yet!
            </h4>
          )}
        </Row>
      </div>
    );
  };

  // ! TODO: Add parsing for Date.

  /**
   * Component for rendering a Github-Style task heatmap.
   * @returns React.Node
   */
  const TaskHeatmap = () => {
    return (
      <div className="mt-4">
        <h6 style={{ color: "lightgrey" }}>
          {contribution.length} tasks completed so far
        </h6>
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
            src={userImage}
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
              {firstName} {lastName}
            </h3>
            <h4
              style={{
                fontSize: "155%",
                color: "grey",
                fontWeight: "300",
                marginBottom: "40px",
              }}
            >
              {username}
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
          src={userImage}
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
          {firstName} {lastName}
        </h3>
        <h4
          style={{
            color: "grey",
            fontWeight: "300",
            marginBottom: "40px",
          }}
        >
          {username}
        </h4>
      </div>
    );
  };

  if (props.data.loading) {
    return <h2> Loading...</h2>;
  } else if (props.data.error) {
    return <h2>{props.data.error}</h2>;
  } else if (props.data && props.data.userData === null) {
    return <Redirect to="/" />;
  } else
    return (
      <div className="mx-auto" id="outer-container">
        <main id="page-wrap">
          <Container style={{ marginTop: "5%" }} fluid>
            <Row>
              <Col md={1} lg={1} />
              <Col xs={12} md={4} lg={2}>
                <NarrowLayoutTop />
                <WideLayoutTop />
                {bio && <h6 style={{ color: "lightgrey" }}>{bio}</h6>}
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
                              width: "250px",
                            }}
                            as="textarea"
                            name="bio"
                            id="bio"
                            value={profileData.bio}
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
                              value={profileData.github}
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
                              value={profileData.twitter}
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
                              value={profileData.instagram}
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
                              value={profileData.website}
                              placeholder={"Wesbite URL"}
                              onChange={handleChange}
                            />
                          </InputGroup>
                        </Form.Group>
                        <Col>
                          <Row>
                            <span
                              id="move-button"
                              type="button"
                              onClick={onSave}
                              className="mt-1 text-center"
                              size="sm"
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
                <Workspaces />
              </Col>
              <Col className="d-none d-lg-block" lg={1} />
              <Col xs={12} md={7} lg={7}>
                <Teams />
                <TaskHeatmap />
              </Col>
            </Row>
          </Container>
        </main>
      </div>
    );
};

export default Profile;
