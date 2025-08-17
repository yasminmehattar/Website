// useEffect()= React hook that tells React TO DO THIS CODE WHEN(pick one):
//              This component rerenders
//              this component mounts
//              the state of a value

//useEffect(function,[dependencies])

//1. useEffect(()=>{})         Runs after every rerender
//2.useEffect(()=>{},[])       Runs only on mount
//3. useEffect(()=>{},[value]) Runs on mount+ when value changes

//uses
//1.Event Listeners
//2. DOM Manipulation
//3. subscriptions(real - time updates)
//4.Fetching data from an API
//5. clean up when a component unmounts


import { func } from 'prop-types';
import React, {useState,useEffect} from 'react';
function Useeffected(){
    const[count, setCount]=useState(0);
    const[color,setColor]=useState("green");
    const[width, setWidth]=useState(window.innerWidth);
    const[height, setHeight]=useState(window.innerHeight)

    useEffect(()=>{
        document.title=`count:${count} ${color}`
    } ,[count, color])
    useEffect(()=>{
         window.addEventListener("resize",handleresize);
    console.log("Event Listener added")
        return(()=>{
            window.removeEventListener("resize",handleresize);
            console.log("Event Listener removed")
        })

    },[width,height])

   

    function Addcount(){
        setCount(c=> c+1)
    }
    function Subtractcount(){
        setCount(c=> c-1)
    }
    function Changecolor(){
        setColor(c=>c==="green"? "red":"green")
    }
    function handleresize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }



    return(<div>
        <p style={{color}}> Count:{count}</p> 
        <button onClick={Addcount}>Add</button>
        <button onClick={Subtractcount}>Subtract</button>
        <button onClick={Changecolor}>Change Color</button>
        <p>width:{width}px</p>
        <p>Height:{height}px</p>

    </div>)
}
export default Useeffected