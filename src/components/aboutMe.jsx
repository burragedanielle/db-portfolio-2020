import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <section className="mb-lg-100">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xl-6 mb-5 mb-md-0 pb-5 pb-md-0">
              <div className="img-styleBox">
                <div className="styleBox-border">
                  <img
                    class="styleBox-img1 img-fluid"
                    src="img/home/about-img1.png"
                    alt=""
                  />
                </div>
                <img
                  class="styleBox-img2 img-fluid"
                  src="img/home/about-img2.png"
                  alt=""
                />
              </div>
            </div>
            <div class="col-md-6 pl-md-5 pl-xl-0 offset-xl-1 col-xl-5">
              <div class="section-intro mb-lg-4">
                <h4 class="intro-title">About Me</h4>
                <h2>The skills I've learned so far</h2>
              </div>
              <p>
                I am certified in Full Stack Web Development from the University of Kansas, where I gained intensive practical experience building full-stack web applications from concept to completion. I have over 150 hours of experience applying my skills in HTML, CSS, JavaScript, and Node.js, while utilizing frameworks such React.js and Express.js in team-oriented environments. I am passionate about delivering powerful user-experiences, and look forward to continuing to learn how to best apply myself. 
              </p>
              <p>
              I have a background in digital marketing, textile sourcing, and design. I understand the importance of effective design, strategic collaboration, and delivering a phenomenal user-experience before launch. 
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
