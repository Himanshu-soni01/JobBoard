import axios from "axios";

let base_url = process.env.REACT_APP_API_URL;

async function userLogin(email: any, password: any) {
  let response = await axios.post(`${base_url}/api/user/login`, {
    email: email,
    password: password,
  });
  return response;
}

async function getuserlogindata(email: any) {
  let response = await axios.get(`${base_url}/api/user/getuserdata/${email}`);
  return response;
}

async function userRegistration(
  first_name: any,
  last_name: any,
  email: any,
  dob: any,
  password: any
) {
  const data = {
    first_name: first_name,
    last_name: last_name,
    email: email,
    dob: dob,
    password: password,
  };
  let response = await axios.post(`${base_url}/api/user/register`, data);
  return response;
}

export default { userLogin, getuserlogindata, userRegistration };
