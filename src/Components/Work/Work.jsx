import React, { useEffect, useState } from "react";
import "./Work.scss";
import WorkM1 from "../../assets/WorkM1.png";
import WorkM2 from "../../assets/WorkM2.png";
import WorkW1 from "../../assets/WorkW1.png";
import WorkW2 from "../../assets/WorkW2.png";
import WorkW5 from "../../assets/WorkW5.png";
import WorkW4 from "../../assets/WorkW4.png";
import { FiEye } from "react-icons/fi";

function Work() {
  const [activeTab, setActiveTab] = useState("ALL");
  const [projectsDisplay, setProjectsDisplay] = useState([]);
  const [scroll, setScroll] = useState(0);

  const projects = [
    {
      id: 1,
      image: WorkW1,
      category: "web",
      link: "https://9297d7.csb.app/",
    },
    {
      id: 4,
      image: WorkM1,
      category: "mobile",
    },
    {
      id: 5,
      image: WorkM2,
      category: "mobile",
    },
    {
      id: 2,
      image: WorkW2,
      category: "web",
      link: "https://8n6v91.csb.app/",
    },
    {
      id: 3,
      image: WorkW5,
      category: "web",
      link: "https://main--shimmering-crisp-2094cc.netlify.app/",
    },
    {
      id: 6,
      image: WorkW4,
      category: "web",
      link: "https://thetownfit-39b69.web.app/the_town_fit",
    },
  ];

  useEffect(() => {
    activeTab === "ALL"
      ? setProjectsDisplay(projects)
      : setProjectsDisplay(
          projects.filter(
            (project) => project.category.toUpperCase() === activeTab
          )
        );
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, [activeTab]);

  return (
    <div className="work" id="work">
      <div className="sectionHeader">
        <span>MY WORK</span>
        <h1>Awesome Projects</h1>
      </div>
      <div className="buttonsContainer">
        {["ALL", "WEB", "MOBILE"].map((buttonName) => (
          <button
            className={activeTab === buttonName ? "button active" : "button"}
            onClick={() => setActiveTab(buttonName)}
          >
            {buttonName}
          </button>
        ))}
      </div>
      <div
        className={
          activeTab === "MOBILE"
            ? "projectsContainer mobile"
            : "projectsContainer"
        }
      >
        {projectsDisplay.map((project) => (
          <div className="projectContainer">
            <div className="projectImageContainer">
              <img src={project.image} alt="image" />
              <div className="hoverLayer">
                <FiEye
                  className="svg"
                  onClick={() =>
                    window.open(project.link, "_blank", "noreferrer")
                  }
                />
                <h3>Visit</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="talk"
        style={{
          animation:
            scroll > 2500
              ? "moveAndAppear 0.5s 0s 1 ease-in normal both"
              : "none",
        }}
      >
        <div className="talkLeft">
          <h3>
            so let's talk about <br /> <span>your next projects</span>
          </h3>
        </div>
        <div className="talkRight">
          <button>CONTACT ME</button>
        </div>
      </div>
    </div>
  );
}

export default Work;
