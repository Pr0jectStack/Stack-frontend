import React, { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { Link, Redirect } from "react-router-dom";
import ReactDatePicker from "react-datepicker";
import { Badge, Col, Row } from "react-bootstrap";

const CreateTask = (props) => {
  console.log(props);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [member, setMember] = useState("");
  const [members, setMembers] = useState([]);

  const { register, handleSubmit, errors, watch, control } = useForm({});

  const onSubmit = (data) => {
      data.members=members;
      console.log(data);
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
        <Col md="12  mb-2" lg="4">
          <p
            className="bg-dark text-light text-center"
            style={{ borderRadius: "15px" }}
          >
            {memberr}
          </p>
        </Col>
          
      );
    });

  const addMember = () => {
    if(member !== ""){
        setMembers([...members, member]);
        setMember("");
    }
  };

  return (
    <div className="mx-auto mb-5" id="outer-container">
      <main id="page-wrap">
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ maxWidth: "95%", width: "550px", margin: "auto" }}
          >
            {/* Description */}
            <label className="mr-5">Task:</label>
            <input
              className="task-input"
              type="text"
              placeholder="Task name"
              name="taskDescription"
              ref={register({
                required: true,
                validate: async (value) => {
                  await sleep(1000);
                  return checkIfWorkSpaceExists(value);
                },
              })}
            />
            {errors.taskDescription &&
              errors.taskDescription.type === "required" && (
                <p className="warning">This is required</p>
              )}

            <br />
            <label className="mr-3">Deadline: </label>
            <input
              type="date"
              name="deadline"
              ref={register({
                required: true,
              })}
            />
            {errors.deadline && errors.deadline.type === "required" && (
              <p className="warning">This is required</p>
            )}
            <br />
            <label className="mr-4">Priority:</label>
            <select name="priority" ref={register()}>
              <option value="NORMAL">NORMAL</option>
              <option value="LOW">LOW</option>
              <option value="URGENT">URGENT</option>
            </select>
            <br />
            <label className="mr-4 pr-2">Status:</label>
            <select name="status" ref={register()}>
              <option value="BACKLOG">BACKLOG</option>
              <option value="PROGRESS">PROGRESS</option>
              <option value="REVIEW">REVIEW</option>
              <option value="COMPLETED">COMPLETED</option>
            </select>
            <br />
            <label className="mr-3">Assign to: </label>
            <input
              className="task-input"
              type="text"
              placeholder="Add member"
              name="member"
              value={member}
              onChange={(e) => setMember(e.target.value)}
            />
            <span onClick={() => addMember()}>
              <i className="fa fa-plus ml-2" aria-hidden="true" />
            </span>
            <Row className="mt-3">
                {showBadges}
            </Row>

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
