import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Hero, Navbar, Feedbacks, Tech, Works, StarsCanvas } from "./components"
const App = () => {
  return (
    <BrowserRouter>
      <div className="realtive z-0 bg-primary">

        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="relative z-0">
          <About />
          <StarsCanvas />
        </div>
        {/* <Experience /> */}
        <div className="relative z-0">
          <Tech />
          <StarsCanvas />
        </div>
        <div className="relative z-0">
          <Works />
          <StarsCanvas />
        </div>
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
