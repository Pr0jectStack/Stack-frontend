import { isNull } from "lodash";
import React, { useState } from "react";
import { Image } from "react-bootstrap";

import "./ChangeImageComponent.css";
import default_image from "./default_image.jpg";

const ChangeImageComponent = (props) => {
  const base64String =
    props && props.userData && props.userData.image
      ? btoa(
          String.fromCharCode(...new Uint8Array(props.userData.image.data.data))
        )
      : "";

  let image =
    props.userData.image && base64String.length > 0
      ? `data:${props.userData.image.contentType};base64,${base64String}`
      : default_image;

  const handleImageChange = (event) => {
    const changedImage = event.target.files[0];
    props.changeImage(props.userData._id, changedImage);
  };

  return (
    <div>
      <h6 id="heading">Profile picture</h6>
      <div className="container">
        <Image id="profile-image" src={image} roundedCircle />
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
