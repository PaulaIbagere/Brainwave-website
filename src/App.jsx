import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Button from "./components/Button";
import Collaboration from "./components/Collaboration";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return( 
  <>
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      {/* <Button className="mt-10" href="#login">
        Something
      </Button> */}
      <Header/>
      <Hero/>
      <Benefits/>
      <Collaboration/>
      <Services/>
      <Pricing/>
      <Roadmap/>
      <Footer/>
    </div>
    <ButtonGradient/>
  </>
  )
  
}

export default App;
