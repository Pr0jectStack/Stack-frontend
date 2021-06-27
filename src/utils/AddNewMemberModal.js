import React from "react";
import { Modal } from "react-bootstrap";
import AddNewMembersUtilContainer from "../containers/AddNewMembersUtilContainer";

/**
 * Medium sized Modal for adding new members
 * @param {object} props - title: String, id: String, type: workspace/team, closeModal: Function
 * @returns React.component
 */
const AddNewMemberModal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
        style={{ backgroundColor: "#0e101c", color: "white" }}
      >
        <Modal.Title id="contained-modal-title-vcenter">
          Add members to {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#0e101c", color: "white" }}>
        <AddNewMembersUtilContainer
          closeModal={props.onHide}
          id={props.id}
          type={props.type}
        />
      </Modal.Body>
    </Modal>
  );
};

export default AddNewMemberModal;
