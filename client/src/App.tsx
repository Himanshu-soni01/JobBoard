/* Import Section - Start */

/* React Imports - Start */

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* React Imports -End */

/* Project components Imports - Start */

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Layout from "./components/Layout";
import AppliedJob from "./components/AppliedJob";
import JobBoard from "./components/JobBoard";

/* Project components Imports -End */

/* Import Section - End */

/* Function - Start */
function App() {
  /* Render View Return - Start */
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/dashboard" element={<Layout />}>
            <Route path="/dashboard" element={<AppliedJob />} />
            <Route path="/dashboard/jobboard" element={<JobBoard />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );

  /* Render View Return - End */
}

/* Function - End */

/* Export default functionName */

export default App;
