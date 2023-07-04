import React, { useReducer, useState } from "react";

const initialState = 0; //값이 많아질 때 관리를 쉽게하려면 초기값 설정해주는게 좋음
const reducer = (state, action) => {
  switch (action.type) {
    case "INCRESE":
      return state + 1;
    case "DECRESE":
      return state - 1;
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export default function CountReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>숫자 카운트</h1>
      <p>숫자 :{count}</p>
      <button onClick={() => dispatch({ type: "INCRESE" })}>증가</button>
      <button onClick={() => dispatch({ type: "DECRESE" })}>감소</button>
      <button onClick={() => dispatch({ type: "RESET" })}>리셋</button>
    </div>
  );
}
