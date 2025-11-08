import React from "react";
import "./Navbar.css";
import logo from "../assets/Images/logo.png";
import cart_icon from "../assets/Images/cart_icon.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="border">
      <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Navbar</title>
        <nav className="navbar ">
          <div className="navbar-container container ">
            <input type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1" />
              <span className="line line2" />
              <span className="line line3" />
            </div>
            <ul className="menu-items">
              <Link to="/">
                <li>Home</li>
              </Link>
              <li className="dropdown">
                <span>Categories</span>
                <div className="dropdown-content">
                  <Link to="/fiction">
                    <li className="ps-5">Fiction</li>
                  </Link>
                  <Link to="/non-fiction">
                    <li className="ps-5">Non-fiction</li>
                  </Link>
                  <Link to="/biographies">
                    <li className="ps-5">Biographies</li>
                  </Link>
                </div>
              </li>
              <Link to="/sale">
                <li>Sale</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/cart" className="ms-4">
                <li>
                  <img
                    src={cart_icon}
                    style={{ height: "30px", width: "30px" }}
                  />
                </li>
              </Link>
              <Link to="/signup" style={{ color: "white" }}>
                <li>
                  <button
                    className="btn btn-warning"
                    style={{ borderRadius: "25px" }}
                  >
                    Signup
                  </button>
                </li>
              </Link>
            </ul>

            <NavLink to="/">
              <img
                src={logo}
                style={{ height: "50px", width: "50px" }}
                className="logo "
              />
            </NavLink>
          </div>
        </nav>
      </>
    </div>
  );
};

export default Navbar;
