import React, { useState } from "react";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);
  const handleClick = () => {
    setIsOn(!isOn);
  };
  return;
  <button onClick={handleClick}>{isOn ? "켜짐" : "꺼짐"}</button>;
};
function Practice04() {
  return <Toggle />;
}
export default Practice04;
