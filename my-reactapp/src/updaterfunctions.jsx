 import React, {useState} from'react'
 function Updatefunction(){
    
   
        const[count, setCount]=useState(0)
    

    const Increment=()=>{
        setCount(count=>count+1);
         setCount(count=>count+1);
          setCount(count=>count+1);
    }
    const decrement =()=>{
        setCount(count=>count-1);
         setCount(count=>count-1);
    }
    
    const reset=()=>{
        setCount(0)
    }

    
    return(
    <div>
        <p>Count:{count}</p>
        <button onClick={Increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Decremet</button>
    </div>


    )
}
 export default Updatefunction