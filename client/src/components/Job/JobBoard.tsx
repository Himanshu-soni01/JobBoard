import React, { useState, useEffect } from "react";
import "./../../App.css";
import { useNavigate } from "react-router-dom";
// import { FaPen, FaTrash, FaSearch } from "react-icons/fa";
import getJobData from "../../services/JobService";
import { toast } from "react-toastify";

const JobBoard = () => {
  const [isLoading, setisLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [iseditopen, setIseditopen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [sortItem, setSortItem] = useState({ key: "", direction: "" });
  const [jobData, setJobData] = useState([]);
  const [editData, setEditData] = useState();

  const getjobs = () => {
    getJobData
      .fetchJobData()
      .then((response: { data: React.SetStateAction<never[]> }) => {
        setJobData(response.data);
        setisLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching job data:', error);
        setisLoading(false);
      });
  };

  useEffect(() => {
    getjobs();
  }, []);

  if (isLoading) {
    return <div>Loading the data</div>;
  }

  const handleApplyClick = async (job_id: any) => {
    const email = localStorage.getItem('email');
    await getJobData.userAppliedJob(job_id, email).then((response) => {
      if (response.status == 200) {
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/dashboard");
      }
      if (response.status === 201) {
        toast.warning(response.data.message, {
          position: "top-right",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    });
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

  const filteredAndSortedData = jobData
    .filter((item) =>
      Object.values(item)
        .some((value) =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
    )
    .sort((a, b) => {
      if (sortItem.key === '') return 0;
      const aValue = a[sortItem.key];
      const bValue = b[sortItem.key];
      if (aValue < bValue) {
        return sortItem.direction === 'ascending' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortItem.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });

  return (
    <>
      <div className="jobBoard-page">
        <h1>Job board</h1>
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
                <th onClick={() => requestSort('job_title')}>
                  Title
                  {sortItem.key === 'job_title' && (
                    <span>{sortItem.direction === 'ascending' ? '↑' : '↓'}</span>
                  )}
                </th>
                <th onClick={() => requestSort('job_cmpy_name')}>
                  Company Name
                  {sortItem.key === 'job_cmpy_name' && (
                    <span>{sortItem.direction === 'ascending' ? '↑' : '↓'}</span>
                  )}
                </th>
                <th onClick={() => requestSort('job_location')}>
                  Location
                  {sortItem.key === 'job_location' && (
                    <span>{sortItem.direction === 'ascending' ? '↑' : '↓'}</span>
                  )}
                </th>
                <th onClick={() => requestSort('job_desc')}>
                  Job Description
                  {sortItem.key === 'job_desc' && (
                    <span>{sortItem.direction === 'ascending' ? '↑' : '↓'}</span>
                  )}
                </th>
                <th onClick={() => requestSort('job_salary')}>
                  Salary (in LPA)
                  {sortItem.key === 'job_salary' && (
                    <span>{sortItem.direction === 'ascending' ? '↑' : '↓'}</span>
                  )}
                </th>
                <th></th>
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
                    <button
                      className="btnnn"
                      onClick={() => handleApplyClick(item.id)}
                    >
                      APPLY
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

export default JobBoard;
