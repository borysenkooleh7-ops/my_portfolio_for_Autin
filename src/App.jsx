import AOS from "aos";
import "aos/dist/aos.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import React, { useEffect } from "react";
import "./App.scss";
import {
  About,
  Contact,
  Earphone,
  Hero,
  Navbar,
  Projects,
  Skills,
} from "./components";

const App = () => {
  //aos initialization
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Earphone />
      <a
        href="https://wa.me/13432981517"
        target="_blank"
        rel="noopener noreferrer"
        className="app__whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </>
  );
};

export default App;
