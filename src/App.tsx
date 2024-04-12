import About from './componentes/About/About'
import Ai from './componentes/Ai/Ai'
import Moreinfo from './componentes/Moreinfo/Moreinfo'
import Navbar from './componentes/Navbar/Navbar'
import Team from './componentes/Team/Team'
import "./index.scss"
function App() {

  return (
    <>
      <Navbar />
      <About />
      <Moreinfo />
      <Team />
      <Ai />
    </>
  )
}

export default App
