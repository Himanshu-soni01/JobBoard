import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import RegisterService from "../../services/RegisterService/RegisterService";
import logo from "../../assets/images/login_bg.png";
import image2 from "../../assets/images/image2.png";
import "../../App.css";
import { toast } from "react-toastify";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [dob, setDob] = useState("");
  // const [isValidDob, setIsValidDob] = useState("");
  const [isOver18, setIsOver18] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const navigate = useNavigate();

  //   function checkBreakpoint() {
  //     if (window.matchMedia("(max-width: 600px)").matches) {
  //       // console.log(document.getElementById('my-div').classList)
  //       document
  //         .getElementById("my-div")
  //         .classList.remove("login-image-container2");
  //       document.getElementById("my-div").classList.add("new");
  //     } else {
  //       document.getElementById("my-div").classList.remove("new");
  //       document.getElementById("my-div").classList.add("login-image-container2");
  //     }
  //   }

  //   window.addEventListener("resize", checkBreakpoint);

  const validateEmail = (inputEmail: string) => {
    console.log(inputEmail);
    const jmanRegex = /^[a-zA-Z0-9._%+-]+@jmangroup\.com$/;
    if (jmanRegex.test(inputEmail) || inputEmail === "") {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  };

  const handleEmailChange = (e: { target: { value: any; }; }) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    validateEmail(inputEmail);
  };

  const checkDateValidity = (inputDate: string) => {
    const dateParts = inputDate.split("-");
    if (dateParts.length === 3) {
      const day = parseInt(dateParts[2], 10);
      const month = parseInt(dateParts[1], 10);
      const year = parseInt(dateParts[0], 10);

      const inputDateObj = new Date(year, month - 1, day);
      const currentDate = new Date();
      const eighteenYearsAgo = new Date(
        currentDate.getFullYear() - 18,
        currentDate.getMonth(),
        currentDate.getDate()
      );

      //   if (inputDateObj < eighteenYearsAgo || inputDateObj === "") {
      if (inputDateObj < eighteenYearsAgo || inputDateObj === null) {
        setIsOver18(true);
      } else {
        setIsOver18(false);
      }
    } else {
      setIsOver18(false); // Invalid date format
    }
  };

  const handleDobChange = (e: { target: { value: any; }; }) => {
    const inputDob = e.target.value;
    console.log(inputDob);
    setDob(inputDob);
    // validateDob(inputDob);
    checkDateValidity(inputDob);
  };

  const handleSignUp = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (password.length > 6) {
      if (password !== confirmpassword) {
        setPasswordsMatch(false);
      } else {
        RegisterService.userRegistration(
          firstname,
          lastname,
          email,
          dob,
          password
        )
          .then((res: { status: number; }) => {
            if (res.status === 201) {
              toast.success("Registered success", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });

              navigate("/");
            } else if (res.status === 200) {
              toast.warning("Email is already existed..", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }
          })
          .catch((error: any) => {
            console.error("Fetch error:", error);

            toast.error("An error occurred during registration.");
          });
      }
    } else {
      toast.warning("Email should be greater than 6 characters", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="login-container">
      <div className="login-image-container2" id="my-div">
        <img src={logo} alt="" />
      </div>
      <div className="login-form2">
        <div className="my-image">
          <img src={image2} alt="" />
        </div>
        <form className="login-form-container2" onSubmit={handleSignUp}>
          <h2>Sign Up</h2>
          <input
            type="text"
            className="input-field"
            placeholder="Firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
          <input
            type="text"
            className="input-field"
            placeholder="Lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
          <input
            type="email"
            className={isValidEmail ? "input-field" : "red-border"}
            placeholder="xyz@jmangroup.com"
            value={email}
            onChange={handleEmailChange}
            required
          />

          <input
            type="date"
            className={isOver18 ? "input-field" : "red-border"}
            placeholder="date of birth"
            value={dob}
            onChange={handleDobChange}
            required
          />
          {/* {!isOver18 && <p style={{ color: "red",width:"100px" }}>DOB Invalid </p>} */}

          <input
            type="password"
            className="input-field"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />

          <input
            type="password"
            className={passwordsMatch ? "input-field" : "red-border"}
            placeholder=" confirm Password"
            value={confirmpassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setPasswordsMatch(e.target.value === password);

            }}
            required
          />

          <button type="submit" className="login-btn">
            Sign Up
          </button>
          <br />
          <p>
            Already have an account <br /> <Link to="/">Click here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
