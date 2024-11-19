import "./App.css";
import AboutMantaq from "./sections/AboutMantaq";
import Faqs from "./sections/Faqs";
import HeroSection from "./sections/HeroSection";
import Services from "./sections/Services";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";
import Footer from "./utils/Footer";
import Nav from "./utils/Nav";
import Wrapper from "./utils/Wrapper";
import React from "react";
import AOS from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);
  const scrolToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);
  return (
    <>
      <Wrapper>
        <Nav />
        <HeroSection />
        <AboutMantaq />
        <Services />
        <TechStack />
        <Testimonials />
        <Faqs />
        <Footer />
      </Wrapper>
      <CSSTransition
        in={isVisible}
        timeout={300}
        classNames="modal"
        unmountOnExit
      >
        <button
          className="fixed w-[50px] h-[50px] rounded-full bg-primary bottom-[5vh] right-[40px] flex justify-center items-center z-50"
          onClick={scrolToTop}
        >
          <FontAwesomeIcon icon={faArrowUp} className="text-white" size="xl" />
        </button>
      </CSSTransition>
    </>
  );
}

export default App;
