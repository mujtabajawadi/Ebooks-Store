import React from "react";
import "./Reviews.css";
import { Swiper, SwiperSlide } from "swiper/react";
import person1 from "../assets/Images/person2.jpg";
import person2 from "../assets/Images/person3.jpg";
import person3 from "../assets/Images/person4.jpg";
import person4 from "../assets/Images/person2.jpg";
import person5 from "../assets/Images/person3.jpg";
import person6 from "../assets/Images/person4.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import star_icon from "../assets/Images/star_icon.png";
import star_dull_icon from "../assets//Images/star_dull_icon.png";

const Reviews = () => {
  return (
    <div className="reviews pb-5">
      <div className="container">
        <h1 className="text-center h1">Client's Reviews</h1>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
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
            <div className="px-5 ">
              <img
                src={person1}
                style={{
                  height: "70px",
                  width: "70px",
                  marginLeft: "35%",
                  borderRadius: "35px",
                }}
              />
              <h2 className="fw-normal ">Heading</h2>
              <p className="text-black">
                Some representative placeholder content for the three columns of
                text below the carousel. This is the first column.
              </p>
              <div className="d-flex">
                <img
                  src={star_icon}
                  style={{ height: "20px", width: "20px", marginLeft: "80px" }}
                />
                <img
                  src={star_icon}
                  style={{ height: "20px", width: "20px" }}
                />
                <img
                  src={star_icon}
                  style={{ height: "20px", width: "20px" }}
                />
                <img
                  src={star_icon}
                  style={{ height: "20px", width: "20px" }}
                />
                <img
                  src={star_dull_icon}
                  style={{ height: "20px", width: "20px" }}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="px-5 ">
              <img
                src={person2}
                style={{
                  height: "70px",
                  width: "70px",
                  marginLeft: "35%",
                  borderRadius: "35px",
                }}
              />
              <h2 className="fw-normal ">Heading</h2>
              <p className="text-black">
                Some representative placeholder content for the three columns of
                text below the carousel. This is the first column.
              </p>
              <div className="d-flex">
                <img
                  src={star_icon}
                  style={{ height: "20px", width: "20px", marginLeft: "80px" }}
                />
                <img
                  src={star_icon}
                  style={{ height: "20px", width: "20px" }}
                />
                <img
                  src={star_icon}
                  style={{ height: "20px", width: "20px" }}
                />
                <img
                  src={star_icon}
                  style={{ height: "20px", width: "20px" }}
                />
                <img
                  src={star_dull_icon}
                  style={{ height: "20px", width: "20px" }}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="px-5 ">
              <img
                src={person3}
                style={{
                  height: "70px",
                  width: "70px",
                  marginLeft: "35%",
                  borderRadius: "35px",
                }}
              />
              <h2 className="fw-normal ">Heading</h2>
              <p className="text-black">
                Some representative placeholder content for the three columns of
                text below the carousel. This is the first column.
              </p>
              <div className="d-flex">
                <img
                  src={star_icon}
                  style={{ height: "20px", width: "20px", marginLeft: "80px" }}
                />
                <img
                  src={star_icon}
                  style={{ height: "20px", width: "20px" }}
                />
                <img
                  src={star_icon}
                  style={{ height: "20px", width: "20px" }}
                />
                <img
                  src={star_icon}
                  style={{ height: "20px", width: "20px" }}
                />
                <img
                  src={star_dull_icon}
                  style={{ height: "20px", width: "20px" }}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="px-5 ">
              <img
                src={person4}
                style={{
                  height: "70px",
                  width: "70px",
                  marginLeft: "35%",
                  borderRadius: "35px",
                }}
              />
              <h2 className="fw-normal ">Heading</h2>
              <p className="text-black">
                Some representative placeholder content for the three columns of
                text below the carousel. This is the first column.
              </p>
              <div className="d-flex">
                <img
                  src={star_icon}
                  style={{ height: "20px", width: "20px", marginLeft: "80px" }}
                />
                <img
                  src={star_icon}
                  style={{ height: "20px", width: "20px" }}
                />
                <img
                  src={star_icon}
                  style={{ height: "20px", width: "20px" }}
                />
                <img
                  src={star_icon}
                  style={{ height: "20px", width: "20px" }}
                />
                <img
                  src={star_dull_icon}
                  style={{ height: "20px", width: "20px" }}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="px-5 ">
              <img
                src={person5}
                style={{
                  height: "70px",
                  width: "70px",
                  marginLeft: "35%",
                  borderRadius: "35px",
                }}
              />
              <h2 className="fw-normal ">Heading</h2>
              <p className="text-black">
                Some representative placeholder content for the three columns of
                text below the carousel. This is the first column.
              </p>
              <div className="d-flex">
                <img
                  src={star_icon}
                  style={{ height: "20px", width: "20px", marginLeft: "80px" }}
                />
                <img
                  src={star_icon}
                  style={{ height: "20px", width: "20px" }}
                />
                <img
                  src={star_icon}
                  style={{ height: "20px", width: "20px" }}
                />
                <img
                  src={star_icon}
                  style={{ height: "20px", width: "20px" }}
                />
                <img
                  src={star_dull_icon}
                  style={{ height: "20px", width: "20px" }}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="px-5 ">
              <img
                src={person6}
                style={{
                  height: "70px",
                  width: "70px",
                  marginLeft: "35%",
                  borderRadius: "35px",
                }}
              />
              <h2 className="fw-normal ">Heading</h2>
              <div className="text-black">
                Some representative placeholder content for the three columns of
                text below the carousel. This is the first column.
              </div>
              <div className="d-flex">
                <img
                  src={star_icon}
                  style={{ height: "20px", width: "20px", marginLeft: "80px" }}
                />
                <img
                  src={star_icon}
                  style={{ height: "20px", width: "20px" }}
                />
                <img
                  src={star_icon}
                  style={{ height: "20px", width: "20px" }}
                />
                <img
                  src={star_icon}
                  style={{ height: "20px", width: "20px" }}
                />
                <img
                  src={star_dull_icon}
                  style={{ height: "20px", width: "20px" }}
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
