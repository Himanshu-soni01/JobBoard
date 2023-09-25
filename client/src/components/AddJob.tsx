import React, { useState, useEffect } from "react";
import "./../../App.css";
import { useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import addjob from "../services/JobService";

// const AddJob = ({ onEditEvent, event, onCancel }) => {
const AddJob = () => {
  const [job_title, setJob_title] = useState("");
  const [job_type, setJob_type] = useState("");
  const [cmpy_name, setCmpy_name] = useState("");
  const [job_desc, setJob_desc] = useState("");
  const navigate = useNavigate();

  const handleAddEvent = () => {
    addjob.addJob(job_title, job_type, cmpy_name, job_desc).then(() => {
      // navigate("/events");
      // closeModal();
    });
    toast.success("Event added successfully");
  };

  // const closeModal = () => {
  //   onCancel();
  // };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="event-form-container">
          {/* <button className="close" onClick={closeModal}> */}
          <button className="close">
            <span>&times;</span>
          </button>
          <p>Add Event</p>

          <div className="add-event-input-area">
            <div className="add-event-name-data">
              <div className="form-name">
                <label>Job Title:</label>
                <input
                  className="form-input"
                  type="text"
                  value={job_title}
                  onChange={(e) => setJob_title(e.target.value)}
                />
              </div>
              <div className="form-type">
                <label>Type:</label>
                <select
                  className="form-input"
                  value={job_type}
                  onChange={(e) => setJob_type(e.target.value)}
                >
                  <option>Select</option>
                  <option value="FullTime">FullTime</option>
                  <option value="PartTime">PartTime</option>
                  <option value="WFH">WFH</option>
                </select>
              </div>
            </div>

            <div className="dates">
              <div className="start-date">
                <label>Company Name:</label>
                <input
                  className="form-date"
                  type="text"
                  value={cmpy_name}
                  onChange={(e) => setCmpy_name(e.target.value)}
                />
              </div>
              <div className="end-date">
                <label>Job Description</label>
                <input
                  className="form-date"
                  type="text"
                  value={job_desc}
                  onChange={(e) => setJob_desc(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <button
          className="form-button"
          // onClick={event ? handleEditEvent : handleAddEvent}
          onClick={handleAddEvent}
        >
          {/* {event ? "Update Event" : "Add Event"} */}
          Add
        </button>
      </div>
    </div>
  );
};

export default AddJob;
