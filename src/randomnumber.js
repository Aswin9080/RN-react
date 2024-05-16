import { useState } from "react"

function Random() {
    
    var [rndnum,rndfunction]=useState(0)
    function randoms() {
        var rnd = Math.floor(Math.random() * 10)
        rndfunction(rnd)

    }

    return (
        <div>
            <h1>{rndnum}</h1>
            <button onClick={randoms}>Radomnumber</button>
        </div>
    )
}

export default Random