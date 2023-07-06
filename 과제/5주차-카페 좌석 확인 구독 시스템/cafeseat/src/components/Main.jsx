import React from "react";
import heart from "images/HeartFilled.png";
import main_img1 from "images/Main_img1.png";
import main_img2 from "images/Main_img2.png";
import { Link } from "react-router-dom";
import styles from "styles/Main.module.css";
export default function Main() {
  const cafeList = [
    {
      name: "카페 여기",
      address: `서울특별시 서대문구 연희로2길 62 한빛미디어`,
      cate1: `분위기 좋은`,
      cate2: `카공`,
    },
    {
      name: "카페 저기",
      address: `서울특별시 서대문구 연희로2길 62 한빛미디어`,
      cate1: `조용한`,
      cate2: `카공`,
    },
    {
      name: "카페 거기",
      address: `서울특별시 서대문구 연희로2길 62 한빛미디어`,
      cate1: `감성`,
      cate2: `사진 찍기 좋은 곳`,
    },
  ];
  const subscribe = cafeList.slice(0, 3);
  return (
    <div className={styles.main}>
      <h2 className={styles.title}>구독 리스트</h2>
      <ul className={styles.sub_list}>
        {subscribe.map((item, index) => (
          <li key={index}>
            <Link to="/cafe" style={{ textDecoration: "none", color: "black" }}>
              <div className={styles.cafe_list}>
                <img src={main_img1} className={styles.main_img1} />
                <img src={heart} className={styles.heart} />
                <div className={styles.cafe_detail}>
                  <h3> {item.name}</h3>
                  <h6>
                    {item.address.length < 20
                      ? item.address
                      : item.address.slice(0, 10) + "..."}
                  </h6>
                  <button className={styles.cate_btn}>{item.cate1}</button>
                  <button className={styles.cate_btn}>{item.cate2}</button>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
