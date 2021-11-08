import './App.css';

function Hello ({name, age}){
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {name}, you are {age} old :D
      </p>
      <p>
        You are born in {bornYear()} 
      </p>
    </div>
  )
}


function App() {
  const name = 'Peter'
  const age = 20
  
  return (
      <div>
        <h1>Greetings!</h1>
        <Hello name='Maya' age={5+25}></Hello>
        <Hello name={name} age={25}></Hello>
      </div>
  );
}

export default App;
