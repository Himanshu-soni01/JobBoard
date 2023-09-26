import React, { useState, useEffect } from "react";
import "./../App.css";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const EditJob = ({ }) => {
  const [job_title, setJob_title] = useState("props[0].title");
  const [job_type, setJob_type] = useState("props[0].event_type");
  const [cmpy_name, setCmpy_name] = useState("props[0].start_date");
  const [job_desc, setJob_desc] = useState("props[0].end_date");
  const [id, setId] = useState("props[0].id");

  const [other_details, setOther_details] = useState("props[0].other_details");

  const navigate = useNavigate();

  console.log("PROPS", "props[0].title");

  //   const handleAddEvent = () => {
  //     if (start_date >= new Date().toISOString().split("T")[0]) {
  //       if (end_date >= start_date || end_date === undefined) {
  //         manageeventservice
  //           .updateevent(id, job_title, job_type, cmpy_name, job_desc)
  //           .then(() => {
  //             closeModal();
  //           });
  //         toast.success("Event modified successfully");
  //       } else {
  //         toast.warning("End date is not valid");
  //       }
  //     } else {
  //       toast.warning("Start date is not valid");
  //     }
  //   };

  //   const closeModal = () => {
  //     onCancel();
  //   };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="event-form-container">
          <button
            className="close"
          //   onClick={closeModal}
          >
            <span>&times;</span>
          </button>
          <p>Modify Event</p>

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
                <label>Job Type:</label>
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
            <button
              className="form-button"
            // onClick={event ? handleEditEvent : handleAddEvent}
            //   onClick={handleAddEvent}
            >
              {/* {event ? "Update Event" : "Add Event"} */}
              Modify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditJob;
