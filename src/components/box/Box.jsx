import React, { useState } from "react";
import "./Box.css";
import {
  numberLength,
  delaySlide,
  sectionName,
  sliderNumber,
  boxSliderClassNameConfig,
  titleLinks,
  sliderResponsive,
} from "../../enum/EnumApi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import BoxSlider from "../boxSlider/BoxSlider";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

const Box = (props) => {
  const { name, title, items, description, backgroundUrl } = props;
  const [showPopup, setShowPopup] = useState(false);
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(null);
  const handleSlideClick = (index) => {
    setSelectedSlideIndex(index);
    setShowPopup(true);
    document.body.classList.add("popup-open");
  };
  const handleClosePopup = () => {
    setShowPopup(false);
    document.body.classList.remove("popup-open");
  };

  const renderBoxSlider = (name) => {
    switch (name) {
      case sectionName.Service:
        return (
          <BoxSlider
            name={name}
            items={items}
            title={title}
            description={description}
            switchNavigation={false}
            sectionSliderNumber={sliderResponsive.ThreeItemBreakpoints}
          />
        );
      case sectionName.Domain:
        return (
          <BoxSlider
            name={name}
            items={items}
            title={title}
            description={description}
            itemStyle="domain-item"
            titleItem="white"
            logoBoxStyle="domain-icon"
            swiperStyle="domainSwiper"
            slideNumber={sliderNumber.defaultSlideNumber}
            switchNavigation={true}
            sectionSliderNumber={sliderResponsive.DomainBreakpoints}
          />
        );
      case sectionName.Model:
        return (
          <BoxSlider
            name={sectionName.Service}
            items={items}
            title={title}
            description={description}
            logoBoxStyle="item-logo"
            switchNavigation={false}
            hasBorder={true}
            sectionSliderNumber={sliderResponsive.ThreeItemBreakpoints}
          />
        );
      case sectionName.Client:
        return (
          <BoxSlider
            items={items}
            title={title}
            description={description}
            itemStyle="outclient-item"
            logoBoxStyle="outclient-icon"
            titleItem="hidden"
            textBoxStyle="hidden"
            switchNavigation={true}
            slideNumber={sliderNumber.ourClientSlideNumber}
            sectionSliderNumber={sliderResponsive.ClientsBreakpoints}
          />
        );
      case sectionName.Customer:
        return (
          <>
            <Swiper
              autoplay={{
                delay: delaySlide.delay5s,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              breakpoints={sliderResponsive.oneSlideNumber}
            >
              {items.length > 0
                ? items.map((item, index) => (
                    <SwiperSlide key={index}>
                      <a id="edit" onClick={() => handleSlideClick(index)}>
                        <div className="box-customer">
                          <div className="customer-item">
                            <img
                              className="customer-image"
                              src={item.imageUrl}
                            />
                            <h4 className="customer-name">{item.title}</h4>
                            <h4 className="customer-title-border">
                              {item.subTitle}
                            </h4>
                            <div className="customer-description">
                              {item.description}
                            </div>
                          </div>
                        </div>
                      </a>
                    </SwiperSlide>
                  ))
                : null}
            </Swiper>
            {showPopup && selectedSlideIndex !== null && (
              <div
                className="customer-popup-overlay"
                onClick={handleClosePopup}
              >
                <div className="customer-modal-dialog">
                  <div
                    className="customer-modal-header"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      className="customer-popup-close"
                      onClick={handleClosePopup}
                    >
                      X
                    </button>
                  </div>
                  <div
                    className="customer-modal-body"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="customer-popup-image-selection">
                      <img
                        className="customer-popup-image"
                        src={items[selectedSlideIndex].imageUrl}
                        alt="Customer Popup AltImage"
                      />
                    </div>
                    <div className="customer-popup-context-selection">
                      <h4 className="customer-popup-title">
                        {items[selectedSlideIndex].title}
                      </h4>
                      <p className="customer-popup-subtitle">
                        {items[selectedSlideIndex].subTitle}
                      </p>
                      <p className="customer-popup-description">
                        {items[selectedSlideIndex].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        );
      case sectionName.Recognized:
        return (
          <BoxSlider
            items={items}
            title={title}
            description={description}
            itemStyle="recognized-item"
            logoBoxStyle="recognized-icon"
            titleItem="hidden"
            textBoxStyle="hidden"
            slideNumber={sliderNumber.recognizedSlideNumber}
            sectionSliderNumber={sliderResponsive.RecognizedBreakpoints}
          />
        );
      case sectionName.LastestJobs:
        return (
          <BoxSlider
            name={name}
            items={items}
            title={title}
            description={description}
            itemStyle="item-one-colum-lastest-jobs"
            titleItem="hidden"
            logoBoxStyle="img-one-colum"
            swiperStyle="item-one-colum"
            textBoxStyle="text-one-colum-lastest-jobs"
            slideNumber={sliderNumber.oneSlideNumber}
            sectionSliderNumber={sliderResponsive.OneItemBreakpoints}
          />
        );
      case sectionName.New:
        return (
          <BoxSlider
            name={name}
            items={items}
            title={title}
            description={description}
            textBoxStyle="news-blog-text"
            titleItem="blog-new-title"
            logoBoxStyle="news-blog-logo"
            slidedelay="false"
            hasShort={true}
            />
        );
      case sectionName.Blog:
          return (
            <BoxSlider
            name={name}
            items={items}
            title={title}
            description={description}
            textBoxStyle="news-blog-text"
            titleItem="blog-new-title"
            logoBoxStyle="news-blog-logo"
            switchNavigation={false}
            hasSubTitle={true}
            hasShort={true}
          />
        );
      default:
        if (items.length === numberLength.small) {
          return (
            <BoxSlider
              name={name}
              items={items}
              title={title}
              description={description}
              itemStyle="item-one-colum"
              titleItem="hidden"
              logoBoxStyle="img-one-colum"
              swiperStyle="item-one-colum"
              textBoxStyle="text-one-colum"
              slideNumber={sliderNumber.oneSlideNumber}
              sectionSliderNumber={sliderResponsive.OneItemBreakpoints}
            />
          );
        } else if (items.length <= numberLength.large) {
          return (
            <BoxSlider
              items={items}
              title={title}
              description={description}
              switchNavigation={false}
            />
          );
        } else if (items.length > numberLength.large) {
          return (
            <BoxSlider
              items={items}
              title={title}
              description={description}
              switchNavigation={true}
            />
          );
        } else {
          return null;
        }
    }
  };

  return (
    <div className={boxSliderClassNameConfig[name]?.boxBody || "box-body"} style={{ backgroundImage: `url(${backgroundUrl})`, backgroundAttachment: "fixed"}}>
      <div
        className={
          boxSliderClassNameConfig[name]?.boxContainer || "box-container"
        }
      >
        <div className={"box-title-venture"}>
          <h1
            className={
              boxSliderClassNameConfig[name]?.titleStyle || "box-title"
            }
          >
            <Link to={titleLinks[name]?.link || ""}><a>{title}</a></Link>
          </h1>
        </div>
        <div className={boxSliderClassNameConfig[name]?.boxdesc || "desc"}>
         <p
           dangerouslySetInnerHTML={{
           __html: DOMPurify.sanitize(description),
          }}
         ></p>
        </div>
        <div className="box-column">{renderBoxSlider(name)}</div>
      </div>
    </div>
  );
};

export default Box;
