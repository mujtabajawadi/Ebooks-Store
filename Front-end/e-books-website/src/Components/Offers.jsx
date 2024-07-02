import React from "react";
import "./Offers.css";
import exclusive_image from "../assets/Images/sellingBook.png";
import { Link } from "react-router-dom";
const Offers = () => {
  return (
    <div className="Offers">
    <div className=" container ">
      <div className="row">
        <div className="offers-left col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 ">
          <h1 className="font ">Exclusive Offers</h1>
          <h1 className="font">For You</h1>
          <p>ONLY ON BEST SELLERS PRODUCTS</p>
          <Link className="checkbtn" to="/sale">
          <button className="check-now-btn">Check Now</button>
          </Link>
        </div>
        <div className="offers-right col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 pt-5">
          <img src={exclusive_image} />
        </div>
      </div>
    </div></div>
  );
};

export default Offers;
