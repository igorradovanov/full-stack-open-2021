import React, {useState} from "react";

const App = () => {
  
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    console.log('clicked')
  }

  return(
    <div>
      <button onKeyPress={handleClick}>+</button>
    </div>
  )
}

export default App;