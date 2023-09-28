import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";
import logo from "../../assets/images/jmanLogo.png";
import Cookies from "js-cookie";
import loginservice from "../../services/UserService";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [logindata, setLogindata] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    const email = localStorage.getItem("email");
    async function get_data() {
      await loginservice
        .getuserlogindata(email)
        .then((response) => {
          setLogindata(response.data.name);
          setIsAdmin(response.data.admin)
        });
    }
    get_data()
  }, []);

  const logout = () => {
    Cookies.set("token", "", { expires: new Date(0) });
    localStorage.clear();
    navigate("/");
  };

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
            {isAdmin ? "" :
              <li>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/dashboard/appliedjob"
                >
                  Applied Jobs
                </Link>
              </li>
            }
            {isAdmin ? "" :
              < li >
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/dashboard"
                >
                  Job Board
                </Link>
              </li>
            }

            {isAdmin ? (
              <li>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/dashboard/managejob"
                >
                  Manage Job
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>
          <div className="sidebar-logout">
            {logindata}
            <div style={{ cursor: "pointer" }} onClick={logout}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Sidebar;
