import React, { useState, useEffect } from "react";

/* function TodoList(props) {
  console.log(props);
  const todos = props.todos;
  return (
    <ul>
      {todos.map((item) => (
        <li>{item.text}</li>
      ))}
    </ul>
  );
}
 */
function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log("cleanup function works!");
    };
  }, []); //[count] 입력 시 변경될 때 마다 재실행, 없으면 한 번만
  return <p>{count}</p>;
}
function Practice05() {
  /* const todos = [
    { id: 1, text: "할 일 목록 1" },
    { id: 2, text: "할 일 목록 2" },
    { id: 3, text: "할 일 목록 3" },
    { id: 4, text: "할 일 목록 4" },
  ];
  const anothertodos = [
    { id: 1, text: "할 일 목록 1" },
    { id: 2, text: "할 일 목록 2" },
    { id: 3, text: "할 일 목록 3" },
    { id: 4, text: "할 일 목록 4" },
  ]; */
  return <Timer />;
}
export default Practice05;
