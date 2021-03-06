import React from "react";
import Navigation from "../components/navbar";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div>
      <div className="hero-page">
        <div className="container">
          <div className="navigation">
            <Navigation />
          </div>
          <div className="main-copy row align-items-center container">
            <div className="col align-middle">
              <h1 className="main-headline">Hi, my name is Danielle!</h1>
              {/* <h3 className="main-subheadline pt-2">
                I'm a web developer & digital designer
              </h3> */}
              <div className="main-para pt-2">
                <p>
                  I am a
                  <span className="para-focus">
                    {" "}
                    front-end web developer and digital designer
                  </span>{" "}
                  with award-winning experience in digital marketing and content
                  development for ecommerce. I’ve been recognized for my
                  imaginative approach to problem-solving and ability to bring
                  concepts to life. My passion is to take big ideas and turn
                  them into functional code.
                </p>
                <span>
                  <a className="para-focus" href="#projects">
                    {" "}
                    Please see my work below!
                  </a>
                </span>
              </div>
              <div className="row justify-content-left">
                <div className="col">
                  <a href="https://www.linkedin.com/in/danielleburrage/">
                    <i
                      className="fab fa-linkedin-in"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="in/danielleburrage"
                    ></i>
                  </a>
                  <a href="https://github.com/burragedanielle">
                    <i
                      className="fab fa-github-alt"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="@burragedanielle"
                    ></i>
                  </a>
                  <a href="mailto:burragedanielle@gmail.com">
                    <i
                      className="far fa-envelope"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="burragedanielle@gmail.com"
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
