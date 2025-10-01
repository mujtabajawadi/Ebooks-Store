import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Blogs.css";

// import required modules
import { Pagination } from "swiper/modules";

import ArticleImage1 from "../assets/Images/ArticleImage1.png";
import ArticleImage2 from "../assets/Images/ArticleImage2.png";
import ArticleImage3 from "../assets/Images/ArticleImage3.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Blogs() {
  return (
    <div className="bg-white">
      <Navbar></Navbar>
      <h1 className="text-center pt-4 pb-3 h1">Blogs</h1>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper container "
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <div className="card">
            <img
              className="card-img-top"
              src={ArticleImage1}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn ">
                Read More
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="card">
            <img
              className="card-img-top"
              src={ArticleImage2}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn ">
                Read More
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="card">
            <img
              className="card-img-top"
              src={ArticleImage3}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn ">
                Read More
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="card">
            <img
              className="card-img-top"
              src={ArticleImage1}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn ">
                Read More
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img
              className="card-img-top"
              src={ArticleImage2}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn ">
                Read More
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Footer></Footer>
    </div>
  );
}
