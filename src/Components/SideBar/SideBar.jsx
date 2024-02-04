import Links from "./Links/Links";
import ToggleButton from "./ToggleButton/ToggleButton";
import { motion } from "framer-motion";
import "./sidebar.scss";
import { useState } from "react";

const SideBar = () => {
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <motion.div className="sideBar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default SideBar;
