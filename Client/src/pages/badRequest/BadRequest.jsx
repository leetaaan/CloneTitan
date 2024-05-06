import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import './BadRequest.css';

const BadRequest = () => {
  const data = require("../../imgURL.json");
  const servicesBanner = data.servicesBanner;
  const { t: translate } = useTranslation();

  return (
    <>
      <div className="service-page-banner">
        <img className="service-page-image" src={servicesBanner} alt="Service AltImage"></img>
      </div>
      <div className="bad-request-container">
      <h1>{translate('badRequest.Error')}</h1>
      <h2>{translate('badRequest.ErrorInfo')}</h2>
      <h3>{translate('badRequest.Detail')}</h3>
      <Link to="/"><button>{translate('badRequest.BackHome')}</button></Link>
      </div>
    </>
  );
};

export default BadRequest;