import React from "react";
import "./AboutUs.css";

import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const data = require("../../imgURL.json");
  const { t: translate } = useTranslation();
  const aboutUsBanner = data.aboutUsBanner;
  const aboutUsImg1 = data.aboutUsImg1;
  const aboutUsImg2 = data.aboutUsImg2;

  return (
    <div className="App">
      <div className="about-page-banner">
        <h1 className="about-page-title">{translate("titleName.About")}</h1>
        <img className="about-page-image" src={aboutUsBanner} alt="About AltImage"></img>
      </div>
      <div className="about-page-container">
        <div className="about-page-content">
          <h1>{translate("about.Title1")}</h1>
          <p>{translate("about.Intro1")}</p>
          <p>{translate("about.Intro2")}</p>
          <p>{translate("about.Intro3")}</p>
          <p>{translate("about.Intro4")}</p>
          <h2>
            <strong>{translate("about.Topic1")}</strong>
          </h2>
          <p>{translate("about.Topic1Description")}</p>
          <h2>
            <strong>{translate("about.Topic2")}</strong>
          </h2>
          <p>
            <ul>
              <li>{translate("about.Topic2Description1")}</li>
              <li>{translate("about.Topic2Description2")}</li>
              <li>{translate("about.Topic2Description3")}</li>
            </ul>
          </p>
          <h2>
            <strong>{translate("about.Topic3")}</strong>
          </h2>
          <p>
            <ul>
              <li>{translate("about.Topic3Description1")}</li>
              <li>{translate("about.Topic3Description2")}</li>
              <li>{translate("about.Topic3Description3")}</li>
              <li>{translate("about.Topic3Description4")}</li>
            </ul>
          </p>
          <h1>{translate("about.Title2")}</h1>
          <h2>
            <strong>{translate("about.Topic4")}</strong>
          </h2>
          <p>
            <ul>
              <li>{translate("about.Topic4Description1")}</li>
              <li>{translate("about.Topic4Description2")}</li>
              <li>{translate("about.Topic4Description3")}</li>
              <li>{translate("about.Topic4Description4")}</li>
              <li>{translate("about.Topic4Description5")}</li>
            </ul>
          </p>
          <h1>{translate("about.Title3")}</h1>
          <table>
            <tbody>
              <tr>
                <td>
                  <p>
                    <img src={aboutUsImg1} alt="About Us AltImage1"></img>
                  </p>
                </td>
                <td>
                  <p>
                    <img src={aboutUsImg2} alt="About Us AltImage2"></img>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <h2>
            <strong>{translate("about.Topic5")}</strong>
          </h2>
          <p>{translate("about.Topic5Description1")}</p>
          <p>
            <ul>
              <li>{translate("about.Topic5Description2")}</li>
              <li>{translate("about.Topic5Description3")}</li>
              <li>{translate("about.Topic5Description4")}</li>
              <li>{translate("about.Topic5Description5")}</li>
            </ul>
          </p>
          <p>{translate("about.Topic5Description6")}</p>
          <h1>{translate("about.Title4")}</h1>
          <h3>
            <strong>{translate("about.Topic6")}</strong>
          </h3>
          <p>{translate("about.Topic6Description1")}</p>
          <p>{translate("about.Topic6Description2")}</p>
          <p>{translate("about.Topic6Description3")}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
