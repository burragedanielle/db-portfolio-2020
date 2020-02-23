import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <h3>Welcome to my glam homepage</h3>
      <Link to="/projects">Get some salmon.</Link>
    </div>
  );
};

export default MainPage;
