import { useContext, useEffect, useRef } from "react";
import { Heart } from "../../assets/Svg/Svg";
import Application from "../Application/Application";
import DeepMind from "../DeepMind/DeepMind";
import "./Ai.scss";
import { motion, useInView } from "framer-motion";
import { scrollContext } from "../../context/scrollContext";
import { ContextProps } from "../../context/type";
const Ai = () => {
  const today = new Date().toLocaleDateString();
  const ai = useRef(null);
  const { SetsectionChange } = useContext(scrollContext) as ContextProps;
  const isInView = useInView(ai,{
    // amount:"some"
    margin:"-500px 0px -500px 0px"
  });
  const possibleRef = useRef(null);
  const inView = useInView(possibleRef);

  const variants = {
    initial: {
      x: -100,
    },
    animate: {
      x: 0,
      transition: {
        delay: 0.1,
        type: "spring",
        stiffness: 150,
      },
    },
  };

  useEffect(() => {
    SetsectionChange((prev) => ({ ...prev, deepMind: isInView }));
  }, [isInView]);
  return (
    <section className="Ai" id="DeepMind" ref={ai}>
      <div className="container">
        <motion.div
          className="wrapper"
          variants={variants}
          ref={possibleRef}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          <div className="video">
            <video
              src="/video/CleanEnergy.mp4"
              controls={true}
              autoPlay={true}
              loop={true}
              muted={true}
            />
            <div className="owner">
              <span className="name">Darian King</span>
              <span className="date">{today}</span>
            </div>
          </div>
          {/*Ai solutions*/}
          <div className="aiSolutions">
            <span>Look for possible AI that can help solve the need</span>
            <p>
              This system uses AI algorithms to analyze real-time data on energy
              consumption, production, and other factors to optimize energy
              efficiency and reduce costs.
            </p>
          </div>
        </motion.div>
        <DeepMind />
        <Heart />
        <Application />
      </div>
    </section>
  );
};

export default Ai;
