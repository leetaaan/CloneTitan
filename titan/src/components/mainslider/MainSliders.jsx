import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { getItemByCategory } from "../../api/itemApi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./mainslider.css";

// import required modules
import {Autoplay, Pagination, Navigation } from "swiper/modules";


const MainSliders = () => {
 const [banner, setBanner] = useState([]);

  let categorySlug = "banner",
  p = 1,
  ps = 5;

  useEffect(() => {
    getItemByCategory(categorySlug, ps, p).then((data) => {
      if (data) {
        setBanner(data.items);
        console.log(data.items);
      } else setBanner([]);
    });
  }, [categorySlug, ps, p]);
  return (
    <>

      <Swiper
        loop={true}
        pagination={{
          type: "fraction",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter:true
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {banner.length > 0 ? banner.map((item, index) => (
            <SwiperSlide key={index}>
              <img className="banner-img" src={item.image.imageUrl} alt=""  />
              <div className="text" >
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </SwiperSlide>
      )) : null}
      </Swiper>
    </>
  );
};

export default MainSliders;
