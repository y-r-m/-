import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styles from "styles/Seat.module.css";

export default function Seat() {
  const buttonCount = 20; // 버튼 수 설정
  const seats = Array.from({ length: buttonCount }, (_, idx) => idx + 1);
  const [seatFull, setSeatFull] = useState([]);

  const toggleActive = (index) => {
    if (seatFull.includes(index)) {
      setSeatFull((prev) => prev.filter((seat) => seat !== index));
    } else {
      setSeatFull((prev) => [...prev, index]);
    }
  };

  return (
    <div className={styles.seat}>
      <div className={styles.header}>
        <Link to="/cafe" className={styles.back}>
          <FontAwesomeIcon icon={faAngleLeft} size="2x" />
        </Link>
        <h2>카페 이름</h2>
      </div>
      <div className={styles.table_grid}>
        <div className={styles.btn_grid}>
          {seats.slice(0, 4).map((item, idx) => (
            <button
              className={`${styles.btn} ${
                seatFull.includes(idx) ? styles.active : ""
              }`}
              onClick={() => toggleActive(idx)}
              key={idx}
            >
              {item}
            </button>
          ))}
        </div>
        <div className={styles.btn_grid}>
          {seats.slice(4, 8).map((item, idx) => (
            <button
              className={`${styles.btn} ${
                seatFull.includes(idx + 4) ? styles.active : ""
              }`}
              onClick={() => toggleActive(idx + 4)}
              key={idx + 4}
            >
              {item}
            </button>
          ))}
        </div>
        <div className={styles.btn_grid}>
          {seats.slice(8, 10).map((item, idx) => (
            <button
              className={`${styles.btn} ${
                seatFull.includes(idx + 8) ? styles.active : ""
              }`}
              onClick={() => toggleActive(idx + 8)}
              key={idx + 8}
            >
              {item}
            </button>
          ))}
        </div>
        <div className={styles.btn_grid}>
          {seats.slice(10, 12).map((item, idx) => (
            <button
              className={`${styles.btn} ${
                seatFull.includes(idx + 10) ? styles.active : ""
              }`}
              onClick={() => toggleActive(idx + 10)}
              key={idx + 10}
            >
              {item}
            </button>
          ))}
        </div>
        <div className={styles.btn_grid}>
          {seats.slice(12, 16).map((item, idx) => (
            <button
              className={`${styles.btn} ${
                seatFull.includes(idx + 12) ? styles.active : ""
              }`}
              onClick={() => toggleActive(idx + 12)}
              key={idx + 12}
            >
              {item}
            </button>
          ))}
        </div>
        <div className={styles.btn_grid}>
          {seats.slice(16, 20).map((item, idx) => (
            <button
              className={`${styles.btn} ${
                seatFull.includes(idx + 16) ? styles.active : ""
              }`}
              onClick={() => toggleActive(idx + 16)}
              key={idx + 16}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
