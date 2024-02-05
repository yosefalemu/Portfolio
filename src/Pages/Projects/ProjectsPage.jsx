import React, { useEffect, useState } from "react";
import "./projects.scss";
import NavBar from "../../Components/NavBar/NavBar";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { RiExternalLinkFill } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { DiGithubFull } from "react-icons/di";
import data from "../../utils/data/index.json";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  const lengthOfProjects = data.projects.length;
  const [modalOpen, setModalOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [imagesIndex, setImagesIndex] = useState(0);
  const [projects, setProjects] = useState(data.projects[index]);
  const lengthOfProjectImages = projects.images.length;

  const handleChangeSlide = (cases) => {
    if (cases === "left") {
      if (index === 0) {
        setIndex(lengthOfProjects - 1);
      } else {
        setIndex(index - 1);
      }
    } else {
      if (index === lengthOfProjects - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }
  };
  useEffect(() => {
    setProjects(data.projects[index]);
  }, [index]);

  useEffect(() => {
    if (modalOpen) {
      setTimeout(() => {
        if (imagesIndex < lengthOfProjectImages - 1) {
          setImagesIndex(imagesIndex + 1);
        } else {
          setImagesIndex(0);
        }
      }, 3000);
    }
  }, [imagesIndex, modalOpen]);
  return (
    <div>
      <NavBar />
      <div className="projectContainer">
        {modalOpen === true ? null : (
          <FaChevronLeft
            className="leftArrow"
            size={32}
            color="#00abfa"
            onClick={() => handleChangeSlide("left")}
          />
        )}
        {modalOpen === true ? null : (
          <FaChevronRight
            className="rightArrow"
            size={32}
            color="#00abfa"
            onClick={() => handleChangeSlide("right")}
          />
        )}
        <div className="projectWrapper">
          <h1 className="projectTitle">Projects</h1>
          <div className="wholeContainer">
            <div className="imageContainer">
              <img
                src={`${projects.mainimage}`}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "15px",
                  borderBottomRightRadius: "0px",
                  borderTopRightRadius: "0px",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="projectContent">
              <h1>{projects.projectTitle}</h1>
              <p>{projects.projectDescription}</p>
              <div className="buttonContainer">
                <div className="buttonWrapper">
                  <div
                    className="detailButton"
                    onClick={() => setModalOpen(true)}
                  >
                    Preview
                  </div>
                  {projects.githublink === "private" ? (
                    <p className="private">Private Github</p>
                  ) : (
                    <Link
                      to={`${projects.githublink}`}
                      className="githubButton"
                    >
                      <DiGithubFull color="#00abfa" size={28} />
                      <RiExternalLinkFill
                        size={28}
                        color="#00abfa"
                        className="linkIcon"
                      />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {modalOpen && (
          <div className="overlayComponent">
            <div className="topContent">
              <IoIosCloseCircleOutline
                className="closeButton"
                size={34}
                onClick={() => setModalOpen(false)}
              />
            </div>
            <div className="imageContainer">
              <img
                src={`${projects.images[imagesIndex]}`}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "fill" }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
