import React, { useEffect, useState } from "react";
import "./aboutme.scss";
import NavBar from "../../Components/NavBar/NavBar";
import { IoIosPerson } from "react-icons/io";
import { FaUserCheck } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { MdOutlineSportsKabaddi } from "react-icons/md";
import { SiFuturelearn } from "react-icons/si";
import Introduction from "../../Components/AboutMeComponents/Introduction/Introduction";
import Experiences from "../../Components/AboutMeComponents/Experiences/Experiences";
import Hobbies from "../../Components/AboutMeComponents/Hobbies/Hobbies";
import Future from "../../Components/AboutMeComponents/Future/Future";
import Footer from "../../Components/Footer/Footer";

const AboutMePage = () => {
  const [activeElement, setActiveElement] = useState("Introduction");
  const [scrollDirection, setScrollDirection] = useState("up");
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;

      setScrollDirection(currentPosition > scrollPosition ? "down" : "up");
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeElement]);

  const borderBottomWidth = `${
    (scrollPosition /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100
  }%`;

  console.log(borderBottomWidth);

  return (
    <div>
      <NavBar />
      <div className="aboutMeContainer">
        <div className="aboutMeWrapper">
          <div className="aboutMeTop">
            <div
              className={`eachTopElement ${
                activeElement === "Introduction" ? "active" : ""
              }`}
              onClick={() => setActiveElement("Introduction")}
            >
              {/* <IoIosPerson size={28} /> */}
              <h1>Introduction</h1>
            </div>
            <div
              className={`eachTopElement ${
                activeElement === "Experiences" ? "active" : ""
              }`}
              onClick={() => setActiveElement("Experiences")}
            >
              {/* <FaUserCheck size={28} /> */}
              <h1>Experiences</h1>
            </div>
            <div
              className={`eachTopElement ${
                activeElement === "Hobbies" ? "active" : ""
              }`}
              onClick={() => setActiveElement("Hobbies")}
            >
              {/* <MdOutlineSportsKabaddi size={28} /> */}
              <h1>Hobbies</h1>
            </div>
          </div>
          <div className="aboutMeBottom">
            {activeElement === "Introduction" ? (
              <Introduction />
            ) : activeElement === "Experiences" ? (
              <Experiences />
            ) : (
              <Hobbies />
            )}
          </div>
          <Footer setActiveElement={setActiveElement} />
        </div>
        <div className="overLayComponent">
          <div className="overLayComponentWrapper">
            <hr
              className="variantBorder"
              style={{ width: `${borderBottomWidth}` }}
            />
            <div className="aboutMeText">About Me</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
