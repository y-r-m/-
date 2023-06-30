import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount(count + 1);
    //setCount((prev)=>(prev+1)) 윗 코드와 동일 코드 prev받아서 +1
  };
  return (
    <div>
      <p>카운트 : {count}</p>
      <button onClick={onClick}>증가</button>
    </div>
  );
}
