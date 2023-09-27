import React, { useState, useEffect } from 'react';
import appliedjobservice from '../../services/JobService';

const AppliedJob = () => {
  const [isLoading, setisLoading] = useState(true);
  const [appliedJobData, setAppliedJobData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortItem, setSortItem] = useState({ key: '', direction: '' });

  const handleSearch = (searchQuery: React.SetStateAction<string>) => {
    setSearchTerm(searchQuery);
  };

  const requestSort = (key: string) => {
    let direction = 'ascending';
    if (sortItem.key === key && sortItem.direction === 'ascending') {
      direction = 'descending';
    }
    setSortItem({ key, direction });
  };

  const appliedJobDetails = () => {
    const email = localStorage.getItem('email');
    appliedjobservice
      .fetchAppliedJobData(email)
      .then((res) => {
        setAppliedJobData(res.data);
        setisLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching applied job data:', error);
        setisLoading(false);
      });
  };

  useEffect(() => {
    appliedJobDetails();
  }, []);

  if (isLoading) {
    return <div>Loading the data</div>;
  }

  const filteredAndSortedData = appliedJobData
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
        <thead>
          <tr className="project-title">
            <th colSpan={7}>Job Details</th>
          </tr>
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
            <th>Status</th>
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
              <td>Status goes here</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppliedJob;
