import axios from "axios";

let base_url = process.env.REACT_APP_API_URL;

async function fetchJobData(email: any) {
  let response = await axios.get(`${base_url}/api/job`);

  return response;
}

async function fetchAppliedJobData(email: any) {
  let response = await axios.get(`${base_url}/api/job/appliedjob/${email}`);

  return response;
}

async function addJob(
  job_title: any,
  cmpy_name: any,
  cmpy_location: any,
  job_salary: any,
  job_desc: any
) {
  let response = await axios.post(`${base_url}/api/job/addjob`, {
    job_title,
    cmpy_name,
    cmpy_location,
    job_salary,
    job_desc,
  });

  return response;
}

export default { fetchJobData, fetchAppliedJobData, addJob };
