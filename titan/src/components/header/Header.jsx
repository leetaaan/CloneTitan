import React, { useState, useEffect } from "react";
import "./header.css";
import { getItemByCategory } from "../../api/itemApi";

const Header = () => {
  const [logo, setLogo] = useState([]);

  let categorySlug = "logo",
  p = 1,
  ps = 5;

  useEffect(() => {
    getItemByCategory(categorySlug, ps, p).then((data) => {
      if (data) {
        setLogo(data.items);
        console.log(data.items);
      } else setLogo([]);
    });
  }, [categorySlug, ps, p]);
  return (
    <>
      {logo.length > 0 ? logo.map((item, index) => (
        <div key={index}>
          <div className="navbar">
            <img className="logo" src={item.image.imageUrl} alt="" />
            <div className="grid-container">
              <div className="grid-item">Home</div>
              <div className="grid-item">
                <i className="fa-solid fa-flag"></i> 日本
              </div>
              <div className="grid-item">
                <i className="fa-solid fa-bars"></i>
              </div>
            </div>
          </div>
        </div>
      )): null}
    </>
  );
};

export default Header;
