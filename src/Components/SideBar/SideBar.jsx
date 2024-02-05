import React, { useState } from "react";
import ToggleButton from "./ToggleButton/ToggleButton";
import Links from "./Links/Links";
import { motion } from "framer-motion";
import "./sidebar.scss";

const Sidebar = () => {
  const variants = {
    open: {
      clipPath: "circle(1600px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 250vw 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sides" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
