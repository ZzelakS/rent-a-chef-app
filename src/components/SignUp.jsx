import React, { useState } from "react";
// import { useState } from "react";
import "../assets/styles/SignUp.css";
// import Add from "../assets/images/Add_Image_icon-icons.com_54218.png";
import Logo from "../assets/images/Logo.png";

import user_icon from "../assets/images/image.png";
import email_icon from "../assets/images/email.png";
import password_icon from "../assets/images/password.png";
// import Navbar from "./Navbar";
import rectangle from "../assets/images/Rectangle 96.png";
import axios from "axios";
// import { Link } from "react-router-dom"

function SignUp() {
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();

  async function handleSubmit(event) {
    event.preventDefault();

    const registerUser = {
        firstname,
        lastname,
        email,
        password,
        role,
      }

      const requestOptions = {
        method: "POST",
        headers: {"content-Type": "application/json"},
        body: JSON.stringify(registerUser)
      }

      const response = await fetch("https://kook-api.onrender.com/auth/register", requestOptions);
      const data = await response.json();
      console.log(data);
  };

  return (
    <div className="login">
      <div className="hero">
        <img src={rectangle} alt="" />
      </div>
      <div className="login-hero">
        <img src={Logo} alt="" />
      </div>
      <div className="login-text">
        <h3>Create Your Kook Account</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <img src={user_icon} alt="" />
          <input
            type="text"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="input">
          <img src={user_icon} alt="" />
          <input
            type="text"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder="Email ID"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="field"
            placeholder="Role"
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        {/* <div className="input">
          <div className="dropdown-btn">Choose One</div>
            <div className="dropdown-content">
              <div className="dropdown-item">
                Individual
              </div>
              <div className="dropdown-item">
                Chef
              </div>
            </div>
        </div> */}
        <button
          type="submit"
          className="submit"
          style={{ fontFamily: "Poppins" }}
        >
          Sign Up
        </button>
      </form>
      <div className="reset">
        Already have an account? <span>Click Here!</span>
      </div>
    </div>
  );
}

export default SignUp;
