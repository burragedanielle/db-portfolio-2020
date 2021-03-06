import React from "react";
import resume_db_webdev from "../img/resume_db_webdev.pdf";

const Navigation = () => {
  return (
    <nav class="navbar justify-content-between">
      <span class="navbar-brand">Danielle Burrage</span>
      <ul className="navbar-nav d-flex">
        <li className="nav-item">
          <a className="nav-link" href="#projects">
            My Projects <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">
            My Skills
          </a>
        </li>
        <li className="nav-item">
          <a id="resume-btn" className="nav-link btn" href={resume_db_webdev}>
            See Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
