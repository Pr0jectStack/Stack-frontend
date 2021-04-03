import React, { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { Link, Redirect } from "react-router-dom";
import ReactDatePicker from "react-datepicker";
import { Badge, Col, Row } from "react-bootstrap";

const AddNewMembersUtil = (props) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [member, setMember] = useState("");
  const [members, setMembers] = useState([]);

  const { register, handleSubmit, errors, watch, control } = useForm({});

  const onSubmit = (data) => {
    data.members = members;
    console.log(data);

    /** WHEN SUCCESSFUL CLOSE THE MODAL */
    props.closeModal();
  };

  const checkIfWorkSpaceExists = (value) => {
    //TODO
  };
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const showBadges =
    members.length > 0 &&
    members.map((memberr) => {
      return (
        <Col md="12  mb-2" lg="auto">
          <p
            className="bg-light p-2 text-dark text-center"
            style={{ borderRadius: "15px", fontSize: "13px" }}
          >
            {memberr}
          </p>
        </Col>
      );
    });

  const addMember = () => {
    if (member !== "") {
      setMembers([...members, member]);
      setMember("");
    }
  };

  return (
    <div className="mx-auto my-5" id="outer-container">
      <main id="page-wrap">
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ maxWidth: "95%", width: "550px", margin: "auto" }}
          >
            <div
              className="d-flex bg-white"
              style={{
                borderRadius: "4px",
                height: "45px",
                marginBottom: "10px",
                height: "50px",
              }}
            >
              <input
                className="auth-input"
                type="text"
                placeholder="Add member"
                name="member"
                value={member}
                onChange={(e) => setMember(e.target.value)}
                style={{ outline: "none", paddingTop: "5%" }}
              />
              <i
                style={{ fontSize: "20px", color: "black" }}
                className="fa fa-plus my-auto mx-2"
                aria-hidden="true"
                onClick={() => addMember()}
              />
            </div>

            <Row className="mt-3">{showBadges}</Row>

            {/* Button */}
            <input
              className="auth-input"
              type="submit"
              style={{ marginTop: "20px" }}
            />
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddNewMembersUtil;
