import React from "react";
import footer_logo from "../assets/Images/logo_big.png";
import instagram_icon from "../assets/Images/instagram_icon.png";
import pinterest_icon from "../assets/Images/pintester_icon.png";
import whatsapp_icon from "../assets/Images/whatsapp_icon.png";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer py-4">
      <div className=" container">
        <div className="footer-logo d-flex justify-content-center">
          <img
            src={footer_logo}
            style={{
              maxWidth: "5%",
              height: "60px",
            }}
          />
        </div>
        <ul className="footer-links">
          <Link className="bloglink" to="/blogs">
            <li>Blogs</li>
          </Link>
        </ul>
        <div className="footer-social-icon text-center">
          <div className="footer-icon-container">
            <img
              src={instagram_icon}
              style={{
                maxWidth: "30px",
                height: "auto",
              }}
            />
          </div>
          <div className="footer-icon-container ps-3">
            <img
              src={pinterest_icon}
              style={{
                maxWidth: "30px",
                height: "auto",
              }}
            />
          </div>
          <div className="footer-icon-container ps-3">
            <img
              src={whatsapp_icon}
              style={{
                maxWidth: "30px",
                height: "auto",
              }}
            />
          </div>
        </div>
        <div className="footer-copyright">
          <hr />
          <p className="text-center">Copyright @ 2024 - All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
