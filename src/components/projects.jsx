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
                    <p>A full stack MERN application that simplifies complex projects through task allocation. </p>
                    <p><strong>My Role:</strong> Designed a responsive and dynamic UI using React, custom Bootstrap and JavaScript ES6. Seamlessly connected UI to server-side code and database, retrieving and rendering data. Completed with four teammates. </p>
                    <p><strong>Languages Used:</strong> JavaScript, HTML, CSS</p>
                    <p><strong>Frameworks Used:</strong> React, Express, Node.js, Bootstrap</p>
                    <p><strong>Database:</strong> MySQL and Sequelize</p>
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
                    <p>A full stack employee management application that allows managers and employees to build dynamic and functional schedules around their workday. </p>
                    <p><strong>My Role:</strong> Designed a responsive UI and connected to database, developing API routes. Completed with three teammates. </p>
                    <p><strong>Technologies Used:</strong> HTML5, CSS, JavaScript</p> 
                    <p><strong>Frameworks Used:</strong> jQuery, Materialize, Node.js, Express</p>
                    <p><strong>Database:</strong> MySQL and Sequelize</p>
                    <div className="row d-flex justify-content-center">
                        <a href="https://github.com/md0808/schedulez" target="_blank" className="button button-projects mr-2">
                          Code</a>
                        <a href="http://scheduleez.herokuapp.com/" target="_blank" className="button button-projects mr-2">
                        App</a>
                      
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-4">
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
                  </div> */}
                {/* </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
