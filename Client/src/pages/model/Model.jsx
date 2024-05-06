import React, { useState, useEffect } from "react";
import Box from "../../components/box/Box";
import './Model.css';

import { getAllSection } from "../../api/ItemApi";
import { useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';

function Model() {
  const [box, setBox] = useState([]);
  const { t: translate }  = useTranslation();

  const data = require("../../imgURL.json");
  const servicesBanner = data.servicesBanner;

  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );

  const modelContent = box.filter((item) => item.title === translate('titleName.EngagementModel'));

  useEffect(() => {
    getAllSection(currentLanguage).then((data) => {
      if (data && data.length > 0) {
        setBox(data);
      }
    });
  }, [currentLanguage]);

  return (
    <div className="App">
      <div className="model-page-banner">
      <h1 className="model-page-title">{translate('titleName.EngagementModel')}</h1>
      <img className="model-page-image" src={servicesBanner} alt="Model AltImage"></img>
    </div>
    <div className="box-body-model-page">
        {modelContent.length > 0 ? modelContent.map((item, index) => (
          <Box
            key={index}
            description={item.description}
            name={item.name}
            title={item.title}
            items={item.items}
          />
          )): null}
      </div>
    </div>
  );
}

export default Model;