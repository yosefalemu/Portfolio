import React from "react";
import "./experiences.scss";
import { motion } from "framer-motion";
import data from "../../../utils/data/index.json";

const Experiences = () => {
  const experience = data.experiences;
  return (
    <div className="experienceContainer">
      <div className="contentContainer">
        {experience.map((item, index) => (
          <div className="eachContent" key={index}>
            <div className="imageContainer">
              <img
                src={`${item.image}`}
                alt=""
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: item.id === 3 ? "0%" : "50%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="contentContainer">
              <h1 className="experienceTitle">{item.title}</h1>
              <p>
                From <span className="date">{item.from}</span> to{" "}
                <span className="date">{item.to}</span>
              </p>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
