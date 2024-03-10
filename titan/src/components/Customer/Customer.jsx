import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './customer.css';

// import required modules
import {Autoplay, Pagination } from 'swiper/modules';

export default function Customer() {
  return (
    
    <>
    <div className='customer-title'>
      <a className='title' href='#'> CUSTOMER TESTIMONIALS</a>
      <p className='sub-title'>We deeply appreciate all feedbacks from our customers and keep those as realistic results of high-quality service in Titan</p>
    </div>           
    <Swiper 
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={true} 
      modules={[Autoplay, Pagination]} >
        <SwiperSlide>
        <div className="box-customer">
          <div>
            <img className='customer-logo' src={`https://titancorpvn.com/uploads/documents/testimonials/Chief_Technical_Officer.png`} alt=" " />
            <a className='customer-infor' href=" ">
              <h3 className='customer-name'>Hongwen Zhang, Ph.D</h3>
              <h4 className='customer-title-border'>CEO &amp; CTO (co-founder)</h4>
            </a>
            <div className='customer-grey-color'>“We greatly appreciate the reliable and cost-effective team Titan has provided to us to develop and maintain one of our systems with over a  thousand internal users for several years.” 
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="box-customer">
          <div>
            <img className='customer-logo' src={`https://titancorpvn.com/uploads/documents/testimonials/Chief_Technical_Officer.png`} alt=" " />
            <a className='customer-infor' href=" ">
              <h3 className='customer-name'>Hongwen Zhang, Ph.D</h3>
              <h4 className='customer-title-border'>CEO &amp; CTO (co-founder)</h4>
            </a>
            <div className='customer-grey-color'>“We greatly appreciate the reliable and cost-effective team Titan has provided to us to develop and maintain one of our systems with over a  thousand internal users for several years.” 
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="box-customer">
          <div>
            <img className='customer-logo' src={`https://titancorpvn.com/uploads/documents/testimonials/Chief_Technical_Officer.png`} alt=" " />
            <a className='customer-infor' href=" ">
              <h3 className='customer-name'>Hongwen Zhang, Ph.D</h3>
              <h4 className='customer-title-border'>CEO &amp; CTO (co-founder)</h4>
            </a>
            <div className='customer-grey-color'>“We greatly appreciate the reliable and cost-effective team Titan has provided to us to develop and maintain one of our systems with over a  thousand internal users for several years.” 
            </div>
          </div>
        </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
