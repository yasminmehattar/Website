import React, {useState} from'react'
 function Updatearray(){
    const [foods, setFoods]=useState(["apple","Banana","Orange"])

    function handleAddfood(){
        const newfood= document.getElementById("foodinput").value
        document.getElementById("foodinput").value=""
        setFoods(foods=>[...foods, newfood])
    }
    function handleRemovefood(index){
        setFoods(foods=> foods.filter((element,id)=>id!==index))

    }

return(
    <div>
        <h3>List of Food</h3>
        <ul >{foods.map( (food,index) => <li key={index} onClick={()=>handleRemovefood(index)}>{food}</li>)}</ul>
        <input type="text" placeholder='Enter Food Name' id="foodinput"/>
        <button onClick={handleAddfood}>Add Food</button>

    </div>
)
 }
 export default Updatearray