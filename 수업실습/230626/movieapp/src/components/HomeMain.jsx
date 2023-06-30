import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";
import styles from "styles/HomeMain.module.css";

function HomeMain() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [showAll, setShowAll] = useState(false);

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

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const prevImage = () => {
    if (currentImageIndex !== 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const nextImage = () => {
    if (currentImageIndex !== images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handleImageClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  const handleShowAll = () => {
    setShowAll(true);
  };
  return (
    <div className={styles.sliderContainer}>
      <div
        className={styles.sliderTrack}
        style={{
          transform: `translateX(-${currentImageIndex * 100}%)`,
        }}
      >
        {!loading &&
          movies.map((movie, index) => (
            <div
              key={movie.id}
              id={movie.id}
              title={movie.title}
              images={movie.medium_cover_image}
              className={styles.slideImage}
              onClick={() => handleImageClick(movie.id)}
            >
              <img
                src={movie.medium_cover_image}
                alt={movie.title}
                className={styles.slideImage}
              />
              <div className={styles.title}>{movie.title}</div>
              {movie.images &&
                Array.isArray(movie.images) &&
                movie.images.map((image, imageIndex) => (
                  <img
                    src={image}
                    alt={movie.title}
                    className={styles.slideImage}
                    key={imageIndex}
                  />
                ))}
            </div>
          ))}
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
        <div className={styles.slide}></div>
      </div>
      <button onClick={nextImage} className={styles.nextButton}>
        &gt;
      </button>

      {!showAll && (
        <button onClick={handleShowAll} className={styles.showAllButton}>
          전체보기
        </button>
      )}
    </div>
  );
}

export default HomeMain;
