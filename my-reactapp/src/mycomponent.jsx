import React,{useState} from 'react'

function Mycomponent(){
    const[name, setName]=useState("Guest")
    const updatename=()=>{
        setName("yasmin")
    }

    const[age, setAge]=useState(0)
    const updateage=()=>{
        setAge(age+1)
    }

    const[isemployed, setIsemployed]=useState(false)
    const updateisemployed=()=>{
        setIsemployed   (!isemployed)
    }

    return(<div>
        <p>Name:{name}</p>
        <button onClick={updatename}>Set Name</button>

        <p>Age:{age}</p>
        <button onClick={updateage}>Set Age</button>

        <p>Employed:{isemployed ? "yes": "No"}</p>
        <button onClick={updateisemployed}>Toggle</button>

    </div>)


}
export default Mycomponent