import React, { useState, useEffect } from "react";
import "./../App.css";
import { useNavigate } from "react-router-dom";
import { FaPen, FaTrash, FaSearch } from "react-icons/fa";
import Addjob from "./AddJob";
import EditJob from "./EditJob";
import jobService from "../services/JobService";


const ManageJob = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [iseditopen, setIseditopen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    const [sortItem, setSortItem] = useState({ key: "", direction: "" });
    const [createdJobs, setCreatedJobs] = useState([]);
    const [editData, setEditData] = useState();

    const getMyJobs = () => {
        console.log("sending req from fe");
        const email = localStorage.getItem("email");
        jobService.adminCreatedJob(email).then((response) => {
            setCreatedJobs(response.data.data);
        });
    };

    useEffect(() => {
        getMyJobs();
    }, []);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIseditopen(false);
    };

    // const handleEditClick = async (event_id) => {
    //     await manageeventservice.editEvent(event_id).then((response) => {
    //         setEditData(response.data);
    //         console.log(response.data);
    //     });

    //     setIseditopen(true);
    // };

    // const handleDeleteJob = (eventId) => {
    //     manageeventservice.deleteEvent(eventId);
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

    const sortedData = createdJobs
        .filter((item: { [s: string]: unknown; } | ArrayLike<unknown>) =>
            Object.values(item).some((value: any) =>
                value.toString().toLowerCase().includes(searchTerm.toLowerCase())
            )
        )
        .sort((a: { [x: string]: any; }, b: { [x: string]: any; }) => {
            if (sortItem.key === "") return 0;
            const aValue = a[sortItem.key];
            const bValue = b[sortItem.key];
            if (aValue < bValue) {
                return sortItem.direction === "ascending" ? -1 : 1;
            }
            if (aValue > bValue) {
                return sortItem.direction === "ascending" ? 1 : -1;
            }
            return 0;
        });

    return (
        <>
            <div className="manageEvent-page">
                <h1>Manage Event</h1>
                <div className="add-event-btn">
                    <button className="ad-ev-btn" onClick={openModal}>
                        + Add Event
                    </button>
                    {isModalOpen && (
                        <Addjob
                        // onEditEvent={handleEditEvent}
                        // event={selectedEvent}
                        // onCancel={closeModal}
                        />
                    )}

                    {/* {iseditopen && <EditJob onCancel={closeModal} props={editData} />} */}
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
                                <th onClick={() => requestSort("event_type")}>
                                    det1
                                    {sortItem.key === "event_type" &&
                                        (sortItem.direction === "ascending" ? (
                                            <span>&uarr;</span>
                                        ) : (
                                            <span>&darr;</span>
                                        ))}
                                </th>

                                <th onClick={() => requestSort("title")}>
                                    Title
                                    {sortItem.key === "project_name" &&
                                        (sortItem.direction === "ascending" ? (
                                            <span>&uarr;</span>
                                        ) : (
                                            <span>&darr;</span>
                                        ))}
                                </th>

                                <th onClick={() => requestSort("start_date")}>
                                    det2
                                    {sortItem.key === "start_date" &&
                                        (sortItem.direction === "ascending" ? (
                                            <span>&uarr;</span>
                                        ) : (
                                            <span>&darr;</span>
                                        ))}
                                </th>

                                <th onClick={() => requestSort("end_date")}>
                                    det3
                                    {sortItem.key === "end_date" &&
                                        (sortItem.direction === "ascending" ? (
                                            <span>&uarr;</span>
                                        ) : (
                                            <span>&darr;</span>
                                        ))}
                                </th>

                                <th onClick={() => requestSort("start_time")}>
                                    det4
                                    {sortItem.key === "start_time" &&
                                        (sortItem.direction === "ascending" ? (
                                            <span>&uarr;</span>
                                        ) : (
                                            <span>&darr;</span>
                                        ))}
                                </th>

                                <th onClick={() => requestSort("end_time")}>
                                    det5
                                    {sortItem.key === "end_time" &&
                                        (sortItem.direction === "ascending" ? (
                                            <span>&uarr;</span>
                                        ) : (
                                            <span>&darr;</span>
                                        ))}
                                </th>

                                <th onClick={() => requestSort("other_details")}>
                                    det6
                                    {sortItem.key === " other_details" &&
                                        (sortItem.direction === "ascending" ? (
                                            <span>&uarr;</span>
                                        ) : (
                                            <span>&darr;</span>
                                        ))}
                                </th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedData.map((event) => (
                                <tr key={event}>
                                    <td>{event}</td>
                                    <td>{event}</td>
                                    <td>{event}</td>
                                    <td>{event}</td>
                                    <td>{event}</td>
                                    <td className="edit-btn">
                                        <button
                                            className="btnnn"
                                        // onClick={() => handleEditClick(event.id)}
                                        >
                                            <FaPen />
                                        </button>
                                    </td>
                                    <td className="edit-btn">
                                        <button
                                            className="dlte-btnnn"
                                        // onClick={() => handleDeleteJob(event.id)}
                                        >
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );

};

export default ManageJob;
