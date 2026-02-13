import { useState } from "react"
import { Card } from "./Card"

function useHook(initialState){
    
    const [count, setCount] = useState(initialState)

const increment = () => {
    setCount(prev => prev + 1)
}

const decrement = () => {
    setCount(prev => prev - 1)
}

const setByValue = (val) => {
    setCount(val)
}

    return {
          count,
          increment,
          decrement,
          setByValue
    }
}


export default useHook





