import React, { useEffect, useState } from "react";
import "./About.scss";
import profilePic from "../../assets/profilePic.JPG";
import { FaUser, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";

function About() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);

  return (
    <div className="about" id="about">
      <div className="sectionHeader">
        <span>WHO AM I?</span>
        <h1>About Me</h1>
      </div>
      <div className="aboutInfoContainer">
        <div
          className="aboutInfoImgContainer"
          style={{
            animation:
              scroll > 450
                ? "aboutInfoImgAnimation 1s 0s 1 ease normal both, lightUp 2s linear 0s infinite normal both"
                : "none",
          }}
        >
          <img src={profilePic} alt="Profile Pic" />
        </div>
        <div
          className="aboutInfo"
          style={{
            animation:
              scroll > 450
                ? "aboutInfoAnimation 1s 0s 1 ease normal both"
                : "none",
          }}
        >
          <p>
            Proactive learner and a great team player having knowledge of HTML,
            CSS, Javascript React and React Native. I am also well versed with
            SQL. Problem solver and strong communicator eager to prove my value
            and talent at an emerging company. Motivated to advance and expand
            my skill set through targeted mentorship and challenging projects.
          </p>
          <div className="aboutInfoDetailsContainer">
            <div className="aboutInfoDetailsLeft">
              <div className="aboutInfoDetailsLeftDetails">
                <FaUser className="svg" />
                <p>Name</p>
              </div>
              <div className="aboutInfoDetailsLeftDetails">
                <FaPhoneAlt className="svg" />
                <p>Phone</p>
              </div>
              <div className="aboutInfoDetailsLeftDetails">
                <FaPaperPlane className="svg" />
                <p>Email</p>
              </div>
            </div>
            <div className="aboutInfoDetailsRight">
              <p>Yuvraj Singh Pundir</p>
              <p>+919805969277</p>
              <p>yuvrajsinghpundirpro@gmail.com</p>
            </div>
          </div>
          <button>
            <a href="https://drive.google.com/uc?export=download&id=1w6aIqQMKpiIThEpbeLfqydv2CML6RK6q">
              Download CV
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
