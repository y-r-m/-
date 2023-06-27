import React, { useState, useEffect } from "react";
import pic1 from "../image/pic1.jpg";
import pic2 from "../image/pic2.jpg";
import pic3 from "../image/pic3.jpg";
import pic4 from "../image/pic4.jpg";
import pic5 from "../image/pic5.jpg";
import pic6 from "../image/pic6.jpg";
import pic7 from "../image/pic7.jpg";

function RandomImage() {
  const [backgroundImage, setBackgroundImage] = useState("");
  const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7];
  const getRandomBackground = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  useEffect(() => {
    const randomBackground = getRandomBackground();
    setBackgroundImage(randomBackground);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        zIndex: -1,
      }}
    ></div>
  );
}
export default RandomImage;
