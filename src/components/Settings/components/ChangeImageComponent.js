import React from "react";
import { Image } from "react-bootstrap";

import "./ChangeImageComponent.css";
import default_image from "./default_image.jpg";

// ! TODO: Add Image functionality

const ChangeImageComponent = () => {
  return (
    <div>
      <h6 id="heading">Profile picture</h6>
      <div className="container">
        <Image id="profile-image" src={default_image} roundedCircle />
        <label for="picture-edit-button" class="picture-edit-button">
          <i className="fa fa-pencil" /> <span>Edit</span>
          <input
            id="picture-edit-button"
            type="file"
            name="image"
            accept=".jpg,.jpeg,.png"
          />
        </label>
      </div>
    </div>
  );
};

export default ChangeImageComponent;
