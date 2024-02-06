import React from "react";
import "./allskills.scss";
import data from "../../../utils/data/index.json";

const AllSkills = () => {
  const skills = data.skills;
  return (
    <div className="allSkillContainer">
      <div className="allSkillWrapper">
        {skills.map((item, index) => (
          <React.Fragment key={index}>
            <div className="glass-container">
              <div className="glass-content">
                <div className="imageContainer">
                  <img
                    src={item.image}
                    alt="itemImage"
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      background: "#fff",
                      border: "2px solid white",
                    }}
                  />
                </div>
                <div className="itemContent">
                  <h1>{item.title}</h1>
                  <p>{item.text}</p>
                  <div className="rating">
                    <p
                      className="ratingValue"
                      style={{
                        background: `${item.color}`,
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      {item.rating}%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default AllSkills;
