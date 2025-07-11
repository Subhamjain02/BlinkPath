import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import HeroVideo from "./Components/HeroVideo/HeroVideo"
import OurWork from "./Components/OurWork/OurWork"
import OurServices from "./Components/OurServices/OurServices"
import AboutUs from "./Components/AboutUs/AboutUs"
import TempAbout from "./Components/TempAbout.jsx/TempAbout"

function App() {
  return <>
  
    <Navbar/>
    <Hero/>
    <HeroVideo/>
    <OurWork/>
    <OurServices/>
    <AboutUs/>
    {/* <TempAbout/> */}
    <div className="h-[100vh]"></div>

  </>
}

export default App
