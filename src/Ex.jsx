import { memo, useEffect } from "react";

function Ex({count}){

    useEffect(() => {
     console.log("child rendring")   
    })
    
    return (
        <>
        <h1>COUNT: {JSON.stringify(count)}</h1>
        </>
    )
}

const Enchance = memo(Ex)

export default Enchance