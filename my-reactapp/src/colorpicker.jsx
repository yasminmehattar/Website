import React, {useState} from'react'
function Colorpicker(){

    const [color, setColor]=useState("#19d75b")
    function handleColorchange(event){
        setColor(event.target.value)
    }
    return(<div className='colorcontainer'>
        <h1>Color picker</h1>
        <div className='colordisplay' style={{backgroundColor:color}}>
            <p>Selected Color: {color}</p>

        </div>
        <label>select a color:</label>
        <input type="color" value={color} onChange={handleColorchange}/>

    </div>

    )
}
export default Colorpicker