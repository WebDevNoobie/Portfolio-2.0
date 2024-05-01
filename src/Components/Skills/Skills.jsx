import React, { useEffect, useState } from "react";
import "./Skills.scss";
import { FaHtml5, FaSass } from "react-icons/fa";
import { DiReact, DiCss3 } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { SiFirebase, SiRedux } from "react-icons/si";
import { AiFillApi } from "react-icons/ai";

function Skills() {
  const [active, setActive] = useState(1);
  const [scroll, setScroll] = useState(0);
  const icons = [
    <TbBrandJavascript />,
    <DiReact />,
    <SiFirebase />,
    <SiRedux />,
    <FaHtml5 />,
    <DiCss3 />,
    <FaSass />,
    <AiFillApi />,
  ];
  const experiences = [
    {
      id: 1,
      year: "2022",
      position: "Programmer Analyst",
      company: "Cognizant Technology Solutions",
    },
    {
      di: 2,
      year: "2021",
      position: "Programmer Analyst Trainee",
      company: "Cognizant Technology Solutions",
    },
    {
      id: 3,
      year: "2021",
      position: "Intern",
      company: "Cognizant Technology Solutions",
    },
  ];
  const highlights = [
    {
      id: 1,
      number: "1.5",
      itemName: "Years Of Experience",
    },
    {
      id: 2,
      number: "6+",
      itemName: "Projects Done",
    },
    {
      id: 3,
      number: "2",
      itemName: "Clients Served",
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);

  return (
    <div className="skills" id="skills">
      <div className="sectionHeader">
        <span>WHAT'S MY EXPERTISE?</span>
        <h1>Skills and Experience</h1>
      </div>
      <div className="buttonsContainer">
        <button
          className={active === 1 ? "active" : ""}
          onClick={() => setActive(1)}
        >
          SKILLS
        </button>
        <button
          className={active === 2 ? "active" : ""}
          onClick={() => setActive(2)}
        >
          EXPERIENCE
        </button>
      </div>
      <div className="skillsContainer">
        {active === 1 &&
          icons.map((icon, index) => {
            return (
              <div
                key={index}
                className={scroll > 1350 ? "tools active" : "tools"}
              >
                {icon}
              </div>
            );
          })}
      </div>
      <div className="experienceContainer">
        {active === 2 &&
          experiences.map((experience) => {
            return (
              <div className="experience" key={experience.id}>
                <span>{experience.year}</span>
                <div className="position">
                  <h3>{experience.position}</h3>
                  <p>{experience.company}</p>
                </div>
              </div>
            );
          })}
      </div>
      <div className="highlightsContainer">
        {highlights.map((highlight) => {
          return (
            <div className="finishes" key={highlight.id}>
              <div className="number">{highlight.number}</div>
              <h4 className="item_name">{highlight.itemName}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
