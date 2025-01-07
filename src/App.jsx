import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Element } from "react-scroll";
import Header1 from './components/Header1.jsx';
import Hero from './components/Hero.jsx';
import T1 from "./components/T1.jsx";
import T2 from "./components/T2.jsx";
import T3 from "./components/T3.jsx";
import OurServices from "./components/OurServices.jsx";
import ChooseUs from "./components/ChooseUs.jsx";
import ClientStats from "./components/ClientStats.jsx";
import Testimonial from "./components/Testimonial.jsx";
import FAQ from './components/FAQ.jsx';
import StartNow from "./components/StartNow.jsx";
import Footer from "./components/Footer.jsx";
import ConsultationForm from "./components/ConsultationForm.jsx";
import TeamSlider from "./components/TeamSlider.jsx";
import HowWeWork from "./components/HowWeWork.jsx";
import LatestBlog from "./components/LatestBlog.jsx";
import Footer2 from "./components/Footer2.jsx";

const App = () => {
  return (
    <Router>
      <Header1 />
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="t1">
        <T1 />
      </Element>
      <T2 />
      <T3 />
      <Element name="ourservices">
        <OurServices />
      </Element>
      <ChooseUs />
      <Element name="latestblog">
        <LatestBlog />
      </Element>
      <HowWeWork />
      <Element name="consultationform">
        <ConsultationForm />
      </Element>
      <Element name="ts">
        <TeamSlider/>
      </Element>
      <Element name="faq">
        <FAQ />
      </Element>
      <StartNow />
      <Footer />
      <Footer2/>
    </Router>
  );
};

export default App;
