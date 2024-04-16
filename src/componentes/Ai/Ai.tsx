import { Heart } from "../../assets/Svg/Svg";
import Application from "../Application/Application";
import DeepMind from "../DeepMind/DeepMind";
import "./Ai.scss";
const Ai = () => {
  const today = new Date().toLocaleDateString();
  return (
    <section className="Ai" id="DeepMind">
      <div className="container">
        <div className="wrapper">
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
        </div>
        <DeepMind />
        <Heart />
        <Application />
      </div>
    </section>
  );
};

export default Ai;
