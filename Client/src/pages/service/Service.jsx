import React, { useState, useEffect } from "react";
import Box from "../../components/box/Box";
import BoxSlider from "../../components/boxSlider/BoxSlider";
import './Service.css'

import { getAllSection } from "../../api/ItemApi";
import { useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';

function Service() {
  const [box, setBox] = useState([]);
  const { t: translate }  = useTranslation();

  const data = require("../../imgURL.json");
  const servicesBanner = data.servicesBanner;

  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );

  const serviceContent = box.filter(
    (item) => item.title === translate('titleName.WeProvide') || item.title === translate('titleName.Domain')
  );

  const innovationContent = box.filter(
    (item) => item.title === translate('titleName.Innovation')
  );

  const modelContent = box.filter(
    (item) => item.title === translate('titleName.EngagementModel')
  );

  useEffect(() => {
    getAllSection(currentLanguage).then((data) => {
      if (data && data.length > 0) {
        setBox(data);
      }
    });
  }, [currentLanguage]);

  return (
    <div className="App">
      <div className="service-page-banner">
        <h1 class="service-page-title">{translate('titleName.Services')}</h1>
        <img className="service-page-image" src={servicesBanner} alt="Service AltImmage"></img>
      </div>
      <div className="service-page-content">
        {serviceContent.length > 0
          ? serviceContent.map((item, index) => (
              <Box
                key={index}
                description={item.description}
                name={item.name}
                title={item.title}
                items={item.items}
              />
            ))
          : null}
          {modelContent.length > 0
          ? modelContent.map((item, index) => (
              <Box
                key={index}
                description={item.description}
                name={item.name}
                title={item.title}
                items={item.items}
              />
            ))
          : null}
          {innovationContent.length > 0
          ? innovationContent.map((item, index) => (
              <Box
                key={index}
                description={item.description}
                name={item.name}
                title={item.title}
                items={item.items}
              />
            ))
          : null}
      </div>
    </div>
  );
}

export default Service;