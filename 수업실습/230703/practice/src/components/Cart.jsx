import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCarts, deleteCarts } from "../redux/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.carts);
  return (
    <div>
      <h1>쇼핑카트</h1>
      <ul>
        {carts.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}원
            <button onClick={() => dispatch(deleteCarts(index))}>제거</button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => dispatch(addCarts({ name: "상품1", price: 100000 }))}
      >
        상품 1추가
      </button>
      <button
        onClick={() => dispatch(addCarts({ name: "상품2", price: 200000 }))}
      >
        상품 2추가
      </button>
    </div>
  );
}
