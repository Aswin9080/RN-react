import { useState } from "react"

function Components(){
   
var [count,setcount]=useState(0)

function increment(){
    var newcount=count+1
    setcount(newcount)
}

function decrement(){
    var newcount=count-1
    setcount(newcount)
}

   return (
    <div>
        <p>{count}</p>
        <button onClick={increment}>INC</button>
        <button onClick={decrement}>DEC</button>

    </div>
   )
}


export default Components