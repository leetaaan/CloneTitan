import React from "react";
import "./Domain.css";

import { useTranslation } from 'react-i18next';

const Domain = () => {
  const { t: translate } = useTranslation();
  const data = require("../../imgURL.json");
  const servicesBanner = data.servicesBanner;
  const mobileDevelopment = data.mobileDevelopment;
  const webAppDevelopment = data.webAppDevelopment;
  const desktopDevelopment = data.desktopDevelopment;
  const cloudBasedDevelopment = data.cloudBasedDevelopment;
  const telecomNetworking = data.telecomNetworking;
  const testingQualityAssurance = data.testingQualityAssurance;
  const blockchainDevelopment = data.blockchainDevelopment;
  const artificialIntelligence = data.artificialIntelligence;
  const erpCrmImplementation = data.erpCrmImplementation;

  return (
    <>
    <div className="domain-page-banner">
      <h1 class="domain-page-title">{translate('titleName.Domain')}</h1>
      <img className="domain-page-image" src={servicesBanner} alt="Domain AltImage"></img>
    </div>
    <div className="box-body-domain">
    <div className="grid-domain-page-container">
      <div className="grid-item-domain-page">
        <div className="domain-page-box-cell-item">
            <a>
              <img
                className="domain-page-item-img"
                src={mobileDevelopment}
                alt="News AltImage"
              />
                <h3 className="title-domain-page-item">{translate('domain.TitleItem1')}</h3>
            </a>
            <div className="domain-page-item-description">
                <p>
                {translate('domain.Description1')}
                </p>
                <ul>
                  <li>{translate('domain.Description1Li1')}<b>{translate('domain.Description1Li2')}</b></li>
                  <li>{translate('domain.Description1Li3')}<b>{translate('domain.Description1Li4')}</b></li>
                  <li>{translate('domain.Description1Li5')}<b>{translate('domain.Description1Li6')}</b></li>
                  <li>{translate('domain.Description1Li7')}<b>{translate('domain.Description1Li8')}</b></li>
                </ul>
            </div>
        </div>
      </div>
      <div className="grid-item-domain-page">
        <div className="domain-page-box-cell-item">
            <a>
              <img
                className="domain-page-item-img"
                src={webAppDevelopment}
                alt="News AltImage"
              />
                <h3 className="title-domain-page-item">{translate('domain.TitleItem2')}</h3>
            </a>
            <div className="domain-page-item-description">
                <p>
                {translate('domain.Description2')}
                </p>
                <h4>{translate('domain.Description2H41')}</h4>
                <ul>
                  <li>{translate('domain.Description2Li1')}<b>{translate('domain.Description2Li2')}</b></li>
                  <li>{translate('domain.Description2Li3')}<b>{translate('domain.Description2Li4')}</b></li>
                  <li>{translate('domain.Description2Li5')}<b>{translate('domain.Description2Li6')}</b></li>
                </ul>
                <h4>{translate('domain.Description2H42')}</h4>
                <ul>
                  <li>{translate('domain.Description2Li7')}<b>{translate('domain.Description2Li8')}</b></li>
                  <li>{translate('domain.Description2Li9')}<b>{translate('domain.Description2Li10')}</b></li>
                  <li>{translate('domain.Description2Li11')}</li>
                </ul>
            </div>
        </div>
      </div>
      <div className="grid-item-domain-page">
        <div className="domain-page-box-cell-item">
            <a>
              <img
                className="domain-page-item-img"
                src={desktopDevelopment}
                alt="News AltImage"
              />
                <h3 className="title-domain-page-item">{translate('domain.TitleItem3')}</h3>
            </a>
            <div className="domain-page-item-description">
                <p>
                {translate('domain.Description3')}
                </p>
                <h4>{translate('domain.Description3H41')}</h4>
                <ul>
                  <li>{translate('domain.Description3Li1')}<b>{translate('domain.Description3Li2')}</b></li>
                  <li>{translate('domain.Description3Li3')}<b>{translate('domain.Description3Li4')}</b></li>
                </ul>
                <h4>{translate('domain.Description3H42')}</h4>
                <ul>
                  <li>{translate('domain.Description3Li5')}<b>{translate('domain.Description3Li6')}</b></li>
                  <li>{translate('domain.Description3Li7')}<b>{translate('domain.Description3Li8')}</b></li>
                </ul>
            </div>
        </div>
      </div>
      <div className="grid-item-domain-page">
        <div className="domain-page-box-cell-item">
            <a>
              <img
                className="domain-page-item-img"
                src={cloudBasedDevelopment}
                alt="News AltImage"
              />
                <h3 className="title-domain-page-item">{translate('domain.TitleItem4')}</h3>
            </a>
            <div className="domain-page-item-description">
                <p>
                {translate('domain.Description4')}
                </p>
                <ul>
                  <li>{translate('domain.Description4Li1')}<b>{translate('domain.Description4Li2')}</b></li>
                  <li>{translate('domain.Description4Li3')}<b>{translate('domain.Description4Li4')}</b></li>
                </ul>
            </div>
        </div>
      </div>
      <div className="grid-item-domain-page">
        <div className="domain-page-box-cell-item">
            <a>
              <img
                className="domain-page-item-img"
                src={telecomNetworking}
                alt="News AltImage"
              />
                <h3 className="title-domain-page-item">{translate('domain.TitleItem5')}</h3>
            </a>
            <div className="domain-page-item-description">
                <p>
                {translate('domain.Description5')}
                </p>
                <ul>
                  <li>{translate('domain.Description5Li1')}<b>{translate('domain.Description5Li2')}</b></li>
                  <li>{translate('domain.Description5Li3')}<b>{translate('domain.Description5Li4')}</b></li>
                  <li>{translate('domain.Description5Li5')}<b>{translate('domain.Description5Li6')}</b></li>
                  <li>{translate('domain.Description5Li7')}<b>{translate('domain.Description5Li8')}</b></li>
                  <li>{translate('domain.Description5Li9')}</li>
                </ul>
            </div>
        </div>
      </div>
      <div className="grid-item-domain-page">
        <div className="domain-page-box-cell-item">
            <a>
              <img
                className="domain-page-item-img"
                src={testingQualityAssurance}
                alt="News AltImage"
              />
                <h3 className="title-domain-page-item">{translate('domain.TitleItem6')}</h3>
            </a>
            <div className="domain-page-item-description">
                <p>
                {translate('domain.Description6')}
                </p>
                <ul>
                  <li>{translate('domain.Description6Li1')}<b>{translate('domain.Description6Li2')}</b></li>
                  <li>{translate('domain.Description6Li3')}<b>{translate('domain.Description6Li4')}</b></li>
                  <li>{translate('domain.Description6Li5')}<b>{translate('domain.Description6Li6')}</b></li>
                  <li>{translate('domain.Description6Li7')}<b>{translate('domain.Description6Li8')}</b></li>
                  <li>{translate('domain.Description6Li9')}</li>
                </ul>
            </div>
        </div>
      </div>
      <div className="grid-item-domain-page">
        <div className="domain-page-box-cell-item">
            <a>
              <img
                className="domain-page-item-img"
                src={blockchainDevelopment}
                alt="News AltImage"
              />
                <h3 className="title-domain-page-item">{translate('domain.TitleItem7')}</h3>
            </a>
            <div className="domain-page-item-description">
                <p>
                {translate('domain.Description7')}
                </p>
                <ul>
                  <li>{translate('domain.Description7Li1')}<b>{translate('domain.Description7Li2')}</b></li>
                  <li>{translate('domain.Description7Li3')}<b>{translate('domain.Description7Li4')}</b></li>
                  <li>{translate('domain.Description7Li5')}</li>
                </ul>
            </div>
        </div>
      </div>
      <div className="grid-item-domain-page">
        <div className="domain-page-box-cell-item">
            <a>
              <img
                className="domain-page-item-img"
                src={artificialIntelligence}
                alt="News AltImage"
              />
                <h3 className="title-domain-page-item">{translate('domain.TitleItem8')}</h3>
            </a>
            <div className="domain-page-item-description">
                <p>
                {translate('domain.Description8')}
                </p>
                <ul>
                  <li>{translate('domain.Description8Li1')}<b>{translate('domain.Description8Li2')}</b></li>
                  <li>{translate('domain.Description8Li3')}<b>{translate('domain.Description8Li4')}</b></li>
                  <li>{translate('domain.Description8Li5')}<b>{translate('domain.Description8Li6')}</b></li>
                </ul>
            </div>
        </div>
      </div>
      <div className="grid-item-domain-page">
        <div className="domain-page-box-cell-item">
            <a>
              <img
                className="domain-page-item-img"
                src={erpCrmImplementation}
                alt="News AltImage"
              />
                <h3 className="title-domain-page-item">{translate('domain.TitleItem9')}</h3>
            </a>
            <div className="domain-page-item-description">
                <p>
                {translate('domain.Description9')}
                </p>
                <ul>
                  <li>{translate('domain.Description9Li1')}<b>{translate('domain.Description9Li2')}</b></li>
                  <li>{translate('domain.Description9Li3')}<b>{translate('domain.Description9Li4')}</b></li>
                  <li>{translate('domain.Description9Li5')}<b>{translate('domain.Description9Li6')}</b></li>
                  <li>{translate('domain.Description9Li7')}<b>{translate('domain.Description9Li8')}</b></li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Domain;