import { motion } from "framer-motion";
import { IoHomeOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { SiTalenthouse } from "react-icons/si";
import { MdOutlineAssignment } from "react-icons/md";
import { RiGroupLine } from "react-icons/ri";
import { MdOutlineContactPage } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: -50,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const navigate = useNavigate();
  const items = [
    { onClick: "/", text: "Home", icon: <IoHomeOutline /> },
    { onClick: "/aboutme", text: "About Me", icon: <GoPerson /> },
    { onClick: "/skills", text: "Skills", icon: <SiTalenthouse /> },
    { onClick: "/projects", text: "Projects", icon: <MdOutlineAssignment /> },
    {
      onClick: "/testimonials",
      text: "testimonials",
      icon: <RiGroupLine />,
    },
    {
      onClick: "/contactme",
      text: "Contact Me",
      icon: <MdOutlineContactPage />,
    },
  ];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.div
          onClick={() => navigate(item.onClick)}
          key={item.text}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div>{item.icon}</div>
          {item.text}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Links;
