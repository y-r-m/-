import React from "react";
import useForm from "../hooks/useForm";

function LoginForm() {
  const { values, handleChange, resetForm } = useForm({
    username: "",
    password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("로그인 데이터", values);
    resetForm();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="username"
          placeholder="이름"
          value={values.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={values.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">로그인</button>
    </form>
  );
}
export default LoginForm;
