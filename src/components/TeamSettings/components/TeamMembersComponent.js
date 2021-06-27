import React, { useState } from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import AddNewMemberModal from "../../../utils/AddNewMemberModal";
import { convertBufferToImage } from "../../../utils/helper_functions";
import "./TeamMembersComponent.css";

// TODO: What happens when the name is too long ? Should we overflow the username ?

const TeamMembersComponent = ({ team, makeTeamLeader }) => {
  const { _id, name, members, owner, teamLeader } = team || null;
  const [showModal, setShowModal] = useState(false);

  const onMakeTLButtonClick = (memberId) => {
    const data = {
      tid: _id,
      memberId: memberId,
    };
    makeTeamLeader(data);
  };

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
              <Col>
                <Row>
                  <Image
                    src={convertBufferToImage(member.image)}
                    className="ml-3"
                    style={{ height: "40px", width: "40px" }}
                    roundedCircle
                  />
                  <h4 className="mt-1 ml-3 text-secondary">
                    {member.username}
                  </h4>
                </Row>
              </Col>
              <Col>
                <p style={{ float: "right" }}>
                  {member._id === owner ? (
                    <span id="owner-label">owner</span>
                  ) : member._id === teamLeader ? (
                    <span id="tl-label">TL</span>
                  ) : (
                    <span>
                      <Button
                        onClick={() => onMakeTLButtonClick(member._id)}
                        variant="sm"
                        id="make-tl-button"
                      >
                        Make TL
                      </Button>
                      <span id="member-label">member</span>
                    </span>
                  )}
                </p>
              </Col>
            </Row>
          );
        })}
      <AddNewMemberModal
        show={showModal}
        type={"team"}
        id={_id}
        title={name}
        onHide={() => setShowModal(false)}
      />
    </div>
  );
};

export default TeamMembersComponent;
