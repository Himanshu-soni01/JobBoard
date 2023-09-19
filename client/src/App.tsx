/* Import Section - Start */

/* React Imports - Start */

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

/* React Imports -End */

/* Project components Imports - Start */

import { useState } from 'react';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login/Login';
import Layout from './components/Layout/Layout';
import Register from './components/Register/Register';


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
            {/* <Route path="/dashboard/" element={<Calendar />} />
            <Route path="/dashboard/projectallocation" element={<ProjectAllocation />} />
            <Route path="/dashboard/manageevents" element={<ManageEvents />} />
            <Route path="/dashboard/profile" element={<Profile />} /> */}
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
