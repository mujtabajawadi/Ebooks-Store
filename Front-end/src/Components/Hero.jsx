import React from "react";
import "./Hero.css";
import headerBook1 from "../assets/Images/headerBook1.png";
import headerBook2 from "../assets/Images/headerBook2.png";
import headerBook3 from "../assets/Images/headerBook3.png";
import headerBook4 from "../assets/Images/headerbook4.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="background_img">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
              <h1 className="heading">For All Your Reading Needs</h1>
              <div className="mt-4 para">
                <h1>TURNING PAGES,DIGITALLY!</h1>
              </div>
              <Link className="learnmore" to="/blogs">
                <button className="mt-4 custom-button py-2 px-3">
                  LEARN MORE
                </button>
              </Link>
            </div>

            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
                style={{ height: "auto", width: "260px", marginTop: "125px" }}
              >
                <SwiperSlide>
                  <img src={headerBook1} alt="Book 1" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={headerBook2} alt="Book 2" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={headerBook3} alt="Book 3" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={headerBook4} alt="Book 4" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
