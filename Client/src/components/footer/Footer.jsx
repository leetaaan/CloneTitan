import React, { useState, useEffect } from "react";
import { getFooter } from "../../api/ItemApi";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "./Footer.css";
import { linkSocial, slugName, language } from "../../enum/EnumApi";
import { useSelector } from "react-redux";

const Footer = (props) => {
  const [footer, setFooter] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const data = require("../../imgURL.json");
  const upTop = data.upTop;
  const googleMap = data.googleMap;
  const { locale } = props;
  const { t: translate } = useTranslation();
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMap = () => {
    setIsActive(!isActive);
  };

  const payload = {
    locale: currentLanguage,
  };

  useEffect(() => {
    getFooter(payload).then((data) => {
      if (data) {
        setFooter(data.items);
      } else setFooter([]);
    });
  }, [locale]);

  return (
    <div className="site-footer">
      <div className="box-footer-google">
        <div className="footer-container">
          <div className="box-footer-google-title">
            <Link to="contact-us">
              <a>{translate("footer.Contact")}</a>
            </Link>
          </div>
          <div className="box-footer-google-description">
            <a onClick={toggleMap}>
              {translate("footer.Map")}
              <FontAwesomeIcon className="location-icon" icon={faLocationDot} />
            </a>
          </div>
        </div>
      </div>

      <div className="map-container">
        <div className={`map-show ${isActive ? "active" : ""}`}>
          <iframe
            title="map"
            src={googleMap}
            height="450px"
            width="100%"
            allowFullScreen=""
            loading="lazy"
            style={{ border: "0" }}
          ></iframe>
        </div>
      </div>

      <div className="box-footer-location">
        <div className="footer-container">
          {footer.length > 0 ? footer.map((items) => (
            <>
              {items.address ? (
                <div className="footer-item">
                  <h3>{items.title}:</h3>
                  <p>{items.address}</p>
                  <a href={`tel:${items.telNumber}`}>
                    Tel: {items.telNumber}
                  </a>
                </div>
              ) : null}
            </>)) : null}
        </div>
      </div>

      <div className="box-footer-support">
        <div className="footer-container">
          {footer.length > 0 ? footer.map((items) => (
            <>
              {items.infoGmail ? (
                <div className="footer-item">
                  <h3>{items.title}:</h3>
                  <div className="space-item">
                    <a href={`mailto:${items.infoGmail}`}>
                      <p>
                        <i className="fa-solid fa-envelope mail-icon"></i>{" "}
                        {items.infoGmail}
                      </p>
                    </a>
                    <a href={linkSocial.skype === items.infoGmail2 ? "skype:" + items.infoGmail2 + "?chat" : "mailto:" + items.infoGmail2}>
                      <p>
                        <i className={linkSocial.skype === items.infoGmail2 ? "fa-brands fa-skype mail-icon" : "fa-solid fa-envelope mail-icon"}></i>{" "}
                        {items.infoGmail2}
                      </p>
                    </a>
                  </div>
                </div>
              ) : null}
            </> )) : null}
        </div>
      </div>

      <div className="box-footer-bottom">
        <div className="footer-container">
          {footer.length > 0 ? footer.map((items) => (
            <>
              {items.description ? (
                <div className="box-footer-bottom-copyright">
                  {items.description} <a href="privacy">{translate("footer.Copyright")}</a>
                </div>
              ) : null}
            </> )) : null}
          {footer.length > 0 ? footer.map((items) =>
            items.subItems != null ? items.subItems.map((subItem, index) => (
              <div className="box-footer-bottom-socials" key={index}>
                <p>{items.title}</p>
                <div className="socials-icon">
                  <a href={`${subItem.facebook}`}>
                    <i className={`socials-icon fa-brands fa-facebook-f `}></i>
                  </a>

                  <a href={`${subItem.twitter}`}>
                    <i className={`socials-icon fa-brands fa-twitter`}></i>
                  </a>

                  <a href={`${subItem.linkedin}`}>
                    <i className={`socials-icon fa-brands fa-linkedin `}></i>
                  </a>

                  <a href={`${subItem.youtube}`}>
                    <i className={`socials-icon fa-brands fa-youtube`}></i>
                  </a>
                </div>
                <img
                  className="scroll-to-top"
                  onClick={scrollToTop}
                  id="back-to-top"
                  src={upTop}
                  alt="ScrollTop Icon"
                ></img>
              </div>
              )) : null)
            : null}
        </div>
      </div>
    </div>
  );
};

export default Footer;
