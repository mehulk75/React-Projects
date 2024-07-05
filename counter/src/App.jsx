import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter(counter + 1);
  }

  const DecreaseValue = () => {
    if(counter>0){
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Chai Aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value</button>
      <br></br>
      <button 
      onClick={DecreaseValue}
      >Decrease Value</button>
    </>
  )
}

export default App
