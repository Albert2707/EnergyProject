import "./Team.scss"
const Team = () => {

  /**        Albert Joan Agramonte Suero
        Darian Anderson King Arias - 1125022
        Erick Vásquez 1122627 */
  return (
    <section className="team">

      <div className="container">
        <div className="teamTitle">
          <span>
            Our Team
          </span>
        </div>
        <div className="wrapper">
          <div className="card">
            <div className="image">
              <img src="https://images.pexels.com/photos/20511145/pexels-photo-20511145/free-photo-of-a-woman-with-long-hair-and-a-white-sweater.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className="memberInfo">
              <div className="top">

                <span className="memberName">Albert Joan Agramonte</span>
                <span className="memberId">1225332</span>
              </div>
              <span className="memberCareer">Software engineering</span>
            </div>

          </div>
          <div className="card">
            <div className="image">
              <img src="https://images.pexels.com/photos/20511145/pexels-photo-20511145/free-photo-of-a-woman-with-long-hair-and-a-white-sweater.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className="memberInfo">
              <div className="top">

                <span className="memberName">Darian Anderson King Arias</span>
                <span className="memberId">1125022</span>
              </div>
              <span className="memberCareer">System engineering</span>
            </div>

          </div>
          <div className="card">
            <div className="image">
              <img src="https://images.pexels.com/photos/20511145/pexels-photo-20511145/free-photo-of-a-woman-with-long-hair-and-a-white-sweater.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className="memberInfo">
              <div className="top">

                <span className="memberName">Erick Vásquez</span>
                <span className="memberId">1122627</span>
              </div>
              <span className="memberCareer">Software engineering</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Team