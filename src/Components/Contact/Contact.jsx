import React, { useState } from "react";
import "./Contact.scss";
import {
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneAlt,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import emailjs from "@emailjs/browser";

function Contact() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  const contacts = [
    {
      id: 1,
      icon: <FaMapMarkerAlt />,
      infoText: "327-B Nayagaon, Chandigarh, India",
    },
    {
      id: 2,
      icon: <FaPaperPlane />,
      infoText: "yuvrajsinghpundirpro@gmail.com",
    },
    {
      id: 3,
      icon: <FaPhoneAlt />,
      infoText: "+919805969277",
    },
  ];

  const isValidEmail = () => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  var templateParams = {
    from_name: fname + " " + lname,
    reply_to: email,
    from_email: email,
    message: message,
    text: message,
  };

  const sendMessage = () => {
    emailjs
      .send(
        "service_wxo830h",
        "template_hpdam68",
        templateParams,
        "JQNV6Ferj49SgT3iz"
      )
      .then(
        (result) => {
          alert("Message sent successfully");
        },
        (error) => {
          alert("Some error occured!");
          console.log(error.text);
        }
      );
  };

  const submitForm = () => {
    if (fname && lname && phone && email && message) {
      isValidEmail()
        ? phone.length === 10
          ? sendMessage()
          : alert("Enter correct phone number")
        : alert("Enter correct email please!");
    } else {
      alert("Fill in all fields please!");
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="sectionHeader">
        <span>GET IN TOUCH</span>
        <h1>Contact Me</h1>
      </div>
      <div className="contactForm">
        <div className="contactFormLeftContainer">
          <h3>Just Say Hi</h3>
          <p className="contactText">
            Want to get some web dev done, be it a full stack web app or a small
            ui update. Will do anything you require. Have some queries? Want to
            discuss the details of your next project? Just get in touch!
          </p>
          {contacts.map((contact) => {
            return (
              <div className="contactFormLeft" key={contact.id}>
                <div className="icon">{contact.icon}</div>
                <p>{contact.infoText}</p>
              </div>
            );
          })}
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
        </div>
        <div className="contactFormRightContainer">
          <h3>Get In Touch</h3>
          <div className="row">
            <input
              type="text"
              placeholder="First Name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last name"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
          </div>
          <div className="row">
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="row">
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button className="btn" onClick={submitForm}>
            Send
          </button>
        </div>
      </div>
      <div className="copyright">
        <p>
          Copyright&copy;2022 All rights reserved.Made by{" "}
          <span>Yuvraj Singh Pundir</span>
        </p>
      </div>
    </div>
  );
}

export default Contact;
