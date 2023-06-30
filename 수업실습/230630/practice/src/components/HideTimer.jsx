import React, { useState } from "react";
import Timer from "./Timer";

export default function HideTimer() {
  const [showTimer, setShowTimer] = useState(true);

  const handleClick = () => {
    setShowTimer((prev) => !prev);
  };
  return (
    <div>
      {showTimer && <Timer />}{" "}
      {/* 랜더링이 될때 false로 변경 되면 타이머 초기화+숨김 자바 스크립트 문법, 값을 쓰기 위해 중괄호 사용*/}
      <button onClick={handleClick}>
        {showTimer ? "Hide Timer" : "Show Timer"}
      </button>
    </div>
  );
}
