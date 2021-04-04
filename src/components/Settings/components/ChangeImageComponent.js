import React, { useState } from "react";
import { Image } from "react-bootstrap";

import "./ChangeImageComponent.css";
import default_image from "./default_image.jpg";

const ChangeImageComponent = (props) => {
  // Change buffer to base 64
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
  let userImage = props.userData.image
    ? `data:${props.userData.image.contentType};base64,${bufferToBase64(
        props.userData.image.data.data
      )}`
    : default_image;

  const handleImageChange = (event) => {
    const changedImage = event.target.files[0];
    props.changeImage(props.userData._id, changedImage);
  };

  return (
    <div>
      <h6 id="heading">Profile picture</h6>
      <div className="container">
        <Image id="profile-image" src={userImage} roundedCircle />
        <label for="picture-edit-button" class="picture-edit-button">
          <i className="fa fa-pencil" /> <span>Edit</span>
          <input
            id="picture-edit-button"
            type="file"
            name="image"
            accept=".jpg,.jpeg,.png"
            onChange={handleImageChange}
          />
        </label>
      </div>
    </div>
  );
};

export default ChangeImageComponent;
