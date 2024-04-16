import "./Navbar.scss";
const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="wrapper">
          <div className="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="#F3B33E"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              />
            </svg>
          </div>
          <div className="links">
            <a href="#about"> About</a>
            <a href="#Problem"> Problem</a>
            <a href="#team"> Team</a>
            <a href="#DeepMind">DeepMind</a>
            <a href="#outcome">Outcome</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
