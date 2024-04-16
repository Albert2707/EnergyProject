import "./Outcome.scss"
const Outcome = () => {
  return (
    <section className="outcome" id="outcome">
      <div className="container">
        <div className="wrapper">
          <div className="video">

            <video src="/video/Future.mp4" controls={true} autoPlay={true} loop={true} muted={true} />
          </div>

          <div className="article">
            <div className="outcome-p">
              <span>
                Cost and Emissions Reduction:
              </span>
              <p>
                -Through the precise optimization of energy consumption driven by DeepMind's AI capabilities, organizations can anticipate significant reductions in operational costs and carbon emissions. This optimization may extend beyond the initial 40% achieved in data center cooling systems, potentially leading to even more substantial savings.
                - The financial benefits of reduced energy expenditure can be reinvested into core operations or allocated towards further sustainability initiatives, fostering a cycle of continuous improvement and innovation.
                - By curbing carbon emissions, organizations not only contribute to mitigating climate change but also position themselves as responsible stewards of the environment, enhancing their reputation and attractiveness to environmentally conscious consumers and investors.
              </p>
            </div>
            <div className="outcome-p">
              <span>
                Enhanced Resilience and Sustainability:
              </span>
              <p>
                - The proactive approach to energy management enabled by DeepMind's predictive capabilities equips organizations with the agility to navigate through dynamic energy market conditions and supply chain disruptions.
                - By optimizing energy usage and reducing reliance on non-renewable resources, organizations bolster their resilience against future energy shocks and regulatory changes, ensuring sustained operational continuity.
                - Embracing sustainable energy practices not only mitigates environmental impact but also future-proofs organizations against escalating energy costs and resource
              </p>
            </div>

            <div className="outcome-p">
              <span>
                Stimulus for Technological Advancement:
              </span>
              <p>
                - DeepMind's integration into energy management systems serves as a powerful impetus for technological innovation across sectors.
                - The collaboration between AI-driven energy optimization and emerging technologies like renewable energy integration and smart grid infrastructure fosters synergies that propel the development of more efficient and sustainable solutions.
                - By pioneering innovative energy management approaches, organizations position themselves at the forefront of technological advancement, driving industry-wide transformation and establishing themselves as leaders in sustainability and efficiency.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Outcome