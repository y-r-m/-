import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../redux/authSlice";

export default function Auth() {
  const dispatch = useDispatch();
  const logInState = useSelector((state) => state.auth.logInState);

  return (
    <div>
      {logInState ? (
        <div>
          <p>로그인 상태입니다.</p>
          <button
            onClick={() => {
              dispatch(logout());
            }}
          >
            로그아웃
          </button>
        </div>
      ) : (
        <div>
          <p>로그아웃 상태입니다.</p>
          <button
            onClick={() => {
              dispatch(login());
            }}
          >
            로그인
          </button>
        </div>
      )}
    </div>
  );
}
