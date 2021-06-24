import React, { useState } from "react";
import { Row, Image, Button } from "react-bootstrap";
import AddNewMemberModal from "../../../utils/AddNewMemberModal";
import { convertBufferToImage } from "../../../utils/helper_functions";
import "./TeamMembersComponent.css";

const TeamMembersComponent = ({ tid, name, members }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Row>
        <Button onClick={() => setShowModal(true)} id="add-new-member">
          + Add new member
        </Button>
      </Row>
      {members &&
        members.map((member) => {
          return (
            <Row key={member._id} className="my-4">
              <Image
                src={convertBufferToImage(member.image)}
                className="ml-3"
                style={{ height: "40px", width: "40px" }}
                roundedCircle
              />
              <h4 className="mt-1 ml-3 text-secondary">{member.username}</h4>
            </Row>
          );
        })}
      <AddNewMemberModal
        show={showModal}
        type={"team"}
        id={tid}
        title={name}
        onHide={() => setShowModal(false)}
      />
    </div>
  );
};

export default TeamMembersComponent;
