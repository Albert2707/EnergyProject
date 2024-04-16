import { Heart } from "../../assets/Svg/Svg";
import Application from "../Application/Application";
import DeepMind from "../DeepMind/DeepMind";
import "./Ai.scss";
const Ai = () => {
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="25"
              viewBox="0 0 70.63932 25.23866"
            >
              <path
                d="M2.41072,7.75929c17.02568-.71364,34.05136-1.42727,51.07704-2.14091l14.70022-.61616-.6646-4.9107c-12.91114,2.24931-25.50153,6.02077-37.59863,11.04984-1.14989,.47804-1.99105,1.41114-1.79075,2.743,.18277,1.21528,1.18621,2.16637,2.45535,2.1677,3.4797,.00364,6.85119,.81258,9.99116,2.3105v-4.31735c-1.72999,.82125-3.65929,1.50251-5.2661,2.545-1.85577,1.20401-2.56038,3.57856-1.73346,5.61093,.99904,2.45541,3.31379,2.88317,5.70214,3.03169,3.21346,.19982,3.20156-4.80092,0-5-.42704-.02655-.86602-.10566-1.29319-.10946-.13576-.00121,.18317,.04243,.17324,.1348-.03856,.35884-.0895-.27388,.03982,.08986,.16194,.45549,.043-.29009,.0075,.15826-.02632,.33249-.53569,.38661,.03405,.1632,.2588-.10148,.50866-.24147,.75941-.3605,1.36673-.64881,2.73345-1.29761,4.10018-1.94642,1.63647-.77686,1.63166-3.53897,0-4.31735-3.94824-1.8835-8.12283-2.98855-12.51475-2.99314l.6646,4.9107c12.09709-5.02907,24.68748-8.80052,37.59863-11.04984,2.7805-.4844,2.12863-5.02778-.6646-4.9107C51.16231,.71586,34.13662,1.42949,17.11094,2.14313L2.41072,2.75929c-3.20582,.13437-3.22276,5.13508,0,5h0Z"
                fill="#f3b33e"
                origin="undraw"
              />
            </svg>
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
        <Heart/>
        <Application />
      </div>
    </section>
  );
};

export default Ai;
