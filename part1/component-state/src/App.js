import React, {useState} from "react";

const App = () => {
    const [clicks, setClicks] = useState({left: 0, right:0})

    // const handleLeftClick = () => {
    //   const newClicks = {
    //     left: clicks.left + 1,
    //     right: clicks.right
    //   }
    //   setClicks(newClicks)
    // }

    const handleLeftClick = () => {setClicks({...clicks, left: clicks.left +1})}

    // const handleRightClick = () => {
    //   const newClicks = {
    //     left: clicks.left,
    //     right: clicks.right + 1
    //   }
    //   setClicks(newClicks)
    // }

    const handleRightClick = () => {setClicks({...clicks, right: clicks.right +1})}


//return

return(
  <div>
    {clicks.left}
    <button onClick={handleLeftClick}>left</button>
    <button onClick={handleRightClick}>right</button>
    {clicks.right}
  </div>
)

}
export default App;