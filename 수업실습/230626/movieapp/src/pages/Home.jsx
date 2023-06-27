import React from "react";
import HomeMain from "components/HomeMain";
import HomeHeader from "components/HomeHeader";
import style from "styles/HomeStyle.module.css";

function Home() {
  return (
    <div>
      <div>
        <HomeHeader />
      </div>
      <div className={style.homestyle}>
        <HomeMain />
      </div>
    </div>
  );
}
export default Home;
