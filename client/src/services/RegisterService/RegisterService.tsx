import axios from "axios";

let base_url = process.env.REACT_APP_API_URL;

async function userRegistration(first_name: any,last_name: any,email: any,dob: any,password: any)
{
   
  
   let response = await axios.post(`${base_url}/api/signinUp/register`,{first_name:first_name,last_name:last_name,email:email,dob:dob,password:password});
   console.log(response)
   return response;
}

export default {userRegistration};