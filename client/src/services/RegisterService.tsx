import axios from "axios";

let base_url = process.env.REACT_APP_API_URL;


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
  }
  // try {
  let response = await axios.post(`${base_url}/api/user/register`, data);
  //   if (response.status === 201) {
  //     return { success: true, data: response.data };
  //   } else if (response.status === 400) {
  //     return { success: false, message: response.data.error };
  //   } else {
  //     return { success: false, message: 'An error occurred during registration.' };
  //   }
  // } catch (error) {
  //   console.error('Error during user registration:', error);
  //   return { success: false, message: 'An error occurred during registration.' };
  // }
  return response.data;
}

export default { userRegistration };
