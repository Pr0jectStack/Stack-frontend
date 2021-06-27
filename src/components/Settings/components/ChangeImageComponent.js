import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { convertBufferToImage } from "../../../utils/helper_functions";

import "./ChangeImageComponent.css";

const ChangeImageComponent = (props) => {
  const handleImageChange = (event) => {
    const changedImage = event.target.files[0];
    props.changeImage(props.userData._id, changedImage);
  };

  return (
    <div>
      <h6 id="heading">Profile picture</h6>
      <div className="container">
        <Image
          id="profile-image"
          src={convertBufferToImage(props.userData.image)}
          roundedCircle
        />
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
