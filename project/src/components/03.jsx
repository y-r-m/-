import React from "react";

function Greeting({ name }) {
  return <h1>안녕하세요, {name}씨!</h1>;
}
function Practice03() {
  return <Greeting name="홍길동" />;
}
export default Practice03;
