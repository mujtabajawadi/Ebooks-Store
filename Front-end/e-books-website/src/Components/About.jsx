import React from "react";
import "./About.css";
import about_book from "../assets/Images/about_book.png";
import { FaGlobe, FaBook, FaPencilAlt } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";
const About = () => {
  return (
    <section className="bodysection">
      <div>
        <Navbar></Navbar>
        <div className="bg">
          <div className="img_4"></div>
          <img className="aboutimg" src={about_book}></img>
          <div className="about_1">
            <h1>About US</h1>
          </div>

          <div className="about_2">
            <div className="content-box-lg">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="about-item text-center">
                      <FaBook className="icons-book" />
                      <h3>Mission</h3>
                      <hr />
                      <p>
                        our mission is to connect readers with the stories that
                        matter, providing a curated selection of books to help
                        customers discover their nextfavorite read. We strive to
                        make reading easier, more accessible, and more enjoyable
                        for everyone.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="about-item text-center">
                      <FaGlobe className="icons-globe " />
                      <h3>Vision</h3>
                      <hr />
                      <p>
                        Our vision is to be the leading online destination for
                        book lovers, where customers can discover new authors,
                        explore new genres, and connect with others who share
                        their passion for reading. We see ourselves as a hub for
                        literary discovery, where the joy of reading is
                        amplified
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="about-item text-center">
                      <FaPencilAlt className="icons-pencil" />
                      <h3>Acheivements</h3>
                      <hr />
                      <p>
                        In Online Bookstore, we're proud of our achievements in
                        shaping the world of online reading. With millions of
                        satisfied customers, we've become the go-to destination
                        for book lovers, offering a vast selection of titles,
                        personalized recommendations, and exceptional customer
                        service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
