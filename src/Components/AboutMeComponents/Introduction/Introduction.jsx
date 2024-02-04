import React from "react";
import "./introduction.scss";
import { RxDoubleArrowRight } from "react-icons/rx";
import { motion } from "framer-motion";
import data from "../../../utils/data/index.json";

const Introduction = () => {
  const introduction = data.introduction;
  const glassContainerVariantsForOdd = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: 0 },
  };
  const glassContainerVariantsForEven = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="introductionContainer">
      <div className="introductionWrapper">
        {introduction.map((item, index) => (
          <React.Fragment key={index}>
            <div className="glass-container">
              <div className="glass-content">
                <div className="title">{item.title}</div>
                <div className="subTitle">{item.subTitle}</div>
                <div className="text">{item.text}</div>
              </div>
            </div>
            {index % 2 === 0 && (
              <RxDoubleArrowRight
                className="arrowIcon"
                color="#00abfa"
                size={32}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Introduction;
