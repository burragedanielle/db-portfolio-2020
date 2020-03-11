import React from "react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div>
      <div className="hero-page d-flex container">
        <div className="main-copy row align-items-center">
          <div className="col">
            <h1 className="main-headline">Hi, my name is Danielle!</h1>
            <h3 className="main-subheadline pt-2">
              I'm a web developer & digital designer
            </h3>
            <div className="main-para pt-2">
            <p>
              I am a front-end web developer and digital designer with award-winning experience in digital marketing and content development for ecommerce. I’ve been recognized for my imaginative approach to problem-solving and ability to bring concepts to life. My passion is to take big ideas and turn them into functional code. <span className="intro-message"> Please see my work below!</span>
            </p>
            </div>
            <div className="row justify-content-left">
                <i className="fab fa-github-alt" data-toggle="tooltip" data-placement="bottom" title="@burragedanielle"></i>
                <i className="far fa-envelope" data-toggle="tooltip" data-placement="bottom" title="burragedanielle@gmail.com"></i>
                <i className="fab fa-linkedin-in" data-toggle="tooltip" data-placement="bottom" title="in/danielleburrage"></i>
            </div>
            {/* <div className="row justify-content-left">
                {/* <a href="/#aboutMe" class="button button-shadow mt-2 mt-lg-4">
                Learn More About Me
                </a> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
