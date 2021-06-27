import React, { useState } from "react";
import { Row, Image, Button } from "react-bootstrap";
import { convertBufferToImage } from "../../../utils/helper_functions";
import AddNewMemberModal from "../../../utils/AddNewMemberModal";
import "./WorkspaceMembersComponent.css";

const WorkspaceMembersComponent = ({ wid, name, members }) => {
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
            <Row key={member._id} className="my-3">
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
        type={"workspace"}
        id={wid}
        title={name}
        onHide={() => setShowModal(false)}
      />
    </div>
  );
};

export default WorkspaceMembersComponent;
