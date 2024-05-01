import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import { HiMenuAlt4, HiX } from "react-icons/hi";

function Navbar() {
  const [menuToggle, setMenuToggle] = useState(0);
  const [scroll, setScroll] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
      console.log(scroll);
    });
  }, []);

  return (
    <div className={scroll ? "navbarContainer active" : "navbarContainer"}>
      <div className="logo">
        <h3>Y</h3>
      </div>
      <div className="linksDiv">
        <a className="link" href="#home">
          Home
        </a>
        <a className="link" href="#about">
          About
        </a>
        <a className="link" href="#skills">
          Skills
        </a>
        <a className="link" href="#work">
          Work
        </a>
        <a className="link" href="#contact">
          Contact
        </a>
      </div>
      <div className="socials">
        <FaInstagram
          className="svg"
          onClick={() =>
            window.open(
              "https://instagram.com/ysingh972?igshid=YmMyMTA2M2Y=",
              "_blank",
              "noreferrer"
            )
          }
        />
        <FaLinkedin
          className="svg"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/yuvraj-pundir-2aa10b227",
              "_blank",
              "noreferrer"
            )
          }
        />
        <BsMedium className="svg" />
      </div>
      <HiMenuAlt4 className="openMenuButton" onClick={() => setMenuToggle(1)} />
      <div
        className="menuOpen"
        style={{
          animation:
            menuToggle === 1
              ? "menuAppear 1s 0s 1 ease normal both"
              : menuToggle === 2
              ? "menuDisappear 1s 0s 1 ease normal both"
              : "none",
        }}
      >
        <HiX
          className="closeMenuButton"
          onClick={() => setMenuToggle(2)}
          style={{
            animation:
              menuToggle === 1
                ? "menuElementsAppear 0.5s 1s 1 ease normal backwards"
                : "menuElementsDisappear 0s 0s 1 ease normal both",
          }}
        />
        <div className="linksDivMenu">
          <a
            className="linkMenu"
            href="#home"
            onClick={() => setMenuToggle(2)}
            style={{
              animation:
                menuToggle === 1
                  ? "menuElementsAppear 0.5s 1s 1 ease normal backwards"
                  : "menuElementsDisappear 0s 0s 1 ease normal both",
            }}
          >
            Home
          </a>
          <a
            className="linkMenu"
            href="#about"
            onClick={() => setMenuToggle(2)}
            style={{
              animation:
                menuToggle === 1
                  ? "menuElementsAppear 0.5s 1s 1 ease normal backwards"
                  : "menuElementsDisappear 0s 0s 1 ease normal both",
            }}
          >
            About
          </a>
          <a
            className="linkMenu"
            href="#skills"
            onClick={() => setMenuToggle(2)}
            style={{
              animation:
                menuToggle === 1
                  ? "menuElementsAppear 0.5s 1s 1 ease normal backwards"
                  : "menuElementsDisappear 0s 0s 1 ease normal both",
            }}
          >
            Skills
          </a>
          <a
            className="linkMenu"
            href="#work"
            onClick={() => setMenuToggle(2)}
            style={{
              animation:
                menuToggle === 1
                  ? "menuElementsAppear 0.5s 1s 1 ease normal backwards"
                  : "menuElementsDisappear 0s 0s 1 ease normal both",
            }}
          >
            Work
          </a>
          <a
            className="linkMenu"
            href="#contact"
            onClick={() => setMenuToggle(2)}
            style={{
              animation:
                menuToggle === 1
                  ? "menuElementsAppear 0.5s 1s 1 ease normal backwards"
                  : "menuElementsDisappear 0s 0s 1 ease normal both",
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
