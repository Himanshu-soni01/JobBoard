import React, { useState, useEffect } from "react";
import "./../App.css";
import { useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import addjobService from "../services/JobService";

// const AddJob = ({ onEditEvent, event, onCancel }) => {
const AddJob = () => {
  const [job_title, setJob_title] = useState("");
  const [job_type, setJob_type] = useState("");
  const [cmpy_name, setCmpy_name] = useState("");
  const [cmpy_location, setCmpy_location] = useState("");
  const [job_salary, setJob_salary] = useState("");
  const [job_desc, setJob_desc] = useState("");
  const navigate = useNavigate();

  const handleAddEvent = () => {
    addjobService
      .addJob(job_title, cmpy_name, cmpy_location, job_salary, job_desc)
      .then(() => {
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
              <div className="start-date">
                <label>Location</label>
                <input
                  className="form-date"
                  type="text"
                  value={cmpy_location}
                  onChange={(e) => setCmpy_location(e.target.value)}
                />
              </div>
              <div className="start-date">
                <label>Salary</label>
                <input
                  className="form-date"
                  type="text"
                  value={job_salary}
                  onChange={(e) => setJob_salary(e.target.value)}
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
