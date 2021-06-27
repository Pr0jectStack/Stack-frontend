import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

import "./ChangeOtherDetailsComponent.css";

// TODO: Add proper validation for inputs

const ChangeOtherDetailsComponent = (props) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      bio: props.userData.bio,
      github: props.userData.socialMediaHandles.github,
      twitter: props.userData.socialMediaHandles.twitter,
      instagram: props.userData.socialMediaHandles.instagram,
      website: props.userData.socialMediaHandles.website,
    },
  });

  const onSubmit = (data) => {
    const changedSocialMediaHandles = {
      github: data.github,
      twitter: data.twitter,
      instagram: data.instagram,
      website: data.website,
    };
    const changedData = {
      ...props.userData,
      bio: data.bio,
      socialMediaHandles: changedSocialMediaHandles,
    };
    props.updateOtherDetails(changedData);
  };

  return (
    <div>
      <Form id="other-details-form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label id="label">Name</Form.Label>
          <Form.Control
            name="name"
            id="name"
            value={props.userData.firstName + " " + props.userData.lastName}
            readOnly
          />
        </Form.Group>
        <Form.Group>
          <Form.Label id="label">Username</Form.Label>
          <Form.Control
            name="username"
            id="username"
            value={props.userData.username}
            readOnly
          />
        </Form.Group>
        <Form.Group>
          <Form.Label id="label">Email address</Form.Label>
          <Form.Control
            name="email_address"
            id="email_address"
            value={props.userData.email}
            readOnly
          />
        </Form.Group>
        <Form.Group>
          <Form.Label id="label">Bio</Form.Label>
          <Form.Control as="textarea" name="bio" id="bio" ref={register} />
        </Form.Group>
        <Form.Group>
          <Form.Label id="label">Github username</Form.Label>
          <Form.Control
            type="text"
            name="github"
            id="socialMediaHandle"
            ref={register}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label id="label">Twitter username</Form.Label>
          <Form.Control
            type="text"
            name="twitter"
            id="socialMediaHandle"
            ref={register}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label id="label">Instagram username</Form.Label>
          <Form.Control
            type="text"
            name="instagram"
            id="socialMediaHandle"
            ref={register}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label id="label">Website</Form.Label>
          <Form.Control
            type="text"
            name="website"
            id="socialMediaHandle"
            ref={register}
          />
        </Form.Group>
        <Button id="other-details-submit-button" type="submit">
          Update profile
        </Button>
      </Form>
    </div>
  );
};

export default ChangeOtherDetailsComponent;
