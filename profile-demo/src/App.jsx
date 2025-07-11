import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import HeroVideo from "./Components/HeroVideo/HeroVideo"
import OurWork from "./Components/OurWork/OurWork"
import OurServices from "./Components/OurServices/OurServices"
import AboutUs from "./Components/AboutUs/AboutUs"
import AboutUsText from "./Components/AboutUsText/AboutUsText"


function App() {
  return <>
  
    <Navbar/>
    <Hero/>
    <HeroVideo/>
    <OurWork/>
    <OurServices/>
    <AboutUs/>
    <AboutUsText/>
    <div className="h-screen"></div>

  </>
}

export default App
