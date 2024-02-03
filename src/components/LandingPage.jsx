import React from "react";
import Navbar from "./Navbar";
import "../assets/styles/LandingPage.css";
import { ReactSVG } from "react-svg";
import hero_image from "../assets/images/Frame 608.png";
import { DiApple } from "react-icons/di";

function LandingPage() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          {/* <img src={banner-background} alt=''/> */}
        </div>
      </div>
      <div className="headline">
        <h1>First of it's Kind</h1>
        <h1>Join us</h1>
        <div className="hero-image">
          <img src={hero_image} alt="" />
        </div>
      </div>
      <div>
        <ReactSVG src="../assets/images/Group_596.svg" />
      </div>
      <div className="headline" style={{ marginTop: "-100px" }}>
        <h2>We're on Mobile</h2>
      </div>
      <div>
        <button className="download">
          <DiApple />
          Download on the <br></br>
          <span style={{ fontWeight: "Bold", fontSize: "medium" }}>
            App Store
          </span>
        </button>
        <button className="download">
          Get it on <br></br>
          <span style={{ fontWeight: "Bold", fontSize: "medium" }}>
            Play Store
          </span>
        </button>
        <p className="headline" style={{ marginTop: "10px" }}>
          4.5/5
        </p>
      </div>
      <div className="hero-story">
        <p>
          This was was specifically created for me and<br></br>
          it has been a great boost to my business I’ve never<br></br>
          lacked klients in my business. Its a seamless innovation for my
          business....
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
