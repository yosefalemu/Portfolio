import NavBar from "../../Components/NavBar/NavBar";
import "./homepage.scss";
import { useEffect, useRef, useState } from "react";
import { MdOutlineCloudDownload } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaStackOverflow } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaHandsClapping } from "react-icons/fa6";
import { GiCloudDownload } from "react-icons/gi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
import { init } from "ityped";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const HomePage = () => {
  const textRef = useRef();
  const [resumeModal, setResumeModal] = useState(false);
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Web Developer",
        "Mobile App Developer",
        "Machine Learning Engineer",
        "Electrical Engineer",
      ],
    });
  }, []);

  const containerVariants = {
    initial: { opacity: 0, y: "-100vh" },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
    exit: {
      opacity: 0,
      y: "100vh",
    },
  };

  const Star = ({ initial, final, duration }) => {
    const starVariants = {
      initial: {
        x: initial,
        y: 0,
      },
      animate: {
        y: "100vh",
        x: final,
        transition: {
          repeat: Infinity,
          duration: duration,
        },
      },
    };

    return <motion.div className="stars" variants={starVariants} />;
  };

  return (
    <motion.div
      className="homepagecontainer"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <NavBar />
      <div className="homePageWrapper">
        <Star initial={0} final="100vw" duration={8} />
        <Star initial={100} final="120vw" duration={8} />
        <Star initial={-50} final="80vw" duration={6} />
        <Star initial="70vw" final={0} duration={7} />
        <Star initial={80} final="50vw" duration={7} />
        <Star initial="-20vw" final="130vw" duration={8} />
        <Star initial={50} final="20vw" duration={4} />
        <Star initial="-80vw" final="70vw" duration={6} />
        <Star initial={10} final="120vw" duration={5} />
        <Star initial={-60} final="40vw" duration={7} />
        <Star initial="40vw" final="140vw" duration={8} />
        <Star initial="-10" final="80vw" duration={5} />
        <Star initial="90vw" final="-10vw" duration={6} />
        <Star initial="-70vw" final="30vw" duration={7} />
        <Star initial="30vw" final="-20vw" duration={8} />
        <Star initial="-40vw" final="110vw" duration={5} />
        <Star initial="110vw" final="-30vw" duration={6} />
        <div className="contentContainer">
          <div className="homeLeft">
            <div className="imagePortfolio" />
          </div>
          <div className="homeRight">
            <div className="homeRightTop">
              <h1 className="homeRightTopLeft">Hi there</h1>
              <h1 className="homeRightTopRight">
                <FaHandsClapping
                  size={45}
                  color="#FF9843"
                  className="clappingHand"
                />
              </h1>
            </div>
            <div className="homeRightTop">
              <h1 className="homeRightTopLeft">I'm</h1>
              <h1 className="homeRightTopRight">YOSEF ALEMU</h1>
            </div>
            <div className="homeRightMiddle">
              <h1 className="homeRightFreelance">Freelance</h1>
              <span className="homeRightMiddleText" ref={textRef}></span>
            </div>
            <div className="homeRightBottom">
              <div
                className="resumeDownload"
                onClick={() => setResumeModal(true)}
              >
                <h1>RESUME</h1>
                <MdOutlineCloudDownload size={32} />
              </div>
              <div className="socialIcons">
                <div className="github">
                  <a
                    href="https://github.com/yosefalemu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub size={32} color="#fff" />
                  </a>
                </div>
                <div className="linkedin">
                  <a
                    href="https://www.linkedin.com/in/yosef-alemu/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn size={32} />
                  </a>
                </div>
                <div className="stackOverFlow">
                  <a
                    href="https://stackoverflow.com/users/22899543/yosef-alemu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaStackOverflow size={32} />
                  </a>
                </div>
                <div className="telegram">
                  <a
                    href="https://t.me/Yosef2323"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTelegramPlane size={32} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <svg width="0" height="0">
            <linearGradient
              id="instagram-gradient"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop stopColor="#7a6ded" offset="0%" />
              <stop stopColor="#591885" offset="100%" />
            </linearGradient>
          </svg>
        </div>
        {resumeModal && (
          <div className="resumeContainer">
            <div className="resumeWrapper">
              <div className="resumeTop" onClick={() => setResumeModal(false)}>
                {/* Add download link for the resume */}
                <a href="./files/resume.pdf" download="resume.pdf">
                  <GiCloudDownload
                    size={28}
                    style={{ cursor: "pointer" }}
                    color="#2867b2"
                  />
                </a>
                <IoIosCloseCircleOutline
                  size={32}
                  style={{ cursor: "pointer" }}
                  color="red"
                />
              </div>
              {/* Render the PDF document */}
              <Document
                file="./files/resume.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
              >
                {/* Render the pages */}
                {Array.from(new Array(numPages), (el, index) => (
                  <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
              </Document>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default HomePage;
