import { useScroll, useSpring, motion } from "framer-motion";
import "./ProgressBar.scss";
import { useContext } from "react";
import { scrollContext } from "../../context/scrollContext";
import { ContextProps } from "../../context/type";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const variants = {
    initial: {
      backgroundColor: "#f3b33e",
    },
    animate: {
      backgroundColor: "#222",
      transition: {},
    },
  };
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001,
  });
  const { sectionChange } = useContext(scrollContext) as ContextProps;

  return (
    <motion.div
      variants={variants}
      animate={sectionChange ? "animate" : "initial"}
      initial="initial"
      style={{ scaleX }}
      className="progress"
    />
  );
};

export default ProgressBar;
