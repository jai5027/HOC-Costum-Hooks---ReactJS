import { useState } from "react"

function withCradLook( AlpaComponent ) {
 
    const [count, setCount] = useState(0)

const Plus = () => {
    setCount(prev => prev + 1)
}
    return ({user}) => {
        return (
          <>        
<div className="bg-red-500 m-10 p-10 rounded-2xl">
<AlpaComponent user = {user} />
<h1>{count}</h1>
<button onClick={Plus}>PLUS</button>
</div>

</>
        )
    }
}

export default withCradLook