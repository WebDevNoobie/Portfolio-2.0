import React from "react";
import "./Home.scss";
import profilePic from "../../assets/profilePic.JPG";

function Home() {
  return (
    <div className="home" id="home">
      <img src={profilePic} alt="Profile Pic" className="profilePic" />
      <div className="profileText">
        <h3 className="name">
          Hi, I'm <span>Yuvraj Pundir</span>{" "}
        </h3>
        <span className="job">Web Developer Based out of India</span>
        <span className="text">
          Passionate
          <br /> to craft innovative <br /> web products.
        </span>
        <div className="connectWithMe">
          <a href="#contact">Connect With Me</a>
        </div>
        <div className="web">Web Developer</div>
        <div className="freelance">Freelancer</div>
      </div>
    </div>
  );
}

export default Home;
