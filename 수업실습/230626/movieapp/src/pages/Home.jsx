import React, { useState, useEffect } from "react";
import HomeMain from "components/HomeMain";
import style from "styles/HomeMain.module.css";

function Home() {
  return (
    <div className={style.homeStyle}>
      <div className={style.mainStyle}>
        <HomeMain />
      </div>
    </div>
  );
}
export default Home;
