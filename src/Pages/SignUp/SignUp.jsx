/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; //import Link from react-router-dom
import axios from "axios";
import "./SignUp.css";

const SignUp = () => {
  const [action, setAction] = useState("Sign Up"); //to manage the current state of the form, whether the educator is in the sign up form or the login form

  //manages the form data for both sign up and login forms
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setcPassword] = useState("");
  const [errors, setErrors] = useState(""); //manages and displays errors in the form
  const [responseMessage, setResponseMessage] = useState("");
  const navigate = useNavigate(); //Hook for navigation which we are able to do because we imported useNavigate from react-router-dom

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {}; // Initialize empty error object

    if (!fName) newErrors.fName = "Required!";
    if (!lName) newErrors.lName = "Required!";

    if (!email) {
      newErrors.email = "Required!";
    } else if (email) {
      if (!validateEmail(email)) {
        newErrors.email = "Invalid email";
      }
    }

    if (!password) newErrors.password = "Required!";
    if (!cPassword) newErrors.cPassword = "Required!";
    if (action === "Sign Up" && password !== cPassword) {
      newErrors.cPassword = "Passwords don't match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const formData = {
        fName,
        lName,
        email,
        password,
        cPassword,
      };
      console.log(formData);

      try {
        const response = await axios.post(
          "http://localhost:5000/api/auth/signup",
          formData,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        console.log("Response:", response);
        setResponseMessage("Sign Up successful");

        //navigate("/oer"); // Navigate after successful signup
      } catch (error) {
        console.error(
          "Error signing up:",
          error.response?.data || error.message
        );
        setResponseMessage("Error signing up");
      }
    }
  };

  const validateEmail = (email) => {
    //simple email validaton check
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {/* First Name Input */}
        {action === "Sign Up" && (
          <div className="input">
            <input
              name="fName"
              type="text"
              placeholder="First name"
              value={fName}
              onChange={(e) => setfName(e.target.value)}
            />
            {errors.fName && <span className="error">{errors.fName}</span>}
          </div>
        )}

        {/* Last Name Input */}
        {action === "Sign Up" && (
          <div className="input">
            <input
              name="lName"
              type="text"
              placeholder="Last name"
              value={lName}
              onChange={(e) => setlName(e.target.value)}
            />
            {errors.lName && <span className="error">{errors.lName}</span>}
          </div>
        )}

        {/* Email Input */}
        <div className="input">
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        {/* Password Input */}
        <div className="input">
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        {/* Confirm Password Input for Sign Up */}
        {action === "Sign Up" && (
          <div className="input">
            <input
              name="cPassword"
              type="password"
              placeholder="Confirm Password"
              value={cPassword}
              onChange={(e) => setcPassword(e.target.value)}
            />
            {errors.cPassword && (
              <span className="error">{errors.cPassword}</span>
            )}
          </div>
        )}
      </div>

      {/* Submit Button */}
      <div className="submit-container">
        <button type="submit" className="submit" onClick={handleSubmit}>
          {action === "Sign Up" ? "Sign Up" : "Login"}
        </button>
      </div>

      {/* Response Message */}
      {responseMessage && (
        <p
          style={{
            margin: "-30px 0 20px 0",
            fontSize: "1rem",
            textAlign: "center",
          }}
        >
          {responseMessage}
        </p>
      )}

      {/* Prompt for users */}
      {action === "Sign Up" && (
        <p style={{ fontSize: "15px", margin: "0.5rem", color: "navy blue" }}>
          Have an account?{" "}
          <a
            href="#"
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </a>
        </p>
      )}
      {action === "Login" && (
        <p style={{ fontSize: "15px", margin: "0.5rem", color: "navy blue" }}>
          Don't have an account?{" "}
          <a
            href="#"
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </a>
        </p>
      )}

      <p style={{ fontSize: "15px", margin: "1rem", textAlign: "center" }}>
        <Link to="/home">Back to Home</Link>
      </p>
    </div>
  );
};

export default SignUp;
