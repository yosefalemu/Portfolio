import React from "react";
import "./footer.scss";
import { motion } from "framer-motion";
import { GoPerson } from "react-icons/go";
import { BsPersonCheck } from "react-icons/bs";
import { MdOutlineSportsKabaddi } from "react-icons/md";
import { MdDensitySmall } from "react-icons/md";
import { FaStackOverflow } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa6";
import { IoIosGitMerge } from "react-icons/io";
import { VscTools } from "react-icons/vsc";
import { useLocation } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { PiTelegramLogo } from "react-icons/pi";

const Footer = ({ setActiveElement }) => {
  const location = useLocation();
  const activeTab = location.pathname.replace("/", "");
  return (
    <div className="footerContainer">
      <div className="footerTop">
        <div className="eachItem">
          {activeTab === "aboutme" ? (
            <motion.ul>
              <motion.li
                whileHover={{
                  border: "2px solid #00abfa",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <div onClick={() => setActiveElement("Introduction")}>
                  <GoPerson size={32} color="#00abfa" />
                </div>
              </motion.li>
              <motion.li
                whileHover={{
                  border: "2px solid #00abfa",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <div onClick={() => setActiveElement("Experiences")}>
                  <BsPersonCheck size={32} color="#00abfa" />
                </div>
              </motion.li>
              <motion.li
                whileHover={{
                  border: "2px solid #00abfa",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <div onClick={() => setActiveElement("Hobbies")}>
                  <MdOutlineSportsKabaddi size={32} color="#00abfa" />
                </div>
              </motion.li>
            </motion.ul>
          ) : (
            <motion.ul>
              <motion.li
                whileHover={{
                  border: "2px solid #00abfa",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <div onClick={() => setActiveElement("All")}>
                  <MdDensitySmall size={32} color="#00abfa" />
                </div>
              </motion.li>
              <motion.li
                whileHover={{
                  border: "2px solid #00abfa",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <div onClick={() => setActiveElement("Frontend")}>
                  <FaReact size={32} color="#00abfa" />
                </div>
              </motion.li>
              <motion.li
                whileHover={{
                  border: "2px solid #00abfa",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <div onClick={() => setActiveElement("Backend")}>
                  <FaNodeJs size={32} color="#00abfa" />
                </div>
              </motion.li>
              <motion.li
                whileHover={{
                  border: "2px solid #00abfa",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <div onClick={() => setActiveElement("ProgrammingLanguange")}>
                  <FaCode size={32} color="#00abfa" />
                </div>
              </motion.li>
              <motion.li
                whileHover={{
                  border: "2px solid #00abfa",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <div onClick={() => setActiveElement("Design")}>
                  <FaFigma size={32} color="#00abfa" />
                </div>
              </motion.li>
              <motion.li
                whileHover={{
                  border: "2px solid #00abfa",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <div onClick={() => setActiveElement("VersionControl")}>
                  <IoIosGitMerge size={32} color="#00abfa" />
                </div>
              </motion.li>
              <motion.li
                whileHover={{
                  border: "2px solid #00abfa",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <div onClick={() => setActiveElement("Tools")}>
                  <VscTools size={32} color="#00abfa" />
                </div>
              </motion.li>
            </motion.ul>
          )}
        </div>
      </div>
      <hr className="divider" />
      <div className="footerContentContainer">
        <p className="gretting"></p>
        <p className="dateTime">{`Copyright © ${new Date().getFullYear()} Yosef Alemu`}</p>
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
    </div>
  );
};

export default Footer;
