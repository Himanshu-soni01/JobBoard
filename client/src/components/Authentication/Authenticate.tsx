/* authenticate service */

import axios from 'axios';

let baseUrl = process.env.REACT_APP_API_URL

async function authenticateUser() {
    let response = await axios.get(`${baseUrl}/api/authenticateuser`)
}

export default authenticateUser;