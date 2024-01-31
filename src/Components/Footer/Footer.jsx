import React from "react";
import "./footer.scss";
import { motion } from "framer-motion";
import { IoIosPerson } from "react-icons/io";
import { FaUserCheck } from "react-icons/fa";
import { MdOutlineSportsKabaddi } from "react-icons/md";
import { SiFuturelearn } from "react-icons/si";
import { MdDensitySmall } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { IoLogoFigma } from "react-icons/io5";
import { IoIosGitMerge } from "react-icons/io";
import { FaTools } from "react-icons/fa";
import { useLocation } from "react-router-dom";

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
                  <IoIosPerson size={32} color="#00abfa" />
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
                  <FaUserCheck size={32} color="#00abfa" />
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
              <motion.li
                whileHover={{
                  border: "2px solid #00abfa",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <div onClick={() => setActiveElement("FutureInfo")}>
                  <SiFuturelearn size={32} color="#00abfa" />
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
                  <IoLogoFigma size={32} color="#00abfa" />
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
                  <FaTools size={32} color="#00abfa" />
                </div>
              </motion.li>
            </motion.ul>
          )}
        </div>
      </div>
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content">Made with 💖 by Jossy</p>
        <div className="footer--social--icon">
          <ul>
            <li>
              <div to="/privacy-policy" className="text-sm">
                Privacy Policy
              </div>
            </li>
            <li>
              <div to="/terms-of-service" className="text-sm">
                Terms of Service
              </div>
            </li>
            <li>
              <div to="/cookies-settings" className="text-sm">
                Cookies Settings
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
