import React, { useState, useEffect } from "react";
import './News.css'
import { useTranslation } from "react-i18next";
import { getItemBySectionSlug } from "../../api/ItemApi";
import { queryDefault, slugName } from "../../enum/EnumApi";
import { convertDate } from "../../common/functions";
import Pager from "../../components/pager/Pager";
import { Link, useParams } from "react-router-dom";

const News = () => {
  const [news, setNews] = useState([]);
  const [metadata, setMetadata] = useState(null);
  const { t: translate } = useTranslation();
  const data = require("../../imgURL.json");
  const newsBanner = data.newsBanner;
  const { pageNumber } = useParams();

  let payload = {
    sectionSlug: slugName.news,
    pageSize:  queryDefault.pageSizeDefaultNewsBlogs,
    pageNumber: pageNumber || queryDefault.pageNumberDefault,
  }

  useEffect(() => {
    getItemBySectionSlug(payload).then((data) => {
      if (data) {
        setNews(data.items);
        setMetadata(data.metadata);
      } else {
        setNews([]);
        setMetadata(null);
      }
    });
  }, [pageNumber]);

  const handlePageChange = (pageNumber) => {
    const newPayload = {
      ...payload,
      pageNumber: pageNumber
    };
    getItemBySectionSlug(newPayload).then((data) => {
      if (data) {
        setNews(data.items);
        setMetadata(data.metadata);
        window.history.pushState(null, null, `/news/page/${pageNumber}`);
      } else {
        setNews([]);
        setMetadata(null);
      }
    });
  };

  return (
    <>
      <div className="news-page-banner">
        <h1 className="news-page-title">{translate("titleName.News")}</h1>
        <img className="news-page-image" src={newsBanner} alt="News Page Banner"></img>
      </div>
      <div className="box home-body-news-page">
        <div className="grid-container-news-page">
          {news.length > 0
            ? news.map((item, index) => (
                <div className="grid-item-news-page" key={index}>
                  <Link to={`/news/${item.urlSlug}`}> 
                    <img
                      className="news-page-item-img"
                      src={item.imageUrl}
                      alt="News AltImage"
                    />
                      <h1 className="title-news-page-item">{item.title}</h1>   
                  </Link>
                  <p className="news-page-item-date">{convertDate(item.createdDate)}</p>
                  <p className="news-page-item-description">{item.shortDescription}</p>
                </div>
              ))
            : null}
        </div>
        {metadata && (
          <Pager metadata={metadata} onPageChange={handlePageChange} />
        )}
      </div>
    </>
  );
};

export default News;
