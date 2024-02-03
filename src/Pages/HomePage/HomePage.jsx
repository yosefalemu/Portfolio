import NavBar from "../../Components/NavBar/NavBar";
import "./homepage.scss";
import { useEffect, useRef } from "react";
import { MdOutlineCloudDownload } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaStackOverflow } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaHandsClapping } from "react-icons/fa6";
import { motion, useAnimation } from "framer-motion";
import { init } from "ityped";

const HomePage = () => {
  const textRef = useRef();

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
              <button className="resumeDownload">
                <h1>RESUME</h1>
                <MdOutlineCloudDownload size={32} />
              </button>
              <div className="github">
                <FiGithub size={32} color="#fff" />
              </div>
              <div className="linkedin">
                <FaLinkedinIn size={32} />
              </div>
              <div className="stackOverFlow">
                <FaStackOverflow size={32} />
              </div>
              <div className="instagram">
                <FaInstagram
                  size={32}
                  style={{ fill: "url(#instagram-gradient)" }}
                />
              </div>
              <div className="twitter">
                <BsTwitterX size={32} />
              </div>
              <div className="telegram">
                <FaTelegramPlane size={32} />
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
      </div>
    </motion.div>
  );
};

export default HomePage;
