import React from "react";
import Home from "pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeHeader from "components/HomeHeader";
import HomeFooter from "components/HomeFooter";
import style from "styles/App.module.css";

function App() {
  return (
    <div className={style.appStyle}>
      <Router>
        <HomeHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/search"
            element={
              {
                /* < 검색페이지 /> */
              }
            }
          />
        </Routes>
        <HomeFooter />
      </Router>
    </div>
  );
}
export default App;
