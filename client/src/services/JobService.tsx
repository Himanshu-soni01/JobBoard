import axios from "axios";

let base_url = process.env.REACT_APP_API_URL;

async function fetchJobData() {
  let response = await axios.get(`${base_url}/api/job/getalljob`);
  return response.data;
}

async function userAppliedJob(job_id: any, email: any) {
  console.log("Sending Req");

  let response = await axios.post(`${base_url}/api/job/userappliedjob/${job_id}`, { email });
  return response;
}

async function addJob(
  title: any,
  company: any,
  location: any,
  description: any,
  salary: any,
  email: any
) {
  console.log("Sending REQUEST");

  let response = await axios.post(`${base_url}/api/job/addjob`, {
    title,
    company,
    location,
    salary,
    description,
    email
  });

  return response;
}

async function fetchAppliedJobData(email: any) {
  let response = await axios.get(`${base_url}/api/job/getappliedjob/${email}`);
  return response.data;
}

async function adminCreatedJob(email: any) {
  let response = await axios.get(`${base_url}/api/job/getadminjobs/${email}`);
  return response.data;
}

async function deleteJob(job_id: any) {
  console.log("Delete req sent");

  let response = await axios.delete(`${base_url}/api/job/deletejob/${job_id}`);
  return response;
}


export default { fetchJobData, fetchAppliedJobData, addJob, adminCreatedJob, userAppliedJob, deleteJob };
