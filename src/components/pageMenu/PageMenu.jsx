import React, { useState, useEffect } from 'react'
import "./pageMenu.css"
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

function PageMenu() {
  const { t: translate } = useTranslation();
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  const isActive = (path) => {
    return currentPath === path;
  };

  return (
      <div>
        <ul data-menu="home" className="menu">
          <li className="menu-part">
            <a className={`${isActive('/') ? 'current' : ''}`} href="/" rel="home">
              {translate('menu.Home')}
            </a>
          </li>
          <li className="menu-part">
            <a className={`${isActive('/about-us/') ? 'current' : ''}`} href="/about-us/" rel="about-us">
              {translate('menu.ABOUT US')}
            </a>
            <ul className="sub-menu">
              <li>
                <a href="/about-us/" rel="about-us overview">
                  {translate('menu.Who we are?')}
                </a>
              </li>
              <li>
                <a className={`${isActive('/customers/') ? 'current' : ''}`} href="/customers/" rel="customers">
                 {translate('menu.Our Clients')}
                </a>
              </li>
              <li>
                <a className={`${isActive('/news/') ? 'current' : ''}`} href="/news/" rel="news">
                  {translate('menu.News & Events')}
                </a>
              </li>
              <li>
                <a className={`${isActive('/blogs/') ? 'current' : ''}`} href="/blogs/" target="_blog_titan">
                  {translate('menu.Blogs')}
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-part">
            <a className={`${isActive('/services/') ? 'current' : ''}`} href="/services/" rel="services">
              {translate('menu.Services')}
              <span className="caret"></span>
            </a>
            <ul className="sub-menu">
              <li>
                <a className={`${isActive('/domains/') ? 'current' : ''}`} href="/domains/" rel="domains">
                  {translate('menu.Domains & Technologies')}
                </a>
              </li>
              <li>
                <a className={`${isActive('/services/models/') ? 'current' : ''}`} href="/services/models/" rel="models">
                  {translate('menu.Engagement Models')}
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-part">
            <a className={`${isActive('/innovations/') ? 'current' : ''}`} href="/innovations/" rel="innovations">
              {translate('menu.Innovations')}
            </a>
          </li>
          <li className="menu-part">
            <a className={`${isActive('/careers/') ? 'current' : ''}`} href="/careers/" rel="careers">
              {translate('menu.Careers')}
            </a>
          </li>
          <li className="menu-part">
            <a className={`${isActive('/contact-us/') ? 'current' : ''}`} href="/contact-us/" rel="contact-us">
              {translate('menu.Contact')}
            </a>
          </li>
        </ul>
      </div>
    );
}

export default PageMenu
