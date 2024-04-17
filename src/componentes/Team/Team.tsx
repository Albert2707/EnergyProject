import { useContext, useEffect, useRef } from "react";
import "./Team.scss";
import { useInView, motion } from "framer-motion";
import { scrollContext } from "../../context/scrollContext";
import { ContextProps } from "../../context/type";
import { Collection } from "../../assets/Images/Image";
const Team = () => {
  const { SetsectionChange } = useContext(scrollContext) as ContextProps;

  const teamRef = useRef(null);
  const isInView = useInView(teamRef, {
    margin: "0px 100px -500px 0px",
  });

  const variants = {
    initial: {
      y: 50,
    },

    animate: {
      y: 0,
      transition: {
        type: "spring",
        damping: 5,
        stiffness: 20,
      },
    },
  };
  useEffect(() => {
    SetsectionChange((prev) => ({ ...prev, team: isInView }));
  }, [isInView]);

  return (
    <section className="team" id="team">
      <div className="container">
        <div className="teamTitle">
          <span>Our Team</span>
        </div>
        <motion.div
          className="wrapper"
          ref={teamRef}
          variants={variants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <motion.div className="card">
            <div className="image">
              <img src={Collection.Albert} alt="" />
            </div>
            <div className="memberInfo">
              <div className="top">
                <span className="memberName">Albert Joan Agramonte</span>
                <span className="memberId">1225332</span>
              </div>
              <span className="memberCareer">Software engineering</span>
            </div>
          </motion.div>
          <motion.div className="card">
            <div className="image">
              <img src={Collection.King} alt="" />
            </div>
            <div className="memberInfo">
              <div className="top">
                <span className="memberName">Darian Anderson King Arias</span>
                <span className="memberId">1125022</span>
              </div>
              <span className="memberCareer">System engineering</span>
            </div>
          </motion.div>
          <motion.div className="card">
            <div className="image">
              <img src={Collection.Erick} alt="" />
            </div>
            <div className="memberInfo">
              <div className="top">
                <span className="memberName">Erick Vásquez</span>
                <span className="memberId">1122627</span>
              </div>
              <span className="memberCareer">International Business</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
