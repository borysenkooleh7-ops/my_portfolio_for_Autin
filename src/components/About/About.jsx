import React from "react";
import AboutSVG from "../../assets/images/about.svg";
import "./About.scss";

const About = () => {
  return (
    <section
      className="app__about"
      id="about"
      data-aos="fade-right"
      data-aos-offset="230"
      data-aos-delay="450"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
    >
      <div className="app__about-container">
        <div className="app__about-container_text">
          <h2>About</h2>
          <p>
            Hello! My name is Austin Kniga Bartlett and I am a university student specializing in full-stack development and artificial intelligence.
            I focus on building complete, high-quality solutions—from intuitive user interfaces to scalable backend systems and intelligent AI-powered features.
          </p>

          <p>
            I’m continuously expanding my knowledge in web technologies, APIs, databases, cloud tools, and machine learning. Outside of school,
            I spend most of my time building personal projects and improving my main stack.
            I’m always looking for opportunities to learn, innovate, and challenge myself as a developer.
          </p>

          <p>
            Right now, I am focused on mastering my main stack and expanding my capabilities as a full-stack developer and AI engineer. at{" "}
            <a
              href="https://nexplay.gg/"
              target="_blank"
              className="app__links"
            >
              Nexplay
            </a>
          </p>
        </div>
        <div className="app__about-container_image">
          <img src={AboutSVG} alt="Programming" />
        </div>
      </div>
    </section>
  );
};

export default About;
