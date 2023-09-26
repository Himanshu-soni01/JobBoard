import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Layout from "./components/Layout";
import AppliedJob from "./components/AppliedJob";
import JobBoard from "./components/JobBoard";
import ManageJob from "./components/ManageJob";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/dashboard" element={<Layout />}>
            <Route path="/dashboard" element={<AppliedJob />} />
            <Route path="/dashboard/jobboard" element={<JobBoard />} />
            <Route path="/dashboard/managejob" element={<ManageJob />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
