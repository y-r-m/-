import React from "react";
import logo from "images/Logo.png";
import illust from "images/illust.png";
import { Link } from "react-router-dom";
import styles from "styles/Landing.module.css";
export default function Landing() {
  return (
    <div className={styles.landing}>
      <div className={styles.landing_text}>
        <h1 className={styles.logo_text}>GiveMY__ Seat</h1>
        <img src={logo} className={styles.landing_img} />
      </div>
      <Link to="/main" className={styles.login}>
        카카오 로그인으로 시작하기
      </Link>
      <img src={illust} className={styles.illust} />
    </div>
  );
}
