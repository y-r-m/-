import React, { useState, useEffect } from "react";

function GetClock() {
  const [nowTime, setNowTime] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hours = String(date.getHours()).padStart(2, "0");
      const min = String(date.getMinutes()).padStart(2, "0");
      const sec = String(date.getSeconds()).padStart(2, "0");
      const currentTime = `${hours} : ${min} : ${sec}`;
      setNowTime(currentTime);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      style={{
        fontSize: "60px",
        textAlign: "center",
        color: "white",
        textShadow: " 4px 2px 4px gray",
      }}
    >
      {nowTime}
    </div>
  );
}
export default GetClock;
