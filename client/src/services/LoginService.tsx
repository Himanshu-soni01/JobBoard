import axios from "axios";

let base_url = process.env.REACT_APP_API_URL;

async function userLogin(email: any, password: any) {
  let response = await axios.post(`${base_url}/api/user/login`, {
    email: email,
    password: password,
  });
  return response;
}

async function logindata(email: any) {
  // let response = await axios.post(`${base_url}/api/user/email/${email}`);
  // return response;
}

export default { userLogin, logindata };
