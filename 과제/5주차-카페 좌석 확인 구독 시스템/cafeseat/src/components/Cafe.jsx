import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faLocationDot,
  faPhone,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import heart from "images/HeartFilled.png";
import cafe_img from "images/Cafe_img.png";
import { Link } from "react-router-dom";
import styles from "styles/Cafe.module.css";

export default function Cafe() {
  const [viewMore, setViewMore] = useState(false);

  const onClickViewMore = () => {
    setViewMore(!viewMore);
  };

  const menuItems = [
    { name: "아메리카노", price: "3500원" },
    { name: "바닐라라떼", price: "5000원" },
    { name: "치즈케이크", price: "5000원" },
    { name: "카페라떼", price: "4500원" },
    { name: "아이스티", price: "3500원" },
    { name: "보틀 음료", price: "2500원" },
  ];

  const visibleMenu = viewMore ? menuItems : menuItems.slice(0, 3);
  return (
    <div className={styles.cafe}>
      <header className={styles.header}>
        <Link to="/main" style={{ textDecoration: "none", color: "black" }}>
          <FontAwesomeIcon icon={faAngleLeft} className={styles.back} />
        </Link>
        <h3 style={{ fontSize: "20px" }}>카페 여기</h3>
        <div className={styles.content}>
          <FontAwesomeIcon icon={faInstagram} className={styles.insta} />
          <img src={heart} className={styles.heart} />
        </div>
      </header>
      <main>
        <section className={styles.cafe_explain}>
          <img src={cafe_img} className={styles.cafe_img} />
          <div className={styles.cafe_detail}>
            <div>
              <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
              주소
            </div>
            <div>
              <FontAwesomeIcon icon={faClock} className={styles.icon} />
              운영시간
            </div>
            <div>
              <FontAwesomeIcon icon={faPhone} className={styles.icon} />
              010-0000-0000
            </div>
          </div>
          <button className={styles.seat_btn}>
            <Link to="/seat" style={{ textDecoration: "none", color: "white" }}>
              좌석 현황
            </Link>
          </button>
        </section>
        <section className={styles.menu}>
          <h3>메뉴</h3>
          {visibleMenu.map((item, index) => (
            <li key={index}>
              {item.name} ------ {item.price}
            </li>
          ))}
          {menuItems.length > 3 && (
            <button onClick={onClickViewMore} className={styles.more_btn}>
              {viewMore ? "접기" : "더보기"}
            </button>
          )}
        </section>
      </main>
    </div>
  );
}
