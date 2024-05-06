import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import "./DashBoard.css";
import Sidebar from "../../../components/admin/sideBar/SideBar";
import Switch from "@mui/material/Switch";
import { slugName, language, linkSocial } from "../../../enum/EnumApi";
import {
  getItemByCategory,
  getAllSection,
  getFooter,
  changeBtnStatus,
} from "../../../api/ItemApi";
import { Link } from "react-router-dom";
import MainSlider from "../../../components/mainSlider/MainSlider";
import InputBox from "../../../components/admin/input/Input";
import { splitIcon } from "../../../common/functions";

const DashBoard = () => {
  const [box, setBox] = useState([]);
  const [logo, setLogo] = useState([]);
  const [footer, setFooter] = useState([]);
  const [switchHandlerCalled, setSwitchHandlerCalled] = useState();

  const switchHandler = () => {
    changeBtnStatus();
    setSwitchHandlerCalled(!switchHandlerCalled);
  };
  const payload = {
    categorySlug: slugName.logo,
    language: language.english,
  };
  useEffect(() => {
    getItemByCategory(payload).then((data) => {
      if (data) {
        setLogo(data);
      } else setLogo([]);
    });
    getAllSection(language.english).then((data) => {
      if (data && data.length > 0) {
        setBox(data);
      }
    });
    getFooter(language.english).then((data) => {
      if (data) {
        setFooter(data.items);
      } else setFooter([]);
    });
  }, [switchHandlerCalled]);

  return (
    <>
      <Box sx={{ padding: 10, display: "flex" }}>
        <Sidebar name="Manager Home" />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <div className="cms-box">
            {logo.map((item, index) => (
              <>
                <p className="cms-title">Header</p>
                <div className="cms-logo-btn-language" key={index}>
                  <div className="cms-logo">
                    <Link to="/admin/logo">
                      <img
                        key={index}
                        className="logo-cms-homepage"
                        src={item.imageUrl}
                        alt="logo"
                      />
                    </Link>
                    <Link to="/admin/logo" className="cms-overlay">
                      <div className="logo-text">Change logo for Website</div>
                    </Link>
                  </div>
                  <div className="hide-show-btn">
                    <div className="hide-show-top">
                      <p>Hide/Show button language:</p>
                    </div>
                    Hide{" "}
                    <Switch
                      checked={item.buttonStatus}
                      onChange={switchHandler}
                      size="medium"
                      color="primary"
                    />{" "}
                    Show
                  </div>
                </div>
              </>
            ))}
          </div>

          <div className="cms-box">
            <div className="cms-title-link">
              <p className="cms-title">Banner</p>
              <Link to="/admin/banner" className="see-more-cms">
                See more <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
            <div className="cms-banner-swiper">
              <MainSlider />
            </div>
          </div>

          <div className="cms-box">
            <p className="cms-title">Section</p>
            <div className="cms-section-card">
              {box.map((item, i) => (
                <Link
                  className="item-cms-section"
                  to={`/admin/${item.name}`}
                  key={i}
                >
                  <div className="cms-card-section">
                    <h3 className="cms-card-title">{i+1}. {item.name}</h3>
                    <p className="cms-card-content">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="cms-box">
            <div className="cms-footernbtn">
              <p className="cms-title">Footer</p>
            </div>
            <div className="content-footer-cms">
              {footer.length > 0
                ? footer.map((items, index) => (
                    <>
                      <div className="cms-box-footer-infor" key={index}>
                        <InputBox name="title" value={items.title} />
                        {items.address ? (
                          <div>
                            <InputBox
                              icon="solid fa-location-dot"
                              value={items.address}
                            />
                            <InputBox
                              icon="solid fa-phone"
                              value={items.telNumber}
                            />
                          </div>
                        ) : items.description ? (
                          <InputBox value={items.description} />
                        ) : items.infoGmail ? (
                          <>
                            <InputBox
                              icon="solid fa-envelope"
                              value={items.infoGmail}
                            />
                            <InputBox
                              icon={
                                items.infoGmail2 === linkSocial.skype
                                  ? "brands fa-skype"
                                  : "solid fa-envelope"
                              }
                              value={items.infoGmail2}
                            />
                          </>
                        ) : items.subItems ? (
                          items.subItems.map((subItem, index) => (
                            <div key={index}>
                              <InputBox
                                icon={`brands fa-${splitIcon(
                                  subItem.facebook
                                )} `}
                                value={subItem.facebook}
                              />
                              <InputBox
                                icon={`brands fa-${splitIcon(
                                  subItem.twitter
                                )} `}
                                value={subItem.twitter}
                              />
                              <InputBox
                                icon={`brands fa-${splitIcon(
                                  subItem.linkedin
                                )} `}
                                value={subItem.linkedin}
                              />
                              <InputBox
                                icon={`brands fa-${splitIcon(
                                  subItem.youtube
                                )} `}
                                value={subItem.youtube}
                              />
                            </div>
                          ))
                        ) : null}
                        <Link
                          to={`/admin/footer/${items.id}`}
                          className="cms-overlay-footer"
                        >
                          <div className="logo-text">
                            Change {items.title} on Home page
                          </div>
                        </Link>
                      </div>
                    </>
                  ))
                : null}
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default DashBoard;
