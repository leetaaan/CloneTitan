import "./App.css";
import { Routes, Route } from "react-router-dom";
import { routes, adminRoutes } from "./router/Routes";
import Layout from "./components/layout/Layout";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllSection } from "./api/ItemApi";
import SectionItem from "./pages/admin/sectionItem/SectionItem";
import EditSectionItem from "./components/admin/edit/EditSectionItem";

function App() {
  const [section, setSection] = useState([]);
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );

  useEffect(() => {
    getAllSection(currentLanguage).then((data) => {
      if (data && data.length > 0) {
        setSection(data);
      }
    });
  }, [currentLanguage]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Route>
      {adminRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}

      {section.length > 0
        ? section.map((item, index) => (
            <>
              <Route
                path={`/admin/${item.name}`}
                element={
                  <SectionItem
                    key={index}
                    name={item.name}
                    items={item.items}
                  />
                }
              />
            </>
          ))
        : null}
    </Routes>
  );
}

export default App;
