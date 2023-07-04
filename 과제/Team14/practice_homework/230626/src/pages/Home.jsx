import React from "react";
import HomeFooter from "components/HomeFooter";
import HomeHeader from "components/HomeHeader";
import HomeMain from "components/HomeMain";
import "styles/reset.css";
import styles from "styles/layout.module.css";

export default function Home() {
  return (
    <div className={styles.layout}>
      <HomeHeader />
      <HomeMain />
      <HomeFooter />
    </div>
  );
}
