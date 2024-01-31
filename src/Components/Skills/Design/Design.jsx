import React from "react";
import "./design.scss";
import data from "../../../utils/data/index.json";

const Design = () => {
  const skills = data.skills.filter((item) => item.category === "design");
  return (
    <div className="designContainer">
      <div className="designWrapper">
        {skills?.map((item, index) => (
          <React.Fragment>
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

export default Design;
