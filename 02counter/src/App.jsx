import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5)


 
  const addValue=()=>{
    //counter=counter+1
    setCounter(counter+1)
    console.log("clicked",counter);
  }
  const LowerValue=()=>{
    console.log("value lowered",Math.random());
  }

  return (
    <>
   <h1>chai aur react</h1>
   <h2>counter value :{counter}</h2>

   <button
   onClick={addValue}
   >add value:{counter}</button>
   <br />
   <button>lower value:{counter}</button>
    </>
  )
}

export default App
