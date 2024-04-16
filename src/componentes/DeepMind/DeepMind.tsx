import './DeepMind.scss'
import { Collection } from '../../assets/Images/Image'
import { ArrowDashed } from '../../assets/Svg/Svg'

const DeepMind = () => {
    return (
        <div className="container">
            <div className="wrapper">
                <div className="left">
                    <span>DeepMind AI to optimize the energy efficiency of various structures and systems</span>

                    <p>
                        DeepMind is an artificial intelligence model developed by Google to optimize energy efficiency. It was integrated into the management of their data center's cooling systems, reducing consumption by 40% while keeping the data center fully operational.
                    </p>
                </div>
                <div className="right">
                    <img src={Collection.Robot} />
                </div>
                <ArrowDashed/>
            </div>
        </div>
    )
}

export default DeepMind