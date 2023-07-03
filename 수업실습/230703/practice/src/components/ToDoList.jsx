//input, map, delete
import React, { useReducer, useState } from "react"; // useReducer도 하나의 훅
const initialState = []; //초기값 빈 배열
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload]; //return시 불변성을 지켜줘야함 ...스테이트현재 상태 불러오고 페이로드로 새로운 값 추가
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return [...state, action.payload];
  }
};
export default function ToDoList() {
  const [todos, dispatch] = useReducer(reducer, initialState); //dispatch 액션을 불러 일으킴
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() !== "") {
      //trim : 공백 없앰
      const newTodo = {
        id: Date.now(), //id 설정을 위해 현재 시간을 설정
        text: input,
      };
      dispatch({ type: "ADD_TODO", payload: newTodo });
      setInput("");
    }
  };

  const deleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };
  return (
    <div>
      <h1>할 일 목록</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="오늘 할 일"
      />
      <button onClick={addTodo}>추가</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>삭제</button>{" "}
            {/* 리스트 요소들을 삭제 할 때 해당 아이디 요소를 지워줌 */}
          </li>
        ))}
      </ul>
    </div>
  );
}
