import React from "react";
import "./contactme.scss";
import NavBar from "../../Components/NavBar/NavBar";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";

const ContactMePage = () => {
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
              <FaFacebookF
                size={32}
                color="#1877F2"
                style={{ cursor: "pointer" }}
              />
              <BsInstagram
                size={32}
                color="orange"
                style={{ cursor: "pointer" }}
              />
              <BsTwitterX
                size={32}
                color="#fff"
                style={{ cursor: "pointer" }}
              />
              <FaLinkedinIn
                size={32}
                color="#0077B5"
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
          <div className="contactRight">
            <div className="rightWrapper">
              <h1>Get in Touch</h1>
              <div className="inputContainer">
                <input type="text" placeholder="Your name" />
                <input type="text" placeholder="Your email" />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="7"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMePage;
