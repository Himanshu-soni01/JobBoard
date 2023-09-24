import React, { useState, useEffect } from "react";
import "./../App.css";
import { useNavigate } from "react-router-dom";
import { FaPen, FaTrash, FaSearch } from "react-icons/fa";

const JobBoard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [iseditopen, setIseditopen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [sortItem, setSortItem] = useState({ key: "", direction: "" });
  const [events, setEvents] = useState([]);
  const [editData, setEditData] = useState();

  // const getevents = () => {
  //   console.log("sending req from me");
  //   manageeventservice
  //     .getManageEvent()
  //     .then((response: { data: React.SetStateAction<never[]> }) => {
  //       setEvents(response.data);
  //       console.log("ED", response.data);
  //     });
  // };

  // useEffect(() => {
  //   getevents();
  // }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIseditopen(false);
  };

  // const handleEditClick = async (event_id: any) => {
  //   await manageeventservice
  //     .editEvent(event_id)
  //     .then((response: { data: React.SetStateAction<undefined> }) => {
  //       setEditData(response.data);
  //       console.log("hhhhhh", editData);
  //     });

  //   setIseditopen(true);
  // };

  // const handleDeleteEvent = (eventId: any) => {
  //   manageeventservice.deleteEvent(eventId);
  // };

  const handleSearch = (searchQuery: React.SetStateAction<string>) => {
    setSearchTerm(searchQuery);
  };

  const requestSort = (key: string) => {
    let direction = "ascending";

    if (sortItem.key === key && sortItem.direction === "ascending") {
      direction = "descending";
    }

    setSortItem({ key, direction });
  };

  // const sortedData = events
  //   .filter((item) =>
  //     Object.values(item).some((value) =>
  //       value.toString().toLowerCase().includes(searchTerm.toLowerCase())
  //     )
  //   )
  //   .sort((a, b) => {
  //     if (sortItem.key === "") return 0;

  //     const aValue = a[sortItem.key];

  //     const bValue = b[sortItem.key];

  //     if (aValue < bValue) {
  //       return sortItem.direction === "ascending" ? -1 : 1;
  //     }

  //     if (aValue > bValue) {
  //       return sortItem.direction === "ascending" ? 1 : -1;
  //     }

  //     return 0;
  //   });

  /* Render View Return - Start */

  return (
    <>
      <div className="manageEvent-page">
        <h1>Manage Event</h1>
        <div className="add-event-btn">
          <button className="ad-ev-btn" onClick={openModal}>
            + Add Job
          </button>
          {/* {isModalOpen && (
            <EventForm
              // onEditEvent={handleEditEvent}
                // event={selectedEvent}
              onCancel={closeModal}
            />
          )} */}

          {/* {iseditopen && <UpdateEvent onCancel={closeModal} props={editData} />} */}
        </div>
        <div>
          <div className="search">
            <input
              type="text"
              placeholder="Search events"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>

          <table className="events-table">
            <thead>
              <tr>
                <th onClick={() => requestSort("job_title")}>
                  Title
                  {sortItem.key === "job_title" &&
                    (sortItem.direction === "ascending" ? (
                      <span>&uarr;</span>
                    ) : (
                      <span>&darr;</span>
                    ))}
                </th>

                <th onClick={() => requestSort("job_type")}>
                  Type
                  {sortItem.key === "job_type" &&
                    (sortItem.direction === "ascending" ? (
                      <span>&uarr;</span>
                    ) : (
                      <span>&darr;</span>
                    ))}
                </th>

                <th onClick={() => requestSort("cmpy_name")}>
                  Company Name
                  {sortItem.key === "cmpy_name" &&
                    (sortItem.direction === "ascending" ? (
                      <span>&uarr;</span>
                    ) : (
                      <span>&darr;</span>
                    ))}
                </th>

                <th onClick={() => requestSort("job_desc")}>
                  Job Description
                  {sortItem.key === "job_desc" &&
                    (sortItem.direction === "ascending" ? (
                      <span>&uarr;</span>
                    ) : (
                      <span>&darr;</span>
                    ))}
                </th>
                <th></th>
              </tr>
            </thead>
            {/* <tbody>
              {sortedData.map((event) => (
                <tr key={event.id}>
                  <td>{event.event_type}</td>
                  <td>{event.title}</td>
                  <td>{event.start_date}</td>
                  <td>{event.end_date}</td>
                  <td>
                    {event.start_time === "00:00:00" ? "-" : event.start_time}
                  </td>
                  <td>
                    {event.end_time === "00:00:00" ? "-" : event.end_time}
                  </td>
                  <td>{event.other_details}</td>
                  <td className="edit-btn">
                    <button
                      className="btnnn"
                      onClick={() => handleEditClick(event.id)}
                    >
                      <FaPen />
                    </button>
                  </td>
                  <td className="edit-btn">
                    <button
                      className="dlte-btnnn"
                      onClick={() => handleDeleteEvent(event.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody> */}
          </table>
        </div>
      </div>
    </>
  );

  /* Render View Return - End */
};

/* Function - End */

/* Export default functionName; */

export default JobBoard;
