import React, { useEffect, useState } from "react";

export default function CharacterCount() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(text.length);
  }, [text]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <textarea value={text} onChange={handleTextChange}></textarea>
      <p>Character Count : {count}</p>
    </div>
  );
}
