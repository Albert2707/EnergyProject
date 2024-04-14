import "./About.scss"
import { Collection } from '../../assets/Images/Image'
import { motion, useScroll, useTransform } from "framer-motion"
import TypeWriter from "../TypeWriter/TypeWriter";
import { useRef } from "react";

const About = () => {

    const arrowRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: arrowRef,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
    const variants = {
        initial: {
            y: 0,
            opacity: 0,
        },
        animate: {
            y: 15,
            opacity: 1,
            transition: {
                duration: 2,
                repeat: Infinity,
            },
        },
    };
    return (
        <section className="about">

            <div className="container">
                <div className="wrapper">

                    <div className="left">
                        <img src={Collection.Wind} alt="" />
                    </div>

                    <div className="title">
                        <TypeWriter text="Affordable and Clean Energy" speed={50} />

                        <motion.p initial={{ x: 20, opacity: 0 }} animate={{ opacity: 1, x: 0 }}
                            transition={{ type: "tween", duration: 0.3, delay: 0.3 }}

                            className="summary">Ensure access to affordable, reliable, sustainable and modern energy for all

                            Goal 7 is about ensuring access to clean and affordable energy, which is key to the development of agriculture, business, communications, education, healthcare and transportation.</motion.p>
                        <motion.a initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{
                            type: "spring",
                            damping: 15,
                            stiffness: 400,
                            duration: 0.3,
                        }} href="https://sdgs.un.org/es/goals" target="_blank"><span>More</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#F3B33E" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </motion.a>
                    </div>
                </div>
            </div>

            <motion.div className="scrollDown" ref={arrowRef} style={{ y }}>
                <motion.span variants={variants} initial="initial" animate="animate" >

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#F3B33E">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                    </svg>
                </motion.span>

            </motion.div>


        </section>
    )
}

export default About