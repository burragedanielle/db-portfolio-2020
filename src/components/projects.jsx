import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <section className="mb-lg-100">
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
                    src="img/home/featured1.png"
                    alt=""
                  />
                  <div className="item-body">
                    <Link to="">
                      <h3>Allocat</h3>
                    </Link>
                    <p>Whales and darkness moving</p>
                    <p>Technologies Used: HTML, CSS, JavaScript</p>
                    <div className="row d-flex justify-content-center">
                      <a href="https://github.com/xKingAlex/Allocat" target="_blank" className="button button-projects mr-2">
                          Code</a>
                        <a href="https://allocat.herokuapp.com/" target="_blank" className="button button-projects mr-2">
                        App</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="featured-item">
                  <img
                    className="card-img rounded-0"
                    src="img/home/featured2.png"
                    alt=""
                  />
                  <div className="item-body">
                    <Link to="#">
                      <h3>Schedulez</h3>
                    </Link>
                    <p>Whales and darkness moving</p>
                    <p>Technologies Used: HTML, CSS, JavaScript</p>
                    <div className="row d-flex justify-content-center">
                        <a href="https://github.com/md0808/schedulez" target="_blank" className="button button-projects mr-2">
                          Code</a>
                        <a href="http://scheduleez.herokuapp.com/" target="_blank" className="button button-projects mr-2">
                        App</a>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="featured-item">
                  <img
                    className="card-img rounded-0"
                    src="img/home/featured3.png"
                    alt=""
                  />
                  <div className="item-body">
                    <Link to="">
                      <h3>Golden Hour</h3>
                    </Link>
                    <p>Whales and darkness moving</p>
                    <p>Technologies Used: HTML, CSS, JavaScript</p>
                    <div className="row d-flex justify-content-center">
                      <a href="https://github.com/burragedanielle/project_one" target="_blank" className="button button-projects mr-2">
                          Code</a>
                        <a href="https://burragedanielle.github.io/project_one/" target="_blank" className="button button-projects mr-2">
                        App</a>
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
