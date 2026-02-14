import { useMemo, useState } from "react";

function UseMemo() {

const [count, setCount] = useState(0)

const Expensive = () => {
    for(let i = 0; i <= 1000; i++){
        console.log(i);
        
    }
}

const Memo = useMemo(() => {
 const res = Expensive()
 return res
}, [])


    return (<>
    <h1>{Memo}</h1>
    <h1>{count}</h1>
<button onClick={() => setCount(prev => prev + 1)}>COUNT</button>    
    
    </>)
}


export default UseMemo