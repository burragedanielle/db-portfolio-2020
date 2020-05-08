import React from "react";

const Navigation = () => {
  return (
    <nav class="navbar justify-content-between">
      <a class="navbar-brand d-flex">Danielle B.</a>
      <ul className="navbar-nav d-flex">
        <li className="nav-item">
          <a className="nav-link" href="#projects">
            My Projects <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a id="resume-btn" className="nav-link btn" href="#">
            See Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
