import React, { useEffect, useState } from "react";

export default function HideTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => {
      console.log("리턴되었습니다.");
      clearInterval(timer);
    };
  });
  const handleClick = (e) => {};
  return (
    <div>
      <p>초 : {seconds}</p>
      <button>Hide Timer</button>
    </div>
  );
}
