import React, {useState} from "react";

const App = () => {
  
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return(
    <div>
      <h1>{counter}</h1>
      <button onClick={increaseByOne}>Add</button>
      <button onClick={decreaseByOne}>Substract</button>
      <button onClick={setToZero}>Zero</button>
    </div>
  )
}

export default App;