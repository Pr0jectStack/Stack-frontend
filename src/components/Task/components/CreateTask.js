import React, { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { Link, Redirect } from "react-router-dom";
import ReactDatePicker from "react-datepicker";
import { Badge, Col, Row } from "react-bootstrap";
import SpeechToText from "../../../utils/SpeechToText";

const CreateTask = (props) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [member, setMember] = useState("");
  const [members, setMembers] = useState([]);
  const [note, setNote] = useState(null);

  const { register, handleSubmit, errors } = useForm({});

  const onSubmit = (data) => {
    data.membersAssigned = members;

    /** WHEN SUCCESSFUL CLOSE THE MODAL */
    props.addTask(data);
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
    members.map((member) => {
      return (
        <Col md="12  mb-2" lg="auto">
          <p
            className="bg-light p-2 text-dark text-center"
            style={{ borderRadius: "15px", fontSize: "13px" }}
          >
            {member}
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
                placeholder="Task name"
                name="taskName"
                value={note}
                ref={register({
                  required: true,
                  validate: async (value) => {
                    await sleep(1000);
                    return checkIfWorkSpaceExists(value);
                  },
                })}
                style={{ outline: "none", paddingTop: "4%" }}
              />
              <span style={{ color: "black" }} className="my-auto">
                <SpeechToText
                  note={note}
                  setNote={setNote}
                  width="100%"
                  micOnly={true}
                  handleSubmit={() => alert(note)}
                />
              </span>
            </div>
            {errors.taskName && errors.taskName.type === "required" && (
              <p className="warning">This is required</p>
            )}

            <br />

            <input
              className="auth-input"
              type="date"
              name="deadline"
              ref={register({
                required: false,
              })}
            />
            <br />

            <select name="priority" ref={register()} className="auth-input">
              <option value="NORMAL">NORMAL</option>
              <option value="LOW">LOW</option>
              <option value="URGENT">URGENT</option>
            </select>
            <br />

            <select name="status" ref={register()} className="auth-input">
              <option value="BACKLOG">BACKLOG</option>
              <option value="IN_PROGRESS">PROGRESS</option>
              <option value="REVIEW">REVIEW</option>
              <option value="COMPLETED">COMPLETED</option>
            </select>
            <br />

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

export default CreateTask;
