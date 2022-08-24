import React from "react";
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark ">
        <div className="container-fluid ">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link " exact to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" exact to="contactus">
                ContactUs
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink
          className="btn btn-outline-none btn-lg me-2"
          exact
          to="/signin"
        >
          Login
        </NavLink>

        <NavLink
          className="btn btn-outline-none btn-lg me-2"
          exact
          to="/signup"
        >
          SignUp
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
