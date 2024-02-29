import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./header.css";
const Header = () => {
  return (
    <div>
      <div className="navbar">
        <img
          src={`https://titancorpvn.com/assets/images/logo-white.png`}
          alt=""
        />
        <div>
          <span>Home</span>
          <span>
            <i class="ri-heart-line"></i>
            <span>日本</span>
          </span>
        </div>
      </div>
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`https://titancorpvn.com/uploads/banners/home-banner-1.jpg`}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`https://titancorpvn.com/uploads/banners/home-banner-2.jpg`}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`https://titancorpvn.com/uploads/banners/home-banner-3.jpg`}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Header;
