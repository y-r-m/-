import React, { useState, useEffect } from "react";
function InputToDo({ initialToDos }) {
  const [toDos, setToDos] = useState(initialToDos);
  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);

  const addToDo = (text) => {
    const newToDo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setToDos((prevToDos) => [...prevToDos, newToDo]);
  };
  const toggleToDo = (id) => {
    setToDos((prevToDos) =>
      prevToDos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteToDo = (id) => {
    setToDos((prevToDos) => prevToDos.filter((todo) => todo.id !== id));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ToDoForm onAddToDo={addToDo} />
      <ul
        style={{
          fontSize: "20px",
          textAlign: "center",
          background: "transparent",
          outline: "none",
          textShadow: "2px 2px 2px white",
          padding: "2px",
          listStyleType: "none",
          padding: "2px",
        }}
      >
        {toDos.map((todo) => (
          <li
            key={todo.id}
            style={{
              border: "2px solid rgba(0,0,0,0.3)",
              backgroundColor: "rgba(233,233,233,0.3)",
              borderRadius: "5px",
              width: "200px",
              margin: "4px",
              padding: "3px",
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleToDo(todo.id)}
              style={{
                marginRight: "10px",
              }}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteToDo(todo.id)}
              style={{
                textAlign: "center",
                backgroundColor: "rgba(3,3,3,0.1)",
                border: "none",
                borderRadius: "5px",
                padding: "2px",
                listStyle: "none",
                marginLeft: "10px",
              }}
            >
              {" "}
              delete{" "}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
function ToDoForm({ onAddToDo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      onAddToDo(text);
      setText("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="todo"
        style={{
          display: "flex",
          fontSize: "20px",
          textAlign: "center",
          backgroundColor: "rgba(23,23,23,0.3)",
          borderRadius: "5px",
          border: "none",
          outline: "none",
          textShadow: "1px 1px 2px white",
          padding: "2px",
          listStyle: "none",
          marginTop: "30px",
        }}
      />
    </form>
  );
}
function TodoList() {
  const savedToDos = JSON.parse(localStorage.getItem("todos")) || [];
  const [toDos, setToDos] = useState(savedToDos);

  return <InputToDo initialToDos={toDos} />;
}

export default TodoList;
