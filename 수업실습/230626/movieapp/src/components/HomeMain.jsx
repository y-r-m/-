import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styles from "styles/HomeMain.module.css";
function HomeMain() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setMovies(json.data.movies);
        setLoading(false);
        setImages(json.data.movies.map((val) => val.medium_cover_image));
      });
  }, []);

  const Movie = () => {
    return !loading
      ? movies.map((movie) => (
          <div
            key={movie.id}
            id={movie.id}
            title={movie.title}
            images={movie.medium_cover_image}
          >
            <Link to={`movie/${movie.id}`}></Link>
            <img src={movie.medium_cover_image} alt="bgImage" />
          </div>
        ))
      : null;
  };
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    if (currentImageIndex !== 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }

    /*     setCurrentImageIndex((prevIndex) => {
      if (prevIndex !== 0) {
        return images.length - 1;
      } else {
        return prevIndex - 1;
      }
    }); */
  };

  const nextImage = () => {
    if (currentImageIndex !== images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
    /*     setCurrentImageIndex((prevIndex) => {
      if (prevIndex === images.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    }); */
  };
  return (
    <div>
      <div className={styles.sliderContainer}>
        {!loading
          ? movies.map((movie) => (
              <div
                key={movie.id}
                id={movie.id}
                title={movie.title}
                images={movie.medium_cover_image}
              ></div>
            ))
          : null}
      </div>
      <button onClick={prevImage} className={styles.prevButton}>
        &lt;
      </button>
      <div
        className={styles.sliderTrack}
        style={{
          transform: `translateX(-${currentImageIndex * 100}%)`,
        }}
      >
        <div className={styles.slide}>
          <img
            src={images[currentImageIndex]}
            alt="Slider"
            style={{ width: "300px" }}
          />
        </div>
      </div>
      <button onClick={nextImage} className={styles.nextButton}>
        &gt;
      </button>
    </div>
  );
}

export default HomeMain;
