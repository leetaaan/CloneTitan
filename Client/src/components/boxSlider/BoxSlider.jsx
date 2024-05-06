import React from "react";
import { Link } from "react-router-dom";
import "../box/Box.css";
import { delaySlide, sliderNumber, sliderResponsive } from "../../enum/EnumApi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import DOMPurify from "dompurify";
import { convertDate } from "../../common/functions";

const BoxSlider = (props) => {
  const {
    name,
    slideNumber,
    switchNavigation,
    slideDelay,
    items,
    itemStyle,
    titleItem,
    textBoxStyle,
    logoBoxStyle,
    hasBorder,
    hasSubTitle,
    sectionSliderNumber,
    hasShort
  } = props;

  return (
    <Swiper
      slidesPerView={slideNumber || sliderNumber.defaultSlideNumber}
      breakpoints={ sectionSliderNumber || sliderResponsive.DefaultBreakpoints}
      rewind={true}
      navigation={switchNavigation}
      autoplay={{
        pauseOnMouseEnter: true,
        delay: slideDelay || delaySlide.delay5s,
      }}
      modules={[Pagination, Navigation, Autoplay]}
    >
      {items.length > 0
        ? items.map((item, index) => (
            <SwiperSlide className={itemStyle || "box-item"} key={index}>
              <a className="link-to-index" href={`/${name}/${item.urlSlug}`}>
                <div>
                  <img
                    className={logoBoxStyle || "item-logo"}
                    src={item.imageUrl}
                    alt="Item AltImage"
                  />
                </div>
                <h1 className={titleItem || "title-item"}>{item.title}</h1>
              </a>

              <div className={textBoxStyle || "item-text"}>
                {hasSubTitle ? (
                  <p>
                    By {item.subTitle} - {convertDate(item.createdDate)}
                  </p>
                ) : null}
                {hasBorder ? (
                  <div className="desc-border">
                    <ul
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(item.description),
                      }}
                    />
                  </div>
                ) : (
                  <p className="desc">
                    {hasShort ? (
                      <p
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(item.shortDescription),
                        }}
                      ></p>
                    ) : (
                      <p
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(item.description),
                        }}
                      ></p>
                    )} <br />
                    {item.buttonStatus ? (
                      <Link to="/careers/">
                        <button className="btn-lastestjobs">
                          {item.buttonLabel}
                        </button>
                      </Link>
                    ) : null}
                  </p>
                )}
              </div>
            </SwiperSlide>
          ))
        : null}
    </Swiper>
  );
};

export default BoxSlider;
