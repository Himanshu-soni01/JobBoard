// import React, { useState, useEffect } from "react";
// import "./../../App.css";
// import { useNavigate } from "react-router-dom";
// import { FaPen, FaTrash, FaSearch } from "react-icons/fa";
// import Addjob from "./AddJob";
// import EditJob from "./EditJob";
// import jobService from "../../services/JobService";


// const ManageJob = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [iseditopen, setIseditopen] = useState(false);
//     const [selectedEvent, setSelectedEvent] = useState(null);
//     const [searchTerm, setSearchTerm] = useState("");
//     const navigate = useNavigate();
//     const [sortItem, setSortItem] = useState({ key: "", direction: "" });
//     const [createdJobs, setCreatedJobs] = useState([]);
//     const [editData, setEditData] = useState();
//     const [isLoading, setisLoading] = useState(true);

//     const getAdminJobs = () => {
//         const email = localStorage.getItem("email");
//         jobService.adminCreatedJob(email).then((response) => {
//             setCreatedJobs(response.data);
//             setisLoading(false);
//         })
//             .catch((error) => {
//                 console.error('Error fetching job data:', error);
//                 setisLoading(false);
//             });
//     };

//     console.log("cj", createdJobs);


//     useEffect(() => {
//         getAdminJobs();
//     }, []);

//     const openModal = () => {
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//         setIseditopen(false);
//     };

//     const handleSearch = (searchQuery: React.SetStateAction<string>) => {
//         setSearchTerm(searchQuery);
//     };

//     const requestSort = (key: string) => {
//         let direction = "ascending";

//         if (sortItem.key === key && sortItem.direction === "ascending") {
//             direction = "descending";
//         }

//         setSortItem({ key, direction });
//     };

//     const filteredAndSortedData = createdJobs
//         .filter((item) =>
//             Object.values(item)
//                 .some((value) =>
//                     String(value).toLowerCase().includes(searchTerm.toLowerCase())
//                 )
//         )
//         .sort((a, b) => {
//             if (sortItem.key === '') return 0;
//             const aValue = a[sortItem.key];
//             const bValue = b[sortItem.key];
//             if (aValue < bValue) {
//                 return sortItem.direction === 'ascending' ? -1 : 1;
//             }
//             if (aValue > bValue) {
//                 return sortItem.direction === 'ascending' ? 1 : -1;
//             }
//             return 0;
//         });

//     if (isLoading) {
//         return <div>Loading the data</div>;
//     }

//     return (
//         <>
//             <div className="manageEvent-page">
//                 <h1>Manage Jobs</h1>
//                 <div className="add-event-btn">
//                     <button className="ad-ev-btn" onClick={openModal}>
//                         + Post job
//                     </button>
//                     {isModalOpen && (
//                         <Addjob
//                             onCancel={closeModal}
//                         />
//                     )}

//                     {/* {iseditopen && <EditJob onCancel={closeModal} props={editData} />} */}
//                 </div>
//                 <div>
//                     <div className="search">
//                         <input
//                             type="text"
//                             placeholder="Search events"
//                             value={searchTerm}
//                             onChange={(e) => handleSearch(e.target.value)}
//                         />
//                     </div>

