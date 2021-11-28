import React, { useState } from "react";

const StatisticsLine = ({text, value}) => {
  return <tr><td>{text}:</td> <td>{value}</td></tr>
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad;
  if(all === 0){
    return(
      <div>
        No feedback given.
      </div>
    )
  }
  
  //calculations
  const average = (good - bad) / all;
  const positive = (good / all) * 100;
  
  
  return(
     <div>
       <h1>statistics</h1>
       <table>
         <tr>
           <td></td>
           <td></td>
          </tr>
        <StatisticsLine text="good" value={good} />
        <StatisticsLine text="neutral" value={neutral} />
        <StatisticsLine text="bad" value={bad} />
        <StatisticsLine text="all" value={all} />
        <StatisticsLine text="average" value={average} />
       <StatisticsLine text="positive" value={positive} />
      </table>
     </div>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
 
  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={() => setGood(good + 1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setBad(bad + 1)} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
