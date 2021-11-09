import React, {useState} from "react";

const App = () => {

  const Display = ({counter}) =>  <div>{counter}</div>

  const Button = ({method, text}) => <button style={{background: "yellow"}} onClick={method}>{text}</button>
  
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return(
    <div>
      <h1><Display counter={counter}></Display></h1>
      <Button method={increaseByOne} text="Add" />
      <Button method={decreaseByOne} text="Decrease" />
      <Button method={setToZero} text="Zero" />
    </div>
  )
}

export default App;