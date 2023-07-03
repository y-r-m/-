import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateMovieStore } from "redux/MovieStore";

export const useFetchMovies = (API_URL) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(API_URL);
        const json = await response.json();
        setData(json.data.movies);
        dispatch(updateMovieStore({ movies: json.data.movies }));
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [API_URL]);

  return { data, loading };
};
