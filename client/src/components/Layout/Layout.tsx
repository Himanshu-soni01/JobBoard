import { useEffect } from "react";
import Sidebar from "./Sidebar";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    var email = localStorage.getItem('email');
    if (!email) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );

};

export default Layout;
