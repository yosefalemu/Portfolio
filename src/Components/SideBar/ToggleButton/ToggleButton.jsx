import { motion } from "framer-motion";

const ToggleButton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            open: { d: "M 3 16.5 L 17 2.5" },
            closed: { d: "M 2 2.5 L 20 2.5" },
          }}
        />
        <motion.path
          strokeWidth="3"
          strokeLinecap="round"
          stroke="black"
          d="M 2 11.9 L 20 11.9"
          variants={{
            open: { opacity: 0 },
            closed: { opacity: 1 },
          }}
        />
        <motion.path
          strokeWidth="3"
          strokeLinecap="round"
          stroke="black"
          variants={{
            open: { d: "M 3 2.5 L 17 16.346" },
            closed: { d: "M 2 21.346 L 20 21.346" },
          }}
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
