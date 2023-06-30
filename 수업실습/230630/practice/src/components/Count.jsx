import React, { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>값 : {count}</p>
      <button onClick={increment}>증가(+1)</button>
    </div>
  );
}