//                     <table className="events-table">
//                         <thead>
//                             <tr>
//                                 <th onClick={() => requestSort('job_title')}>
//                                     Title
//                                     {sortItem.key === 'job_title' && (
//                                         <span>{sortItem.direction === 'ascending' ? '↑' : '↓'}</span>
//                                     )}
//                                 </th>
//                                 <th onClick={() => requestSort('job_cmpy_name')}>
//                                     Company Name
//                                     {sortItem.key === 'job_cmpy_name' && (
//                                         <span>{sortItem.direction === 'ascending' ? '↑' : '↓'}</span>
//                                     )}
//                                 </th>
//                                 <th onClick={() => requestSort('job_location')}>
//                                     Location
//                                     {sortItem.key === 'job_location' && (
//                                         <span>{sortItem.direction === 'ascending' ? '↑' : '↓'}</span>
//                                     )}
//                                 </th>
//                                 <th onClick={() => requestSort('job_desc')}>
//                                     Job Description
//                                     {sortItem.key === 'job_desc' && (
//                                         <span>{sortItem.direction === 'ascending' ? '↑' : '↓'}</span>
//                                     )}
//                                 </th>
//                                 <th onClick={() => requestSort('job_salary')}>
//                                     Salary (in LPA)
//                                     {sortItem.key === 'job_salary' && (
//                                         <span>{sortItem.direction === 'ascending' ? '↑' : '↓'}</span>
//                                     )}
//                                 </th>
//                                 <th></th>
//                                 <th></th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {filteredAndSortedData.map((item: any) => (
//                                 <tr key={item.id}>
//                                     <td>{item.title}</td>
//                                     <td>{item.company}</td>
//                                     <td>{item.location}</td>
//                                     <td>{item.description}</td>
//                                     <td>{item.salary}</td>
//                                     <td className="edit-btn">
//                                         <button
//                                             className="dlte-btnnn"
//                                         // onClick={() => handleDeleteJob(event.id)}
//                                         >
//                                             <FaTrash />
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </>
//     );

// };

// export default ManageJob;


import React, { useState, useEffect } from "react";
import "./../../App.css";
import { FaTrash } from "react-icons/fa";
import Addjob from "./AddJob";
import jobService from "../../services/JobService";

const ManageJob = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortItem, setSortItem] = useState({ key: "", direction: "" });
    const [createdJobs, setCreatedJobs] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const getAdminJobs = () => {
        const email = localStorage.getItem("email");
        jobService
            .adminCreatedJob(email)
            .then((response) => {
                setCreatedJobs(response.data);
                setisLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching job data:", error);
                setisLoading(false);
            });
    };

    useEffect(() => {
        getAdminJobs();
    }, []);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

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

    const handleDeleteJob = (job_id: any) => {
        jobService.deleteJob(job_id);
    };

    const filteredAndSortedData = createdJobs
        .filter((item) =>
            Object.values(item)
                .some((value) =>
                    String(value).toLowerCase().includes(searchTerm.toLowerCase())
                )
        )
        .sort((a, b) => {
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

    if (isLoading) {
        return <div>Loading the data</div>;
    }

    return (
        <>
            <div className="manageEvent-page">
                <h1>Manage Jobs</h1>
                <div className="add-event-btn">
                    <button className="ad-ev-btn" onClick={openModal}>
                        + Post job
                    </button>
                    {isModalOpen && <Addjob onCancel={closeModal} />}
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
                                    {sortItem.key === "job_title" && (
                                        <span>
                                            {sortItem.direction === "ascending" ? "↑" : "↓"}
                                        </span>
                                    )}
                                </th>
                                <th onClick={() => requestSort("job_cmpy_name")}>
                                    Company Name
                                    {sortItem.key === "job_cmpy_name" && (
                                        <span>
                                            {sortItem.direction === "ascending" ? "↑" : "↓"}
                                        </span>
                                    )}
                                </th>
                                <th onClick={() => requestSort("job_location")}>
                                    Location
                                    {sortItem.key === "job_location" && (
                                        <span>
                                            {sortItem.direction === "ascending" ? "↑" : "↓"}
                                        </span>
                                    )}
                                </th>
                                <th onClick={() => requestSort("job_desc")}>
                                    Job Description
                                    {sortItem.key === "job_desc" && (
                                        <span>
                                            {sortItem.direction === "ascending" ? "↑" : "↓"}
                                        </span>
                                    )}
                                </th>
                                <th onClick={() => requestSort("job_salary")}>
                                    Salary (in LPA)
                                    {sortItem.key === "job_salary" && (
                                        <span>
                                            {sortItem.direction === "ascending" ? "↑" : "↓"}
                                        </span>
                                    )}
                                </th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredAndSortedData.map((item: any) => (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>{item.company}</td>
                                    <td>{item.location}</td>
                                    <td>{item.description}</td>
                                    <td>{item.salary}</td>
                                    <td className="edit-btn">
                                        <button className="dlte-btnnn"
                                            onClick={() => handleDeleteJob(item.id)}>
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
