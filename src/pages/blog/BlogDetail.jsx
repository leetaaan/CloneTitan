import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Blog.css";
import "./BlogDetail.css";
import { getItemBySlug, getItemByDetailItem } from "../../api/ItemApi";
import { convertDate } from "../../common/functions";
import { slugName } from "../../enum/EnumApi";
import { Link, useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import BoxSlider from "../../components/boxSlider/BoxSlider";
import { useSelector } from "react-redux";

function BlogDetail() {
  const [blog, setBlog] = useState([]);
  const [blogSlider, setBlogSlider] = useState([]);
  const { t: translate } = useTranslation();
  const data = require("../../imgURL.json");
  const blogsBanner = data.blogsBanner;
  const blogsTitleB = data.blogsTitleB;
  const blogsTitleL = data.blogsTitleL;
  const blogsTitleO = data.blogsTitleO;
  const blogsTitleG = data.blogsTitleG;
  const blogsTitleS = data.blogsTitleS;
  const { slug } = useParams();
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );

  const detailPayload = {
    slug: slug,
    locale: currentLanguage
  }

  useEffect(() => {
    getItemBySlug(detailPayload).then((data) => {
      if (data) {
        setBlog(data);
      } else {
        setBlog([]);
      }
    });
  }, [slug]);

  let payload = {
    sectionSlug: slugName.blogs,
    urlSlug: slug,
  };

  useEffect(() => {
    getItemByDetailItem(payload).then((data) => {
      if (data) {
        setBlogSlider(data);
      } else {
        setBlogSlider([]);
      }
    });
  }, [slug]);

  if (!blog) {
    return <div>{translate("loading.LoadingDefault")}</div>;
  }

  return (
    <>
      <div className="blog-page-banner">
        <div className="blog-page-title">
          <img src={blogsTitleB} alt="B" />
          <img src={blogsTitleL} alt="L" />
          <img src={blogsTitleO} alt="O" />
          <img src={blogsTitleG} alt="G" />
          <img src={blogsTitleS} alt="S" />
        </div>
        <img
          className="blog-page-image"
          src={blogsBanner}
          alt="Blogs Page Banner"
        ></img>
      </div>
      <div class="breadcrumb">
        <div class="container-blog-detail">
          <Link to="/" className="breadcrumb-home">
            Home
          </Link>
          <span class="sep">&gt;</span>
          <Link to="/news/" className="section-page">
            Blogs
          </Link>
        </div>
      </div>
      <div className="box-container-blog-detail">
          <div className="content-blog-detail">
          <h1 className="title-blog-detail">{blog.title}</h1>
          <p className="date-blog-detail">
            {blog.subTitle} - {convertDate(blog.createdDate)}
          </p>
            <div className="description-blog-detail">
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(blog.description),
                }}
              ></p>
            </div>
          </div>
        <div>
        <BoxSlider
          name={slugName.blogs}
          items={blogSlider}
          textBoxStyle="hidden"
          titleItem="blog-new-title"
          logoBoxStyle="news-blog-logo"
          switchNavigation={true}
          hasSubTitle={true}
          hasShort={true}
        />
        </div>
      </div>
    </>
  );
}

export default BlogDetail;
