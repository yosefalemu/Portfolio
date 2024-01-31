import React from "react";
import "./navbar.scss";
import { IoHome } from "react-icons/io5";
import { PiPersonArmsSpreadFill } from "react-icons/pi";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { TiGroup } from "react-icons/ti";
import { BiSolidContact } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (route) => {
    const result = location.pathname === `/${route}`;
    console.log(`Route: ${route}, IsActive: ${result}`);
    return result;
  };

  return (
    <div className="navbarContainer">
      <div className="navbarleft">
        <h1>
          <img src="./welcome1.png" alt="" className="welcomeImage" />
        </h1>
      </div>
      <div className="navbarright">
        <div
          className={`eachrightelement ${isActive("") ? "active" : ""}`}
          onClick={() => navigate("/")}
        >
          <IoHome size={22} />
          <h1>Home</h1>
        </div>
        <div
          className={`eachrightelement ${isActive("aboutme") ? "active" : ""}`}
          onClick={() => navigate("/aboutme")}
        >
          <PiPersonArmsSpreadFill size={22} />
          <h1>AboutMe</h1>
        </div>
        <div
          className={`eachrightelement ${isActive("skills") ? "active" : ""}`}
          onClick={() => navigate("/skills")}
        >
          <GiSkills size={22} />
          <h1>Skills</h1>
        </div>
        <div
          className={`eachrightelement ${isActive("projects") ? "active" : ""}`}
          onClick={() => navigate("/projects")}
        >
          <GrProjects size={22} />
          <h1>Projects</h1>
        </div>
        <div
          className={`eachrightelement ${
            isActive("testimonials") ? "active" : ""
          }`}
          onClick={() => navigate("/testimonials")}
        >
          <TiGroup size={22} />
          <h1>Testimonials</h1>
        </div>
        <div
          className={`eachrightelement ${
            isActive("contactme") ? "active" : ""
          }`}
          onClick={() => navigate("/contactme")}
        >
          <BiSolidContact size={22} />
          <h1>ContactMe</h1>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
