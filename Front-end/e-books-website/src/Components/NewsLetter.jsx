import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter ">
      <div className=" container  text-center pt-5 pb-5">
        <h1 className="font">Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div className="pos-rel">
          <input type="email" placeholder="Your Email Id" className="email-input"></input>
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
