import "./Ai.scss"
const Ai = () => {
    return (
        <section className="Ai">
            <div className="container">
                <div className="wrapper">
                    <div className="video">

                        <video src="/video/CleanEnergy.mp4" controls={true} autoPlay={true} loop={true} muted={true} />
                    </div>
                    {/*Ai solutions*/}
                    <div className="aiSolutions">
                        <span>Look for possible AIs that can help solve those needs</span>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Ai