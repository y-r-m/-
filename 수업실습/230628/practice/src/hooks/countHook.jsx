import React, { useState } from "react";

export default function useCounter(initialdCount) {
  const [count, setCount] = useState(initialdCount);

  const increment = () => {
    setCount(count + 1);
  };
  return { count, increment }; //() : html와 유사 {} : 값을 넘길 때 사용
}
