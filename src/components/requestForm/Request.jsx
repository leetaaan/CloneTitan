import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./Request.css";
import { formData, error, numberLength, titleLinks } from "../../enum/EnumApi";
import { postRequestForm } from "../../api/ItemApi";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Request = (props) => {
  const navigate = useNavigate();
  const { title, description, label } = props;
  const { t: translate } = useTranslation();
  const [inputFields, setInputFields] = useState(formData);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [capVal, setCapVal] = useState(null);
  const validateValues = (inputValues) => {
    let errors = {};
    if (inputValues.name.length < numberLength.medium) {
      errors.name = error.tooShort;
    }
    if (inputValues.email.length < numberLength.huge) {
      errors.email = error.tooShort;
    }
    if (inputValues.subject.length < numberLength.medium) {
      errors.subject = error.tooShort;
    }
    if (inputValues.message.length < numberLength.huge) {
      errors.message = error.tooShort;
    }
    return errors;
  };
  const finishSubmit = (e) => {
    e.preventDefault();
    setErrors(validateValues(inputFields));
    if (Object.keys(errors).length === numberLength.zero && capVal) {
      setSubmitting(true);
      let data = new FormData(e.target);
      postRequestForm(data).then((data) => {
        if (data) {
          setInputFields({
            name: data.name,
            email: data.email,
            phone: data.phone,
            subject: data.subject,
            message: data.message,
          });
          navigate(titleLinks.contactUs);
        } else setInputFields(formData);
      });
    }
  };

  return (
    <>
      <div className="box-body-request">
          <div className="request-venture">
            <h1 className="request-title">{title}</h1>
            <p className="request-description">{description}</p>
          </div>
          {Object.keys(errors).length > numberLength.zero ? (
            <div className="error-message">
              <span>{translate('request.Error')}</span>
            </div>
          ) : !capVal && submitting ? (
            <div className="error-message">
              <span>{translate('request.ErrCaptcha')}</span>
            </div>
          ) : null}
          <form method="post" encType="multipart/form-data" onSubmit={finishSubmit} className="request-grid">
            <div className="form-group">
              <div className="request-item">
                <input placeholder={translate("request.Name")} type="text" name="name" value={inputFields.name}
                  onChange={(e) => setInputFields({ ...inputFields, name: e.target.value })}
                  className={errors.name ? "request-input input-error" : "request-input"}/>
                <div className="request-icon">
                  <i className="fa-regular fa-user" />
                </div>
              </div>
              <div className="request-item">
                <input placeholder="E-mail *" type="email" name="email" value={inputFields.email}
                  onChange={(e) => setInputFields({ ...inputFields, email: e.target.value })}
                  className={errors.email ? "request-input input-error" : "request-input"}/>
                <div className="request-icon">
                  <i className="fa-regular fa-envelope"></i>
                </div>
              </div>
              <div className="request-item">
                <input placeholder={translate("request.Phone")} type="number" name="phone" value={inputFields.phone}
                  onChange={(e) => setInputFields({ ...inputFields, phone: e.target.value })}
                  className="request-input"/>
                <div className="request-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="request-item">
                <input placeholder={translate("request.Subject")} type="text" name="subject" value={inputFields.subject}
                  onChange={(e) =>setInputFields({ ...inputFields, subject: e.target.value })}
                  className={errors.subject ? "request-input input-error" : "request-input"}/>
                <div className="request-icon">
                  <i className="fa-solid fa-book"></i>
                </div>
              </div>
              <div className="request-item">
                <textarea placeholder={translate("request.Message")} type="text" name="message" value={inputFields.message}
                  onChange={(e) => setInputFields({ ...inputFields, message: e.target.value })}
                  className={errors.message ? "request-textarea input-error" : "request-textarea"}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="request-item">
                <div className="recaptcha">
                  <ReCAPTCHA
                    sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
                    onChange={(val) => setCapVal(val)}
                  />
                </div>
              </div>
              <div className="request-item">
                <button type="submit" className="btn-request">
                  {label}
                </button>
              </div>
            </div>
          </form>
      </div>
    </>
  );
};

export default Request;