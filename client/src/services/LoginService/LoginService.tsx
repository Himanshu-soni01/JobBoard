import axios from "axios";

let base_url = process.env.REACT_APP_API_URL;

async function userLogin(email: any, password: any) {
   let response = await axios.post(`${base_url}/api/signinUp/login`, { email: email, password: password });
   console.log(response)
   return response;
}


async function logindata(email: any) {
   let response = await axios.get(`${base_url}/api/signinUp/email/${email}`);
   console.log(response)
   return response;
}

export default { userLogin, logindata };