import { useContext } from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";
import { scrollContext } from "../../context/scrollContext";
import { ContextProps } from "../../context/type";
const Navbar = () => {
  const { sectionChange } = useContext(scrollContext) as ContextProps;

  const variants = {
    initial: {
      backgroundColor: "#222",
      scale: 0,
    },
    animate: {
      backgroundColor: "#f3b33e",
      scale: 1,
      transition: {},
    },
  };
  return (
    <nav>
      <div className="container">
        <div className="wrapper">
          <div className="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="#F3B33E"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              />
            </svg>
          </div>
          <div className="links">
            <div className="link">
              <a className="" href="#about">
                About
              </a>
              <motion.span
                className="underline"
                variants={variants}
                initial="initial"
                animate={sectionChange.about ? "animate" : "initial"}
              ></motion.span>
            </div>

            <div className="link">
              <a className="" href="#Problem">
                Problem
              </a>
              <motion.span
                className="underline"
                variants={variants}
                initial="initial"
                animate={sectionChange.problem ? "animate" : "initial"}
              ></motion.span>
            </div>

            <div className="link">
              <a className="" href="#team">
                Team
              </a>
              <motion.span
                className="underline"
                variants={variants}
                initial="initial"
                animate={sectionChange.team ? "animate" : "initial"}
              ></motion.span>
            </div>

            <div className="link">
              <a className="" href="#DeepMind">
                DeepMind
              </a>
              <motion.span
                className="underline"
                variants={variants}
                initial="initial"
                animate={sectionChange.deepMind ? "animate" : "initial"}
              ></motion.span>
            </div>

            <div className="link">
              <a className="" href="#outcome">
                Outcome
              </a>
              <motion.span
                className="underline"
                variants={variants}
                initial="initial"
                animate={sectionChange.outCome ? "animate" : "initial"}
              ></motion.span>
            </div>
            <a
              className="goalsLink"
              href="https://sdgs.un.org/es/goals"
              target="_blank"
            >
              Goals
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
