import React, { useState, useEffect } from 'react'
import './Customer.css'

import Box from "../../components/box/Box";
import { getAllSection } from "../../api/ItemApi";
import { useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';

const Customer = () => {
    const [box, setBox] = useState([]);
    const { t: translate }  = useTranslation();

    const currentLanguage = useSelector(
      (state) => state.language.currentLanguage
    );

    const data = require("../../imgURL.json");
    const customersBanner = data.customersBanner;

    const modelContent = box.filter((item) => item.title === translate('titleName.Customer'));

    useEffect(() => {
      getAllSection(currentLanguage).then((data) => {
        if (data && data.length > 0) {
          setBox(data);
        }
      });
    }, [currentLanguage]);

  return (
    <div className="App">
      <div className="customer-page-banner">
          <img className="customer-page-image" src={customersBanner} alt="Customer AltImage"></img>
        </div>
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
  )
}

export default Customer