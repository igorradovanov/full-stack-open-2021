import React from "react";

const Hello = (props) => (
  <div>
    <h1>Hello there, {props.name}!</h1>
  </div>
)

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;


  return (
    <div>
      <p>Hello World, it is {now.toISOString()}</p>
      {a} + {b} is {a+b}
      <Hello name="Igor" />
    </div>
  )
}

export default App;
