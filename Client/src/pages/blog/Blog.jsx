import React, { useState, useEffect } from "react";
import './Blog.css'
import { getItemBySectionSlug } from "../../api/ItemApi";
import { queryDefault, slugName } from "../../enum/EnumApi";
import { convertDate } from "../../common/functions";
import Pager from "../../components/pager/Pager";
import { Link, useParams } from "react-router-dom";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  const [metadata, setMetadata] = useState(null);
  const data = require("../../imgURL.json");
  const blogsBanner = data.blogsBanner;
  const blogsTitleB = data.blogsTitleB;
  const blogsTitleL = data.blogsTitleL;
  const blogsTitleO = data.blogsTitleO;
  const blogsTitleG = data.blogsTitleG;
  const blogsTitleS = data.blogsTitleS;
  const { pageNumber } = useParams();

  let payload = {
    sectionSlug: slugName.blogs,
    pageSize:  queryDefault.pageSizeDefaultNewsBlogs,
    pageNumber: pageNumber || queryDefault.pageNumberDefault,
  }

  useEffect(() => {
    getItemBySectionSlug(payload).then((data) => {
      if (data) {
        setBlog(data.items);
        setMetadata(data.metadata);
      } else {
        setBlog([]);
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
        setBlog(data.items);
        setMetadata(data.metadata);
        window.history.pushState(null, null, `/blogs/page/${pageNumber}`);
      } else {
        setBlog([]);
        setMetadata(null);
      }
    });
  };

  return (
    <>
      <div className="blog-page-banner">
        <div className="blog-page-title">
              <img src={blogsTitleB} alt="B"/>
              <img src={blogsTitleL} alt="L"/>
              <img src={blogsTitleO} alt="O"/>
              <img src={blogsTitleG} alt="G"/>
              <img src={blogsTitleS} alt="S"/> 
          </div>
        <img className="blog-page-image" src={blogsBanner} alt="Blogs Page Banner"></img>
      </div>
      <div className="box home-body-blog-page">
        <div className="grid-container-blog-page">
          {blog.length > 0
            ? blog.map((item, index) => (
                <div className="grid-item-blog-page" key={index}>
                  <Link to={`/blogs/${item.urlSlug}`}> 
                    <img
                      className="blog-page-item-img"
                      src={item.imageUrl}
                      alt="Blog AltImage"
                    />
                      <h1 className="title-blog-page-item">{item.title}</h1>   
                  </Link>
                  <p className="blog-page-item-date">{item.subTitle} - {convertDate(item.createdDate)}</p>
                  <p className="blog-page-item-description">{item.shortDescription}</p>
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

export default Blog;