import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./mainslider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Mainslider() {
  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='banner'>
            <img src="https://titancorpvn.com/uploads/banners/home-banner-1.jpg" alt=""/>
            <div className="text">
              <a><strong>INSPIRE</strong> YOUR WORK</a>
              <p>Founded on trust and experience, by a professional team, with a big vision and mission to provide the best services to our clients.</p>
            </div>    
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='banner'>
            <img src="https://titancorpvn.com/uploads/banners/home-banner-2.jpg" alt=""/>
            <div className="text">
              <a>COMPREHENSIVE INNOVATIONS</a>
              <p>A dedicated and professional team that offers a wide range of advanced solution for offshore software testing and comprehensive development services.</p>
            </div>    
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='banner'>
            <img src="https://titancorpvn.com/uploads/banners/home-banner-3.jpg" alt=""/>
            <div className="text">
              <a>ADVANCED SOLUTION FOR INNOVATIONS</a>
              <p>Always hunger for new idea creation, we incubate good ideas by providing facilities for product development and environment where creativity leverages our skills and services.</p>
            </div>    
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='banner'>
            <img src="https://titancorpvn.com/uploads/banners/home-banner-4.jpg" alt=""/>
            <div className="text">
              <a>"INSPIRE" WORKING ENVIRONMENT</a>
              <p>Our friendly, challenging, and collaborative environment creates enjoy valuable benefits and sharing ownership.</p>
            </div>    
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}



