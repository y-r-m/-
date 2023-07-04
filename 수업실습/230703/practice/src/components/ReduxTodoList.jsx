import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToDos, toggleToDo } from "../redux/todoListSlice";

export default function ReduxTodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddToDo = (text) => {
    dispatch(
      addToDos({
        id: Date.now(),
        text,
        completed: false,
      })
    );
    document.getElementById("toDoInput").value = "";
  };
  const handleToggleToDo = (id) => {
    dispatch(toggleToDo(id));
  };
  return (
    <div>
      <h1>할 일 목록</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleToggleToDo(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <input type="text" id="toDoInput" />
      <button
        onClick={() =>
          handleAddToDo(document.getElementById("toDoInput").value)
        }
      >
        추가하기
      </button>
    </div>
  );
}
