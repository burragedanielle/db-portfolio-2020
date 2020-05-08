import React from "react";
// import NavBar from "../components/navbar";
import HeroBanner from "../components/herobanner";
import About from "../components/aboutMe";
import Projects from "../components/projects";
import Navigation from "../components/navbar";
// import TechSkills from "../components/techSkills";

const MainPage = () => {
  return (
    <div>
      <div className="main_menu">
        <section className="hero-width bg-lightGray mb-75px">
          <HeroBanner />
        </section>

        {/* <TechSkills /> */}
        <section className="hero-width mb-75px">
          <About />
          <Projects />
        </section>
      </div>
    </div>
  );
};

export default MainPage;
