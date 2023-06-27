import React, { useEffect, useState } from "react";

function Weather() {
  const API_KEY = "b97e9a230a705e74ef84cf6287383f7a";
  const COORDS = "coords";
  const [weatherData, setWeatherData] = useState("");

  const getWeather = (lat, lng) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        const temp = json.main.temp;
        const place = json.name;
        setWeatherData(`${temp}˚C @ ${place}`);
      });
  };

  const saveCoords = (coordsObj) => {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
  };

  const handleGeoSuccess = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = { latitude, longitude };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
  };

  const handleGeoError = () => {
    alert("Cant access location");
  };

  const askForCoords = () => {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
  };

  const loadCoords = () => {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
      askForCoords();
    } else {
      const parsedCoords = JSON.parse(loadedCoords);
      getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
  };

  useEffect(() => {
    loadCoords();
  }, []);

  return (
    <div
      style={{
        display: "inline",
        textAlign: "center",
        color: "white",
        textShadow: " 4px 2px 4px gray",
        zIndex: 1,
      }}
    >
      {weatherData}
    </div>
  );
}

export default Weather;
