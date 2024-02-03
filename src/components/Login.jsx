import React from "react";
import email_icon from "../assets/images/email.png";
import password_icon from "../assets/images/password.png";
import "../assets/styles/Login.css";
import Logo from '../assets/images/Logo.png'
import rectangle from "../assets/images/Rectangle 96.png";
import { useState } from "react";


const Login = () => {
    const [action, setAction] = useState("Sign Up");
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
        <img src={email_icon} alt="" />
        <input type="email" placeholder="Email ID" />
      </div>
      <div className="input">
        <img src={password_icon} alt="" />
        <input type="password" placeholder="Password" />
      </div>
      <div className="reset">
            Lost Password? <span>Click Here!</span>
          </div>
          <div className="submit">Login</div>
    </div>
  );
};

export default Login;
