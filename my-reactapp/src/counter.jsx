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
        <div>
            <p>count:{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )

}
export default Counter