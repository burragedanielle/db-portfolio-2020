import React from "react";
import { Link } from "react-router-dom";
import schedulez_screenshot from "../img/SchedulezScreenshot.png";
import allocat_screenshot from "../img/AllocatScreenshot.png";
import ecomm_screenshot from "../img/ecommpractice.png";

const Projects = () => {
  return (
    <div>
      <section id="projects" className="mb-lg-100">
        <div className="container">
          <div className="section-intro mb-75px">
            <h4 className="intro-title">Featured Projects</h4>
            <h2>See my ideas in action</h2>
          </div>
          <div className="row justify-content-center mx-auto">
            <div className="row mb-4">
              <div className="col-lg-4">
                <div className="featured-item">
                  <img
                    className="card-img rounded-0"
                    src={allocat_screenshot}
                    alt="Allocat Application"
                  />
                  <div className="item-body">
                    <h3>Allocat</h3>
                    <p>
                      A full stack MERN application that simplifies complex
                      projects through task allocation.{" "}
                    </p>
                    <p>
                      <strong>My Role:</strong> Designed a responsive and
                      dynamic UI using React, custom Bootstrap and JavaScript
                      ES6. Seamlessly connected UI to server-side code and
                      database, retrieving and rendering data. Completed with
                      four teammates.{" "}
                    </p>
                    <p>
                      <strong>Languages Used:</strong> JavaScript, HTML, CSS
                    </p>
                    <p>
                      <strong>Frameworks Used:</strong> React, Express, Node.js,
                      Bootstrap
                    </p>
                    <p>
                      <strong>Database:</strong> MySQL and Sequelize
                    </p>
                    <div className="row d-flex justify-content-center button-bar">
                      <a
                        href="https://github.com/xKingAlex/Allocat"
                        target="_blank"
                        className="button button-projects mr-2"
                      >
                        Code
                      </a>
                      <a
                        href="https://allocat.herokuapp.com/"
                        target="_blank"
                        className="button button-projects mr-2"
                      >
                        App
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="featured-item">
                  <img
                    className="card-img rounded-0"
                    src={schedulez_screenshot}
                    alt="Schedulez Application"
                  />
                  <div className="item-body">
                    <h3>Schedulez</h3>
                    <p>
                      A full stack employee management application that allows
                      managers and employees to build dynamic and functional
                      schedules around their workday.{" "}
                    </p>
                    <p>
                      <strong>My Role:</strong> Designed a responsive UI and
                      connected to database, developing API routes. Completed
                      with three teammates.{" "}
                    </p>
                    <p>
                      <strong>Languages Used:</strong> HTML5, CSS, JavaScript
                    </p>
                    <p>
                      <strong>Frameworks Used:</strong> jQuery, Materialize,
                      Node.js, Express
                    </p>
                    <p>
                      <strong>Database:</strong> MySQL and Sequelize
                    </p>
                    <div className="row d-flex justify-content-center button-bar">
                      <a
                        href="https://github.com/md0808/schedulez"
                        target="_blank"
                        className="button button-projects mr-2"
                      >
                        Code
                      </a>
                      <a
                        href="http://scheduleez.herokuapp.com/"
                        target="_blank"
                        className="button button-projects mr-2"
                      >
                        App
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="featured-item">
                  <img
                    className="card-img rounded-0"
                    src={ecomm_screenshot}
                    alt="Practice Ecommerce App"
                  />
                  <div className="item-body">
                    <h3>E-Commerce Practice</h3>
                    <p>
                      A design exercise, demonstrating my web design skills in
                      an e-commerce setting.
                    </p>
                    <p>
                      The goal of this challenge was to organize a large amount
                      of product information in a visually appealing way. This
                      beauty and skincare e-commerce site prototype was inspired
                      by the playful yet functional designs on Glossier and
                      Billie's direct-to-consumer sites.
                    </p>
                    <p>
                      I wireframed and protyped my design in Figma. Using my
                      prototype, I coded a dynamic front-end.
                    </p>
                    <p>
                      <strong>Technologies & Frameworks Used:</strong> HTML,
                      CSS, JavaScript, Bootstrap, Sass, Figma
                    </p>
                    <div className="row">
                      <div className="button-bar">
                        <a
                          href="https://burragedanielle.github.io/E-CommPractice/"
                          target="_blank"
                          className="button button-projects mr-2"
                        >
                          Code
                        </a>
                        <a
                          href="https://github.com/burragedanielle/E-CommPractice"
                          target="_blank"
                          className="button button-projects mr-2"
                        >
                          App
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
