import React, { useState, useEffect } from "react";
import { push as Menu } from "react-burger-menu";
import { Image, Row } from "react-bootstrap";
import { convertBufferToImage } from "../../utils/helper_functions";
import "./GuestProfile.css";

const GuestProfile = (props) => {
  const [isOpen, setIsOpen] = useState(props.isOpen);

  const { firstName, lastName, username, socialMediaHandles, skypeId, image } =
    (props.data && props.data.userData) || {};

  const { github, twitter, instagram, website } = socialMediaHandles || {};

  useEffect(() => {
    props.fetchUser(props.userId);
  }, []);

  const handleOnClose = () => {
    setIsOpen(false);
  };

  return (
    <Menu
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
      right
      isOpen={isOpen}
      onClose={handleOnClose}
      customBurgerIcon={false}
      className="text-center"
      width={"320px"}
    >
      <Image
        className="mx-auto mt-5 mb-4"
        src={convertBufferToImage(image)}
        style={{
          width: "220px",
          height: "220px",
        }}
        roundedCircle
      />
      <h2 style={{ color: "lightgrey", fontWeight: "600" }}>
        {firstName} {lastName}
      </h2>
      <h5 style={{ color: "grey", fontWeight: "300" }}>{username}</h5>
      <Row className="mt-5 social-row">
        {github && <i className="fa fa-github" id="github" />}
        {twitter && <i className="fa fa-twitter" id="twitter" />}
        {instagram && <i className="fa fa-instagram" id="insta" />}
        {website && <i className="fa fa-link" id="link" />}
        {skypeId && <i className="fa fa-skype" id="skype" />}
      </Row>
    </Menu>
  );
};

export default GuestProfile;
