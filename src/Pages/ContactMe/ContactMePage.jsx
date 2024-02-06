import React, { useEffect, useRef, useState } from "react";
import "./contactme.scss";
import NavBar from "../../Components/NavBar/NavBar";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaStackOverflow } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactMePage = () => {
  const form = useRef();
  const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(false);
    }, 4000);
  }, [data]);

  const sendEmail = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    emailjs
      .sendForm(
        "service_pehbd2j",
        "template_bw1305l",
        form.current,
        "jtAH0qGX8EyfV-cro"
      )
      .then(
        (result) => {
          setData(true);
        },
        (error) => {}
      );
  };
  return (
    <div>
      <NavBar />
      <div className="contactContainer">
        <div className="contactWrapper">
          <div className="contactLeft">
            <div className="eachLeftItem">
              <IoLocation size={32} color="#00abfa" />
              <h1>Address</h1>
              <p>Addis Ababa</p>
              <p>5 kilo</p>
            </div>
            <div className="eachLeftItem">
              <FaPhoneAlt size={32} color="#00abfa" />
              <h1>Phone</h1>
              <p>+251 982010318</p>
              <p>+251 941039808</p>
            </div>
            <div className="eachLeftItem">
              <MdEmail size={32} color="#00abfa" />
              <h1>Email</h1>
              <p>yosefalemumengstie@gmail.com</p>
              <p>yosephalemu6607@gmail.com</p>
            </div>
          </div>
          <div className="contactMiddle">
            <div className="socialIcons">
              <div className="github">
                <a
                  href="https://github.com/yosefalemu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub size={32} color="#fff" />
                </a>
              </div>
              <div className="linkedin">
                <a
                  href="https://www.linkedin.com/in/yosef-alemu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn size={32} />
                </a>
              </div>
              <div className="stackOverFlow">
                <a
                  href="https://stackoverflow.com/users/22899543/yosef-alemu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaStackOverflow size={32} />
                </a>
              </div>
              <div className="telegram">
                <a
                  href="https://t.me/Yosef2323"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegramPlane size={32} />
                </a>
              </div>
            </div>
          </div>
          <div className="contactRight">
            <div className="rightWrapper">
              <h1>Get in Touch</h1>
              <div className="inputContainer">
                <form ref={form} onSubmit={sendEmail}>
                  <input type="text" placeholder="Your name" name="user_name" />
                  <input
                    type="text"
                    placeholder="Your email"
                    name="user_email"
                  />
                  <textarea
                    name="message"
                    cols="30"
                    rows="7"
                    placeholder="Enter your message"
                  />
                  <input type="submit" value="Send" className="submitButton" />
                </form>
              </div>
            </div>
          </div>
        </div>
        {data && (
          <div
            style={{
              position: "absolute",
              top: "5px",
              left: "50%",
              transform: "translateX(-50%)",
              color: "white",
              background: "green",
              padding: "5px 15px",
              borderRadius: "10px",
              fontSize: "24px",
            }}
          >
            Message sent
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactMePage;
