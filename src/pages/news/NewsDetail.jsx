import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { getItemByDetailItem, getItemBySlug } from "../../api/ItemApi";
import { slugName } from "../../enum/EnumApi";
import { convertDate } from "../../common/functions";
import BoxSlider from "../../components/boxSlider/BoxSlider";
import { Link } from "react-router-dom";
import "./NewsDetail.css";
import DOMPurify from "dompurify";
import { useSelector } from "react-redux";

const NewsDetail = () => {
  const { slug } = useParams();
  const [news, setNews] = useState([]);
  const [newsItem, setNewsItem] = useState(null);
  const { t: translate } = useTranslation();
  const data = require("../../imgURL.json");
  const newsBanner = data.newsBanner;
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );

  const detailPayload = {
    slug: slug,
    locale: currentLanguage,
  };

  let payload = {
    sectionSlug: slugName.news,
    urlSlug: slug,
  };

  useEffect(() => {
    getItemBySlug(detailPayload).then((data) => {
      if (data) {
        setNewsItem(data);
      } else {
        setNewsItem(null);
      }
    });
    getItemByDetailItem(payload).then((data) => {
      if (data) {
        setNews(data);
      } else {
        setNews([]);
      }
    });
  }, [detailPayload.slug, payload.slug]);

  if (!newsItem) {
    return <div>{translate("loading.LoadingDefault")}</div>;
  }

  return (
    <>
      <div className="news-page-banner">
        <h1 className="news-page-title">{translate("titleName.News")}</h1>
        <img
          className="news-page-image"
          src={newsBanner}
          alt="News Page Banner"
        ></img>
      </div>
      <div class="breadcrumb">
        <div class="container-news-detail">
          <Link to="/" className="breadcrumb-home">
            Home
          </Link>
          <span class="sep">&gt;</span>
          <Link to="/news/" className="section-page">
            News &amp; Events
          </Link>
        </div>
      </div>
      <div className="box-container-news-detail">
        <div className="content-news-detail">
          <div className="post-title-news-detail">
            <h1 className="title-news-detail">{newsItem.title}</h1>
            <div className="date-news-detail">
              {convertDate(newsItem.createdDate)}
            </div>
          </div>
          <div className="description-news-detail">
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(newsItem.description),
              }}
            ></p>
          </div>
        </div>
        <div>
          <BoxSlider
            name={slugName.news}
            items={news}
            textBoxStyle="hidden"
            titleItem="blog-new-title"
            logoBoxStyle="news-blog-logo"
            switchNavigation={true}
            slidedelay="false"
            hasShort={true}
          />
        </div>
      </div>
    </>
  );
};

export default NewsDetail;
