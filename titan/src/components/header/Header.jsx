import React from "react";
import "./header.css";



const Header = () => {
  
  return (
    <div className="header">
      <div className="navbar">
        <img
          className="logo"
          src={`https://titancorpvn.com/assets/images/logo-white.png`}
          alt="Logo"
        />
        <div className="grid-container">
          <div className="grid-item">Home</div>
          <div className="grid-item">
            <i class="fa-solid fa-flag"></i> 日本
          </div>
          <div className="grid-item">
            <i class="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>

      <div className="banner">
        <div class="slider owl-carousel">
          <div className="banner"><img src="https://titancorpvn.com/uploads/banners/home-banner-1.jpg" alt="" /></div>
          <div className="banner"><img src="https://titancorpvn.com/uploads/banners/home-banner-2.jpg" alt="" /></div>
          <div className="banner"><img src="https://titancorpvn.com/uploads/banners/home-banner-3.jpg" alt="" /></div>
          <div className="banner"><img src="https://titancorpvn.com/uploads/banners/home-banner-4.jpg" alt="" /></div>
        </div>
        <div class="slider-counter"></div>
      </div>
    </div>
  );
};

export default Header;
