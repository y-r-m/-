import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function ReduxTodoList() {
  return (
    <div>
      <h1>할 일 목록</h1>
      <ul>
        <li></li>
      </ul>
      <input type="text" />
      <button onClick={() => dispatch}>추가하기</button>
    </div>
  );
}
