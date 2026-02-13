import { useState } from "react"
import useHook from "./costum/useCounter"
import { Card } from "./costum/Card"
import Alpha from './component/Alpha'
function App() {
  const [val, setVal] = useState('')
const {count, increment, decrement, setByValue}  = useHook(0)
const CardMain = Card(Alpha)

  return (
    <>
   <h1>{count}</h1>
   <button onClick={increment}>increment</button>
   <button onClick={decrement}>decrement</button>
   
   <input 
    placeholder="something"
    value={val}
    onChange={(e) => setVal(e.target.value)}
   />
   <button onClick={() => setByValue(val)}>SET</button>

   <CardMain />
    </>
  )
}

export default App
