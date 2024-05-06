import React, { useState, useEffect } from 'react'
import './Innovation.css'

import { getItemBySlug } from '../../api/ItemApi';
import { useTranslation } from 'react-i18next';
import { slugName } from '../../enum/EnumApi';

const Innovation = () => {
    const imageUrl = require("../../imgURL.json");
    const [data, setData] = useState([]);
    const { t: translate }  = useTranslation();
    const innovationsBanner = imageUrl.innovationsBanner;
    const innovationImg = imageUrl.innovationImg;
    const innovationLink = imageUrl.innovationLink;

    let slug = slugName.innovations;

    useEffect(() => {
      getItemBySlug(slug).then((data) => {
        if (data) {
          setData([data]);
        } else setData([]);
      });
    }, [slug]);

  return (
    <>
  <div className="innovation-page-banner">
    <h1 class="innovation-page-title">{translate('titleName.Innovation')}</h1>
    <img className="innovation-page-image" src={innovationsBanner} alt="Innovation AltImage"></img>
  </div>
  <div className="box-body-innovation">
    <div className="innovation-page-container">
      {data.length > 0 ? data.map((item) => (
      <div className="innovation-page-content">
        <div className='desc'>{translate('innovation.Description')}</div>
        <div className="innovation-page-context">
          <div className="innovation-page-item-image">
            <img src={innovationImg} alt='Innovation AltImage'></img>
          </div>
          <div className='innovation-page-description'>
            <h1 class="innovation-page-name">{translate('innovation.Name')}</h1>
            <p>{translate('innovation.ItemDescription')}</p>
          <p>
          <a href={innovationLink}>{translate('innovation.More')} &gt;&gt;</a>
            </p>
          </div>
        </div>
      </div>
      ))
      : null}
    </div>
  </div>
    </>
  )
}

export default Innovation