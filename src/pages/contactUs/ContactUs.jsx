import React, { useState, useEffect } from "react";
import "./ContactUs.css";
import { getRequestForm } from "../../api/ItemApi";
import { useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';
import Request from "../../components/requestForm/Request";

const ContactUs = () => {
  const { t: translate }  = useTranslation();
  const [request, setRequest] = useState({
    items: "",
  });

  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );

  const data = require("../../imgURL.json");
  const contactUsBanner = data.contactUsBanner;

  useEffect(() => {
    getRequestForm(currentLanguage).then((data) => {
      if (data) {
        setRequest({
          items: data.items,
        });
      }
    });
  }, [currentLanguage]);

  return (
    <div className="App">
      <div className="contact-page-banner">
        <h1 className="contact-page-title">{translate('titleName.Contact')}</h1>
        <img className="contact-page-image" src={contactUsBanner} alt="Contact AltImage"></img>
      </div>
      <div className="box-body-contact-page">
        <div className="contact-page-content-container">
      <div className="contact-us-content">
        <div className="contact-us-text">
          <h3>{translate('contact.Title')}</h3>
          <h4>{translate('contact.SubTitle')}</h4>
          <div className="contact-us-text-paragraph">
          <p>{translate('contact.Paragraph1')}</p>
          <p>{translate('contact.Paragraph2')}</p>
          <p>{translate('contact.Paragraph3')}</p>
          </div>
        </div>
        <div className="contact-us-form">
      {request.items.length > 0
        ? request.items.map((item, index) => (
          <Request
          key={index}
          label={item.buttonLabel}
          locale={currentLanguage}
          />
          ))
        : null}
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
