import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incre, decre, reset } from "../redux/counterSlice";

export default function Counter() {
  const dispatch = useDispatch(); //action을 취할 수 있도록
  const count = useSelector((state) => {
    //상태값 변경을 도와줌
    return state.counter.value;
  });

  return (
    <div>
      <h1>Counter-Redux</h1>
      <p>카운터 : {count}</p>
      <button
        onClick={() => {
          dispatch(incre());
        }}
      >
        증가
      </button>
      <button
        onClick={() => {
          dispatch(decre());
        }}
      >
        감소
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        리셋
      </button>
    </div>
  );
}
