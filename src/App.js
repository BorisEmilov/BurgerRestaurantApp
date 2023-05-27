import React from "react";
import Navbar from './components/navbar/Navbar'
import Hero from "./components/hero/Hero";
import Food from "./components/food/Food";
import Footer from "./components/footer/Footer";

import Craft1 from './assets/eiliv-aceron-pu6b4yIlQF4-unsplash.jpg'
import Craft2 from './assets/or-hakim-0iR0M3lFNdc-unsplash.jpg'
import Craft3 from './assets/amirali-mirhashemian-jh5XyK4Rr3Y-unsplash.jpg'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Food bgImage1={Craft1} bgImage2={Craft2}/>
      <Food bgImage={Craft3}/>
      <Footer />
    </>
  );
}

export default App;
