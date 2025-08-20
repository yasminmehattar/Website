// useRef()  ="use Reference " does not cause  rerenders when its value changes
//                             1. accessing/ interacting with DOM elements
//                             2. Handling focus, animations and transitions
//                             3. managing timers and intervals

import React,{useState,useEffect,useRef} from "react";
function Current(){
    
    const inputRef1=useRef(null);
    const inputRef2=useRef(null);
    const inputRef3=useRef(null);

    // console.log(ref);

    useEffect(()=>{  
        console.log("Component Rendered")
        
    })
    
     function handleclickchange1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor="yellow";
        inputRef2.current.style.backgroundColor="";
        inputRef3.current.style.backgroundColor="";
        
     }
       function handleclickchange2(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor="";
        inputRef2.current.style.backgroundColor="yellow";
        inputRef3.current.style.backgroundColor="";
        
     }
       function handleclickchange3(){
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor="";
        inputRef2.current.style.backgroundColor="";
        inputRef3.current.style.backgroundColor="yellow";
        
     }
    return(<><div>
        <button onClick={handleclickchange1}>Click Me1</button>
        <input ref={inputRef1}/>

    </div>
    <div>
        <button onClick={handleclickchange2}>Click Me2</button>
        <input ref={inputRef2}/>

    </div>
    <div>
        <button onClick={handleclickchange3}>Click Me3</button>
        <input ref={inputRef3}/>

    </div>

                </>
    )
}
export default Current