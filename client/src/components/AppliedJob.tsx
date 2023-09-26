import {
  useState,
  useEffect,
  SetStateAction,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";
import "../App.css";
import appliedjobservice from "../services/JobService";

const AppliedJob = () => {
  const [jobData, setProjectData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortItem, setSortItem] = useState({ key: "", direction: "" });

  const handleSearch = (searchQuery: SetStateAction<string>) => {
    setSearchTerm(searchQuery);
  };

  const requestSort = (key: string) => {
    let direction = "ascending";
    if (sortItem.key === key && sortItem.direction === "ascending") {
      direction = "descending";
    }
    setSortItem({ key, direction });
  };

  const sortedData = jobData
    .filter((item) =>
      Object.values(item)
        .some.toString()
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
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

  const projectDetails = () => {
    const email = localStorage.getItem("email");
    // appliedjobservice
    //   .fetchAppliedJobData(email)
    //   .then((res: { data: SetStateAction<never[]> }) => {
    //     setProjectData(res.data);
    //   });
  };

  useEffect(() => {
    projectDetails();
  }, []);

  return (
    <div className="job-content">
      <h1>Applied Jobs</h1>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        className="job-search"
      />
      <br />
      <br />
      <table>
        <tr className="project-title">
          <th colSpan={7}>Job Details</th>
        </tr>
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

          <th onClick={() => requestSort("job_cmpy_name")}>
            Company Name
            {sortItem.key === "job_cmpy_name" &&
              (sortItem.direction === "ascending" ? (
                <span>&uarr;</span>
              ) : (
                <span>&darr;</span>
              ))}
          </th>

          <th onClick={() => requestSort("job_location")}>
            Location
            {sortItem.key === "job_location" &&
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
          <th>Status</th>
        </tr>
        {sortedData.map(
          (item: any) => (
            <tr key={item.job_id}>
              <td>{item.job_title}</td>
              <td>{item.job_cmpy_name}</td>
              <td>{item.job_location}</td>
              <td>{item.job_salary}</td>
              <td>{item.job_desc}</td>
            </tr>
          )
        )}
      </table>
    </div>
  );
};
export default AppliedJob;
