import React from "react";
import "./programming.scss";
import data from "../../../utils/data/index.json";

const Programming = () => {
  const skills = data.skills.filter(
    (item) => item.category === "programmingLanguages"
  );
  return (
    <div className="programmingLanguagesContainer">
      <div className="programmingLanguagesWrapper">
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

export default Programming;
