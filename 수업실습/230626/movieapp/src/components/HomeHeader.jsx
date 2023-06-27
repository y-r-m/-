import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import styles from "styles/HomeHeader.module.css";

export default function HomeHeader() {
  return (
    <nav className={styles.navigator}>
      <p>
        <Link to="/">MOVIE</Link>
      </p>
      <p className={styles.inputBox}>
        <input type="text" placeholder="검색" />
      </p>
    </nav>
  );
}
