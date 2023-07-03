import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPro1, addPro2, deleteCarts } from "../redux/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.carts.initialState;
  });
  return (
    <div>
      <h1>쇼핑카트</h1>
      <ul>
        <li>
          <button onClick={() => dispatch(deleteCarts())}>제거</button>
        </li>
      </ul>
      <button onClick={() => dispatch(addPro1(`상품1 - 100000원`))}>
        상품 1추가
      </button>
      <button onClick={() => dispatch(addPro2(`상품2 - 200000원`))}>
        상품 2추가
      </button>
    </div>
  );
}
