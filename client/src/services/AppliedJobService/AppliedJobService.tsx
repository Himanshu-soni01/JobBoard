import axios from "axios";

let base_url = process.env.REACT_APP_API_URL;

async function fetchData(email: any) {
   let response = await axios.get(
      `${base_url}/api/appliedjob/getappliedjob/${email}`
   );

   return response;
}

export default { fetchData };
