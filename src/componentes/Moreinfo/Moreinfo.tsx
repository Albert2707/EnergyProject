import { useContext, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import "./Moreinfo.scss";
import { scrollContext } from "../../context/scrollContext";
import { ContextProps } from "../../context/type";
const Moreinfo = () => {
  const showCard1 = useRef(null);
  const showCard2 = useRef(null);
  const problemRef = useRef(null);
  const { SetsectionChange } = useContext(scrollContext) as ContextProps;
  const { scrollYProgress } = useScroll({
    target: showCard1,
    offset: ["0 1", "1 1"],
  });
  const { scrollYProgress: Card2 } = useScroll({
    target: showCard2,
    offset: ["0 1", "1 1"],
  });
  const isInView = useInView(problemRef,{
    amount:"all"
  });

  const translateCard1 = useTransform(scrollYProgress, [0, 1], [-150, 0]);
  const translateCard2 = useTransform(Card2, [0, 1], [150, 0]);

  useEffect(() => {
    SetsectionChange((prev) => ({ ...prev, problem: isInView }));
  }, [isInView]);
  return (
    <section className="Moreinfo" id="Problem" ref={problemRef}>
      <div className="container">
        <div className="wrapper">
          <motion.div
            className="card"
            ref={showCard1}
            style={{ x: translateCard1 }}
          >
            <div className="logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                />
              </svg>
            </div>
            <div className="info">
              <span>789</span>
              <p>million people without electricity</p>
            </div>
            <span className="covid">BEFORE THE COVID-19</span>
          </motion.div>
          <div className="card">
            <div className="logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.412 15.655 9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457 3 3m5.457 5.457 7.086 7.086m0 0L21 21"
                />
              </svg>
            </div>
            <div className="info">
              <p>
                Affordable and reliable energy is essential in health centers
              </p>
            </div>
            <span className="covid">Consequences of the covid-19</span>
          </div>
          <motion.div
            className="card"
            ref={showCard2}
            style={{ x: translateCard2 }}
          >
            <div className="logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5h6.75V15H4.5v-4.5ZM3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z"
                />
              </svg>
            </div>
            <div className="info">
              <p>More intense effort is needed in reinvigorated energy</p>
            </div>
            <span className="covid">CLEAN ENERGY</span>
          </motion.div>

          <svg
            className="cursorClick"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="40"
            viewBox="0 0 28.3223 37.63574"
          >
            <path
              d="M6.52883,23.49051l10.63838,13.41783c.81783,1.0315,2.69904,.90619,3.53553,0,2.05386-2.22497,4.10772-4.44995,6.16158-6.67492,.92066-.99736,.98036-2.54113,0-3.53553-3.95468-4.01131-7.90936-8.02262-11.86403-12.03393l-3.02956,3.92644c.38089,.25401,.75402,.55247,1.15577,.77077,1.50516,.81785,3.42243-.21637,4.913-.68305,2.83344-.88712,5.66688-1.77424,8.50032-2.66136,2.32609-.72827,2.4267-4.13586,0-4.8214C18.37679,8.88934,10.71853,5.23266,3.76189,.3804,2.17876-.72384-.01647,.75341,.00009,2.53908,.07929,11.07741,.15848,19.61574,.23767,28.15407c.01749,1.88525,2.11372,3.12841,3.7618,2.15868,1.5233-.89631,2.51473-2.37258,3.64053-3.71231,.71592-.85196,1.4412-1.697,2.14816-2.55638,.80694-.98092,1.13006-1.69082,.91914-2.98591-.2172-1.33366-1.87372-2.07631-3.0753-1.7461-1.41738,.38952-1.96394,1.73771-1.7461,3.0753l.03067,.18834,.64293-2.43237-3.0688,3.65197c-.74726,.88926-1.20888,1.72588-2.01483,2.2001l3.7618,2.15868c-.07919-8.53833-.15839-17.07666-.23758-25.61499L1.2383,4.69775c7.28765,5.08313,15.42265,8.90376,23.97232,11.31901v-4.8214c-3.82897,1.19881-7.65795,2.39762-11.48692,3.59643l1.9264,.25202-1.15577-.77077c-2.4017-1.60166-4.98692,1.94105-3.02956,3.92644,3.95468,4.01131,7.90936,8.02262,11.86403,12.03393v-3.53553c-2.05386,2.22497-4.10772,4.44995-6.16158,6.67492h3.53553c-3.54613-4.47261-7.09225-8.94522-10.63838-13.41783-.83953-1.05887-2.65807-.87747-3.53553,0-1.04585,1.04585-.84167,2.47396,0,3.53553Z"
              fill="#f3b33e"
              origin="undraw"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Moreinfo;
