import React from "react";
import footer_logo from "../assets/Images/logo_big.png";
import instagram_icon from "../assets/Images/instagram_icon.png";
import pinterest_icon from "../assets/Images/pintester_icon.png";
import whatsapp_icon from "../assets/Images/whatsapp_icon.png";
import "./Footer.css";
const Footer = () => {
  return (
  <div className="footer py-4">
    <div className=" container">
      <div className="footer-logo d-flex justify-content-center">
        <img
          src={footer_logo}
          style={{
            maxWidth: "5%", // Ensure image resizes within parent container
            height: "60px", // Maintain aspect ratio
          }}
        />
      
      </div>
      <ul className="footer-links">
      
        <li>Contact</li>
        <li>Blogs</li>
        
      </ul>
      <div className="footer-social-icon text-center">
        <div className="footer-icon-container" >
          <img
            src={instagram_icon}
            style={{
              maxWidth: "30px", // Ensure image resizes within parent container
              height: "auto", // Maintain aspect ratio
            }}
          />
        </div>
        <div className="footer-icon-container ps-3">
          <img
            src={pinterest_icon}
            style={{
              maxWidth: "30px", // Ensure image resizes within parent container
              height: "auto", // Maintain aspect ratio
            }}
          />
        </div>
        <div className="footer-icon-container ps-3">
          <img
            src={whatsapp_icon}
            style={{
              maxWidth: "30px", // Ensure image resizes within parent container
              height: "auto", // Maintain aspect ratio
            }}
          />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p className="text-center">Copyright @ 2023 - All Rights Reserved</p>
      </div>
    </div>
    </div>
  );
};

export default Footer;
