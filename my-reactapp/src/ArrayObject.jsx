import React,{useState} from "react";
function Mycar(){
    const[cars, setCar]=useState([]);
    const[caryear, setCaryear]=useState(new Date(). getFullYear());
    const[carmake, setCarmake]=useState("");
    const[carmodel, setCarmodel]=useState("");

    function handleAddcar(){
        const newcar={year: caryear,
                      make: carmake,
                      model: carmodel
        }
        setCar(cars=>[...cars, newcar]);
        setCaryear(new Date().getFullYear());
        setCarmake("");
        setCarmodel("");

    }

    function handleRemovecar(index){
        setCar(cars=> cars.filter((_, i)=> i!==index));

    }

    function handleYearcar(event){
        setCaryear(event.target.value)

    }

    function handlemakecar(event){
        setCarmake(event.target.value)

    }
    function handlemodelcar(event){
        setCarmodel(event.target.value)

    }


    return(<div>
        <h3>List of Cars</h3>
        <ul>
            {cars.map((car, index)=><li key={index} onClick={()=>handleRemovecar(index)}>{car.year} {car.make}{car.model}</li>)}

        </ul>
        <input type ="number" value={caryear} onChange={handleYearcar}/><br/>
        <input type ="text" value={carmake} onChange={handlemakecar} placeholder="Enter make name"/><br/>
         <input type ="text" value={carmodel} onChange={handlemodelcar} placeholder="Enter model name"/><br/>
         <button onClick={handleAddcar}> Add car</button>
        
    </div>

    )
}
export default Mycar