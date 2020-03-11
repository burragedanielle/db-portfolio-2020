import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return [
      <li key="A" className="nav-item active">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>,
      <li key="B" className="nav-item">
        <Link className="nav-link" to="/projects">
          My Work
        </Link>
      </li>
      //   <li key="C" className="nav-item">
      //     <Link className="nav-link" to="">
      //       Contact
      //     </Link>
      //   </li>
    ];
  }
}

export default NavBar;
