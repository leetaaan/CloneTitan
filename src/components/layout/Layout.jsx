import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = () => {

  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );

  return (
    <>
      <Navbar />
      <div>
        <Outlet/>
      </div>
      <Footer locale={currentLanguage} />
    </>
  );
};

export default Layout;