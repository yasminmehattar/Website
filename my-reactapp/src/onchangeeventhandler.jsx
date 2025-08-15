import React, { useState } from "react"
//onChange= event handler used prmarily with form elements
//            ex. <input> <textarea>, <select>, <radio>
//            Triggers a function everytime the value of the input changes
function Mycomp(){
    const [name, setName] =useState("Guest")
    const[quantity,setQuantity]=useState(0)
    const [comment, setComment]=useState("")
    const [payment, setPayment]=useState("Visa")
    const [shipping, setShipping]=useState("")
     function handleName(event){
        setName(event.target.value)
     }
     function handleQuantity(event){
        setQuantity(event.target.value)
     }
      function handleComment(event){
        setComment(event.target.value)
      }
       function handlePayment(event){
       setPayment(event.target.value)
       }
       function handleShipping(event){
        setShipping(event.target.value)
       }

     return(
        <div className="Onchange">
            <input value={name} onChange={handleName}/>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantity} type="number"/>
            <p>Quantity:{quantity}</p>

            <textarea value={comment} onChange={handleComment} placeholder="Enter delivery instructions"/>
            <p>Comment:{comment}</p>

            <select value={payment} onChange={handlePayment}>
                <option value="">Select an Option</option>
                <option value="Visa">Visa</option>
                <option value="Matster card">Master card</option>
                <option value="Gift Card">Gift Card</option>

            </select>
            <p>payment:{payment}</p>
            <label >
                <input type="radio" value="Pick Up" checked={shipping==="Pick Up"} onChange={handleShipping}/>
                Pick Up</label>
            <label>
                <input type="radio" value="Delivery" checked={shipping==="Delivery"} onChange={handleShipping}/>
                Delivery</label>
            <p>shipping:{shipping}</p>
        </div>
     )

}
export default Mycomp