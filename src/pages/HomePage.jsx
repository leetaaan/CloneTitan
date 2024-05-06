import React, { useState, useEffect } from "react";
import MainSlider from "../components/mainSlider/MainSlider"
import Box from "../components/box/Box";
import { getAllSection, getRequestForm } from "../api/ItemApi";
import { useSelector } from "react-redux";
import Request from "../components/requestForm/Request";

function HomePage() {
  const [box, setBox] = useState([]);
  const [request, setRequest] = useState({
    items: "",
  });
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );

  const payload = {
    locale: currentLanguage
  }

  useEffect(() => {
    getAllSection(payload).then((data) => {
      if (data && data.length > 0) {
        setBox(data);
      }
    });
    getRequestForm(payload).then((data) => {
      if (data) {
        setRequest({
          items: data.items,
        });
      }
    });
  }, [currentLanguage]);

  return (
    <div className="App">
      <MainSlider locale={currentLanguage} />
      {box.length > 0
        ? box.map((item, index) => (
            <Box
              key={index}
              description={item.description}
              name={item.name}
              title={item.title}
              items={item.items}
              backgroundUrl={item.backgroundUrl}
            />
          ))
        : null}
        <div className="request-container">
      {request.items.length > 0
        ? request.items.map((item, index) => (
            <Request
              key={index}
              title={item.title}
              description={item.description}
              label={item.buttonLabel}
              locale={currentLanguage}
            />
          ))
        : null}
        </div>
    </div>
  );
}
export default HomePage;
