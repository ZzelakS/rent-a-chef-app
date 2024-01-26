import React from "react";
import { useState } from "react";
import "../assets/styles/SignUp.css";
import Add from "../assets/images/Add_Image_icon-icons.com_54218.png";

import user_icon from "../assets/images/image.png";
import email_icon from "../assets/images/email.png";
import password_icon from "../assets/images/password.png";
import Navbar from "./Navbar";
import rectangle from "../assets/images/Rectangle 96.png";

function SignUp() {
  const [action, setAction] = useState("Sign Up");

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="hero">
        <img src={rectangle} alt="" />
      </div>
      <div className="container">
        <div className="header">
          <div className="text">{/* {action} */}</div>
          {/* <div className='underline'></div> */}
        </div>
        <div className="inputs">
          {/* {action === "Login" ? (
            <div></div>
          ) : ( */}
            <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" placeholder="Name" />
            </div>
          
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email ID" />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password" />
          </div>
          {/* {action === "Login" ? (
            <div></div>
          ) : ( */}
            <div className="input">
              <img src={password_icon} alt="" />
              <input type="password" placeholder=" Confirm Password" />
            </div>
        </div>
        {/* {action === "Sign Up" ? (
          <div></div>
        ) : ( */}
          <div className="forgot-password">
            Lost Password? <span>Click Here!</span>
          </div>
        {action === "Login" ? (
          <div></div>
        ) : (
          <div>
            <input className="p-pix" type="file" id="file" />
            <label htmlFor="file" className="add">
              <img src={Add} alt="" className="add" />
              <span>Add an Avatar</span>
            </label>
          </div>
        )}
        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default SignUp;
