import About from "./componentes/About/About";
import Ai from "./componentes/Ai/Ai";
import Moreinfo from "./componentes/Moreinfo/Moreinfo";
import Navbar from "./componentes/Navbar/Navbar";
import Outcome from "./componentes/Outcome/Outcome";
import ProgressBar from "./componentes/ProgressBar/ProgressBar";
import Team from "./componentes/Team/Team";
import "./index.scss";
function App() {
  return (
    <>
      <Navbar />
      <ProgressBar />
      <About />
      <Moreinfo />
      <Team />
      <Ai />
      <Outcome />
    </>
  );
}

export default App;
