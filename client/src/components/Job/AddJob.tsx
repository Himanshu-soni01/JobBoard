import React, { useState, useEffect } from "react";
import "./../../App.css";
import { useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import addjobService from "../../services/JobService";

interface AddJobProps {
  onCancel: () => void;
}

// const AddJob = ({ onEditEvent, event, onCancel }) => {
const AddJob: React.FC<AddJobProps> = ({ onCancel }) => {
  const [job_title, setJob_title] = useState("");
  const [cmpy_name, setCmpy_name] = useState("");
  const [cmpy_location, setCmpy_location] = useState("");
  const [job_desc, setJob_desc] = useState("");
  const [job_salary, setJob_salary] = useState("");
  const navigate = useNavigate();

  const handlePostJob = () => {
    const email = localStorage.getItem("email");
    addjobService
      .addJob(job_title, cmpy_name, cmpy_location, job_desc, job_salary, email)
      .then(() => {
        navigate("/dashboard/managejob");
        closeModal();
      });
    toast.success("Job Post successfully");
  };

  const closeModal = () => {
    onCancel();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="event-form-container">
          <button className="close" onClick={closeModal} >
            <span>&times;</span>
          </button>
          <p>Job Details</p>

          <div className="add-job-input-area">
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
          <button
            className="form-button"
            onClick={handlePostJob}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
