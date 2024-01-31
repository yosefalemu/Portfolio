import React, { useEffect, useState } from "react";
import "./projects.scss";
import NavBar from "../../Components/NavBar/NavBar";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { RiExternalLinkFill } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";

const ProjectsPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const imagesList = [
    "./images/addis.jpg",
    "./images/alif.jpg",
    "./images/angular.png",
    "./images/kidame.jpg",
  ];
  const lengthOfImagesList = imagesList.length;
  useEffect(() => {
    setTimeout(() => {
      if (index < lengthOfImagesList - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 5000);
  }, [index]);
  return (
    <div>
      <NavBar />
      <div className="projectContainer">
        <div className="projectWrapper">
          <FaChevronLeft className="leftArrow" size={32} color="#00abfa" />
          <FaChevronRight className="rightArrow" size={32} color="#00abfa" />
          <h1 className="projectTitle">Projects</h1>
          <div className="wholeContainer">
            <div className="imageContainer">
              <img
                src="./images/federal.jpg"
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "15px",
                  borderBottomRightRadius: "0px",
                  borderTopRightRadius: "0px",
                }}
              />
            </div>
            <div className="projectContent">
              <h1>Federal Police</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                temporibus libero molestiae ea dignissimos vel iste, rem quo
                consequuntur modi ullam animi.
              </p>
              <div className="buttonContainer">
                <button
                  className="detailButton"
                  onClick={() => setModalOpen(true)}
                >
                  View Detail
                </button>
                <button className="githubButton">
                  <p>Github</p>
                  <RiExternalLinkFill size={28} color="#00abfa" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {modalOpen && (
          <div className="overlayComponent">
            <div className="topContent" onClick={() => setModalOpen(false)}>
              <IoIosCloseCircleOutline className="closeButton" size={28} />
            </div>
            <div className="imageContainer">
              <img
                src={`${imagesList[index]}`}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
