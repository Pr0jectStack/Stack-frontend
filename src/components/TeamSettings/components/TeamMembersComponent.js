import React from "react";
import { Row, Image } from "react-bootstrap";
import { convertBufferToImage } from "../../../utils/helper_functions";

const TeamMembersComponent = ({ members }) => {
  return (
    <div>
      {members &&
        members.map((member) => {
          return (
            <Row className="my-4">
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
    </div>
  );
};

export default TeamMembersComponent;
