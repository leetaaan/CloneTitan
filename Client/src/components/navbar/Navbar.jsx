import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import PageMenu from "../pageMenu/PageMenu";
import { getItemByCategory } from "../../api/ItemApi";
import { language, slugName } from "../../enum/EnumApi";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../redux/actions";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t: translate, i18n } = useTranslation();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [logo, setLogo] = useState([]);

  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );
  const dispatch = useDispatch();
  const handleLanguageSwitch = () => {
    if (currentLanguage === language.english){
      i18n.changeLanguage(language.japanese)
      dispatch(changeLanguage(language.japanese));
    }else{
      i18n.changeLanguage(language.english)
      dispatch(changeLanguage(language.english));
    }
  };
  const payload = {
    categorySlug: slugName.navbar,
    locale: currentLanguage,
  };
  useEffect(() => {
    getItemByCategory(payload).then((data) => {
      if (data) {
        setLogo(data);
      } else setLogo([]);
    });
  }, [payload.locale]);
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
    document.body.classList.toggle("popup-open");
  };
  return (
    <>
      {logo.length > 0
        ? logo.map((item, index) => (
            <div className="navbar" key={index}>
              <Link to="/">
                <img className="logo" src={item.imageUrl} alt="logo" />
              </Link>
              <div className="grid-container">
                <Link to="/home">
                  <div className="grid-item">{translate("navbar.Home")}</div>
                </Link>
                <span onClick={handleLanguageSwitch} className="grid-item">
                  {
                      item.buttonStatus === true ?
                    <>
                      <i className="fa-solid fa-flag"></i>
                      {item.buttonLabel}
                    </>
                      :null
                  }
                </span>
                <a onClick={togglePopup} className="grid-item">
                  <i className="fa-solid fa-bars"></i>
                </a>
              </div>
            </div>
          ))
        : null}
      {isPopupVisible && (
        <div className="popup">
          <button
            onClick={() => {
              togglePopup();
              document.body.classList.remove("popup-open");
            }}
            className="menuCloseBtn pointer-btn"
          >
            Close <i class="fa-solid fa-x"></i>
          </button>
          <PageMenu />
        </div>
      )}
    </>
  );
};

document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    if (navbar) {
      if (window.scrollY > 0) {
        navbar.classList.add("scroll-down");
        navbar.classList.remove("scroll-up");
      } else {
        navbar.classList.remove("scroll-down");
        navbar.classList.add("scroll-up");
      }
    }
  });
});
export default Navbar;
