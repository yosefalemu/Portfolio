import React, { useState, useEffect } from "react";
import "./skills.scss";
import NavBar from "../../Components/NavBar/NavBar";
import AllSkills from "../../Components/Skills/All/AllSkills";
import Frontend from "../../Components/Skills/FrontEnd/Frontend";
import Backend from "../../Components/Skills/Backend/Backend";
import Programming from "../../Components/Skills/ProgrammingLanguange/Programming";
import Design from "../../Components/Skills/Design/Design";
import VersionControl from "../../Components/Skills/VersionControl/VersionControl";
import Tools from "../../Components/Skills/Tools/Tools";
import data from "../../utils/data/index.json";
import { motion } from "framer-motion";
import Footer from "../../Components/Footer/Footer";

const SkillsPage = () => {
  const skills = data.skills;
  const [activeElement, setActiveElement] = useState("All");
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

  return (
    <div>
      <NavBar />
      <div className="skillContainer">
        <div className="skillWrapper">
          <div className="skillTop">
            <div
              className={`eachTopElement ${
                activeElement === "All" ? "active" : ""
              }`}
              onClick={() => setActiveElement("All")}
            >
              {/* <IoIosPerson size={28} /> */}
              <h1>All</h1>
            </div>
            <div
              className={`eachTopElement ${
                activeElement === "Frontend" ? "active" : ""
              }`}
              onClick={() => setActiveElement("Frontend")}
            >
              {/* <FaUserCheck size={28} /> */}
              <h1>Frontend</h1>
            </div>
            <div
              className={`eachTopElement ${
                activeElement === "Backend" ? "active" : ""
              }`}
              onClick={() => setActiveElement("Backend")}
            >
              {/* <MdOutlineSportsKabaddi size={28} /> */}
              <h1>Backend</h1>
            </div>
            <div
              className={`eachTopElement ${
                activeElement === "ProgrammingLanguange" ? "active" : ""
              }`}
              onClick={() => setActiveElement("ProgrammingLanguange")}
            >
              {/* <MdOutlineSportsKabaddi size={28} /> */}
              <h1>Programming Languange</h1>
            </div>
            <div
              className={`eachTopElement ${
                activeElement === "Design" ? "active" : ""
              }`}
              onClick={() => setActiveElement("Design")}
            >
              {/* <MdOutlineSportsKabaddi size={28} /> */}
              <h1>Design</h1>
            </div>
            <div
              className={`eachTopElement ${
                activeElement === "VersionControl" ? "active" : ""
              }`}
              onClick={() => setActiveElement("VersionControl")}
            >
              {/* <MdOutlineSportsKabaddi size={28} /> */}
              <h1>Version Control</h1>
            </div>
            <div
              className={`eachTopElement ${
                activeElement === "Tools" ? "active" : ""
              }`}
              onClick={() => setActiveElement("Tools")}
            >
              {/* <MdOutlineSportsKabaddi size={28} /> */}
              <h1>Tools</h1>
            </div>
          </div>
          <div className="skillBottom">
            {activeElement === "All" ? (
              <AllSkills />
            ) : activeElement === "Frontend" ? (
              <Frontend />
            ) : activeElement === "Backend" ? (
              <Backend />
            ) : activeElement === "ProgrammingLanguange" ? (
              <Programming />
            ) : activeElement === "Design" ? (
              <Design />
            ) : activeElement === "VersionControl" ? (
              <VersionControl />
            ) : (
              <Tools />
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
            <div className="skillText">Skills</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
