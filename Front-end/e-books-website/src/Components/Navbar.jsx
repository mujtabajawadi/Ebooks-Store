import React from "react";
import "./Navbar.css";
import logo from "../assets/Images/logo.png";
import cart_icon from "../assets/Images/cart_icon.png";
import { Link } from "react-router-dom";

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
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li class="dropdown">
                <span>Categories</span>
                <div className="dropdown-content">
                  <li className="ps-5">
                    <Link to="/fiction">Fiction</Link>
                  </li>
                  <li className="ps-5">
                    <Link to="/non-fiction">Non-fiction</Link>
                  </li>
                  <li className="ps-5">
                    <Link to="/biographies">Biographies</Link>
                  </li>
                </div>
              </li>
              <li>
                <Link to="/sale">Sale</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <Link to="/cart" className="ms-4">
                <img
                  src={cart_icon}
                  style={{ height: "30px", width: "30px" }}
                />
              </Link>

              <button
                className="btn btn-warning"
                style={{ marginLeft: "50px", borderRadius: "25px" }}
              >
                <Link to="/signup" style={{ color: "white" }}>
                  Signup
                </Link>
              </button>
            </ul>
            {/* <div className="d-flex">
              <img src={logo} />
              <h1 className="logo pt-1">SHOPPER</h1>
            </div> */}
            <img
              src={logo}
              style={{ height: "50px", width: "50px" }}
              className="logo "
            />
            {/* <h1 className="logo1 pt-1 " >SHOPPER</h1> */}
          </div>
        </nav>
      </>
    </div>
  );
};

export default Navbar;
