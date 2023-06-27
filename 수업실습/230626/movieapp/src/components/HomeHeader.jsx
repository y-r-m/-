import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "styles/HomeHeader.module.css";

export default function HomeHeader() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchQuery}`);
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className={styles.navigator}>
      <h1>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          MOVIE
        </Link>
      </h1>
      <form onSubmit={handleSearch} className={styles.form}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleChange}
          className={styles.inputBox}
          placeholder="영화 검색"
        />
        <button type="submit" className={styles.searchBtn}>
          검색
        </button>
      </form>
    </nav>
  );
}
