import axios from "axios";

let base_url = process.env.REACT_APP_API_URL;

async function fetchJobData(email: any) {
  let response = await axios.get(`${base_url}/job/getjob/`);

  return response;
}

async function fetchAppliedJobData(email: any) {
  let response = await axios.get(
    `${base_url}/appliedjob/getappliedjob/${email}`
  );

  return response;
}

async function addJob(
  job_title: any,
  job_type: any,
  cmpy_name: any,
  job_desc: any
) {
  let response = await axios.post(`${base_url}/addjob`, {
    job_title,
    job_type,
    cmpy_name,
    job_desc,
  });

  return response;
}

export default { fetchJobData, fetchAppliedJobData, addJob };
