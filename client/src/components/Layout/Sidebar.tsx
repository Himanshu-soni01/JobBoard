/* Import Section - Start */

/* React Imports - Start */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";
import logo from "../../assets/images/jmanLogo.png";
import Cookies from "js-cookie";

// import loginservice from "../../services/signin-up/loginService";

/* React Imports -End */

/* Import Section - End */

/* Function - Start */

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [logindata, setLogindata] = useState([]);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  //   useEffect(() => {
  //     const email = localStorage.getItem("email");
  //     loginservice.logindata(email).then((response) => {
  //       setLogindata(response.data);
  //     });
  //   }, []);

  const logout = () => {
    Cookies.set("token", "", { expires: new Date(0) });
    localStorage.clear();
    navigate("/");
  };

  /* Render View Return - Start */
  return (
    <div>
      <div className={`sidebar ${showSidebar ? "active" : ""}`}>
        <div className="menu-button" onClick={toggleSidebar}>
          {showSidebar ? (
            <div className="sidebar-close-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </div>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          )}
        </div>
        <div className="sidebar-content">
          <ul className="sidebar-menu-top">
            <li>
              <img src={logo} alt="" />
            </li>
            <li>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/dashboard"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/dashboard/projectallocation"
              >
                Project Allocation
              </Link>
            </li>
            {/* {userdata && userdata.userType === "admin" ? ( */}
            {/* {logindata.isAdmin ? (
              <li>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/dashboard/manageevents"
                >
                  Manage Event
                </Link>
              </li>
            ) : (
              ""
            )} */}
            {/* ) : null} */}
            <li>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/dashboard/profile"
              >
                Profile
              </Link>
            </li>
          </ul>
          <div className="sidebar-logout">
            {/* {logindata.first_name} */}
            HS
            <div style={{ cursor: "pointer" }} onClick={logout}>
              <i className="fa-solid fa-right-from-bracket fa-xl"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  /* Render View Return - End */
};
/* Render View Return - End */

/* Function - End */

/* Export default functionName */
export default Sidebar;
