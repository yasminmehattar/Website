import React, {useState} from 'react'
function UpdateObject(){
    const [car, setCar]=useState({Year:2025, make:"Ford", model:"Mustang"})
    function handleYearchange(event){
        setCar(car=>({...car, Year:event.target.value}))
    }
     function handlemakechange(event){
        setCar(car=>({...car, make:event.target.value}))
    }
     function handlemodelchange(event){
        setCar(car=>({...car, model:event.target.value}))
    }

    return(<div>
        <p>My Favourite Car:{car.Year}{car.make}{car.model}</p>
        <input type="number"  value={car.Year} onChange={handleYearchange}/><br/>
         <input type="text"  value={car.make} onChange={handlemakechange}/><br/>
          <input type="text"  value={car.model} onChange={handlemodelchange}/>
    </div>

    )
}
export default UpdateObject