import React, { useState, useEffect } from "react";
import "./navbar.scss";
import { IoHomeOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { SiTalenthouse } from "react-icons/si";
import { MdOutlineAssignment } from "react-icons/md";
import { RiGroupLine } from "react-icons/ri";
import { MdOutlineContactPage } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import SideBar from "../Sidebar/Sidebar";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isBelowMediumScreen, setIsBelowMediumScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsBelowMediumScreen(window.innerWidth <= 1200);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isActive = (route) => {
    const result = location.pathname === `/${route}`;
    console.log(`Route: ${route}, IsActive: ${result}`);
    return result;
  };

  return (
    <div className="navbarContainer">
      <div className="navbarleft">
        <img src="./images/welcome1.png" alt="" className="welcomeImage" />
      </div>
      {isBelowMediumScreen && (
        <div className="sideBar">
          <SideBar />
        </div>
      )}
      {!isBelowMediumScreen && (
        <div className="navbarright">
          <div
            className={`eachrightelement ${isActive("") ? "active" : ""}`}
            onClick={() => navigate("/")}
          >
            <IoHomeOutline size={22} />
            <h1>Home</h1>
          </div>
          <div
            className={`eachrightelement ${
              isActive("aboutme") ? "active" : ""
            }`}
            onClick={() => navigate("/aboutme")}
          >
            <GoPerson size={22} />
            <h1>AboutMe</h1>
          </div>
          <div
            className={`eachrightelement ${isActive("skills") ? "active" : ""}`}
            onClick={() => navigate("/skills")}
          >
            <SiTalenthouse size={22} />
            <h1>Skills</h1>
          </div>
          <div
            className={`eachrightelement ${
              isActive("projects") ? "active" : ""
            }`}
            onClick={() => navigate("/projects")}
          >
            <MdOutlineAssignment size={22} />
            <h1>Projects</h1>
          </div>
          <div
            className={`eachrightelement ${
              isActive("testimonials") ? "active" : ""
            }`}
            onClick={() => navigate("/testimonials")}
          >
            <RiGroupLine size={22} />
            <h1>Testimonials</h1>
          </div>
          <div
            className={`eachrightelement ${
              isActive("contactme") ? "active" : ""
            }`}
            onClick={() => navigate("/contactme")}
          >
            <MdOutlineContactPage size={22} />
            <h1>ContactMe</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
