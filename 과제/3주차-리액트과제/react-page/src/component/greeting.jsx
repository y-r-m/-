import React, { useState } from "react";

const Input = ({ onNameChange, onFormSubmit }) => {
  const [name, setName] = useState({ username: "" });

  const outputName = (e) => {
    const { name, value } = e.target;
    setName((prevName) => ({
      ...prevName,
      [name]: value,
    }));
    onNameChange(value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onFormSubmit();
    }
  };
  return (
    <div
      style={{
        border: "none",
        borderBottom: "2px solid black",
      }}
    >
      <input
        type="text"
        name="username"
        placeholder="input your name"
        style={{
          fontSize: "20px",
          textAlign: "center",
          background: "transparent",
          border: "none",
          outline: "none",
          textShadow: "1px 1px 2px white",
          marginTop: "10px",
        }}
        onChange={outputName}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

const RandomText = ({ name }) => {
  const greet = [
    "안녕하세요",
    "좋은 하루 보내세요",
    "Hello",
    "HI",
    "반갑습니다",
  ];
  const random = greet[Math.floor(Math.random() * greet.length)];
  return <span>{`${random}, ${name}님!`}</span>;
};

function Greeting() {
  const [username, setUsername] = useState("");

  const [showGreeting, setShowGreeting] = useState(false);

  const handleNameChange = (value) => {
    setUsername(value);
  };

  const handleFormSubmit = () => {
    setShowGreeting(true);
  };

  return (
    <div
      style={{
        padding: "10px",
        fontSize: "32px",
        textAlign: "center",
        color: "white",
        textShadow: "4px 2px 4px gray",
      }}
    >
      {showGreeting ? (
        <span>
          <RandomText name={username} />
        </span>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <Input
            onNameChange={handleNameChange}
            onFormSubmit={handleFormSubmit}
          />
        </form>
      )}
    </div>
  );
}

export default Greeting;
