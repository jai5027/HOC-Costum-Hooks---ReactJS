import { useEffect } from "react"
import { memo } from "react"
function Memo({pro}) {
    
 pro()

    useEffect(() => {
console.log("hi")
    })
    
    return (<>


   

    </>)
}

const Enhance = memo(Memo)

export default Enhance