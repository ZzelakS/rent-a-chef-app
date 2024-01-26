import React from "react";
// import { useState } from "react";
import "../assets/styles/SignUp.css";
// import Add from "../assets/images/Add_Image_icon-icons.com_54218.png";
import Logo from '../assets/images/Logo.png'

import user_icon from "../assets/images/image.png";
import email_icon from "../assets/images/email.png";
import password_icon from "../assets/images/password.png";
// import Navbar from "./Navbar";
import rectangle from "../assets/images/Rectangle 96.png";

function SignUp() {

  return (
    <div className="login">
        <div className="hero">
        <img src={rectangle} alt="" />
      </div>
        <div className="login-hero">
        <img src={Logo} alt=''/>
        </div>
      <div className="login-text">
        <h3>Login to Your Kook Account</h3>
      </div>
      <div className="input">
        <img src={user_icon} alt="" />
        <input type="email" placeholder="Name" />
      </div>
      <div className="input">
        <img src={email_icon} alt="" />
        <input type="email" placeholder="Email ID" />
      </div>
      <div className="input">
        <img src={password_icon} alt="" />
        <input type="password" placeholder="Password" />
      </div>
      <div className="input">
        <img src={password_icon} alt="" />
        <input type="password" placeholder="Confirm Password" />
      </div>
          <div className="submit" style={{fontFamily: 'Poppins'}}>Sign Up</div>
      <div className="reset">
            Already have an account? <span>Click Here!</span>
          </div>
    </div>
  );
}

export default SignUp;
