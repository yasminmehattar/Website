import { useState } from "react"

function Counter(){
    const [count, setCount]=useState(0)

    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
    const reset=()=>{
        setCount(0);
    }
    return(
        <div className="container">
            <p className="Counter">count:{count}</p>
            <button className="button"onClick={increment}>Increment</button>
            <button className="button"onClick={reset}>Reset</button>
            <button className="button"onClick={decrement}>Decrement</button>
        </div>
    )

}
export default Counter