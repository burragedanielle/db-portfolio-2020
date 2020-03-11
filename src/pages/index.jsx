import React from "react";
// import NavBar from "../components/navbar";
import HeroBanner from "../components/herobanner";
import About from "../components/aboutMe";
import Projects from "../components/projects";
// import TechSkills from "../components/techSkills";

const MainPage = () => {
  return (
    <div>
      <header className="header_area">
        <div className="main_menu">
          <div className="navbar navbar-expand-lg navbar-light">
            <div
              className="collapse navbar-collapse offset"
              id="navbarSupportedContent"
            >
              <div className="nav navbar-nav menu_nav justify-content-end">
                {/* <NavBar /> */}
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
          </div>
        </div>
      </header>
    </div>
  );
};

export default MainPage;
