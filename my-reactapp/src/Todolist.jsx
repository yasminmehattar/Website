import React, {useState} from'react'
function ToDolist(){

const[tasks, SetTask ]=useState(["Eat","drink","Sleep"])
const[newTask  ,setNewTask]=useState("")

function handleInputchange(event){
    SetTask(event.target.value)
}
function Addtask(){
    if(newTask.trim()!==""){
        SetTask
    } 

}
function Deletetask(){

}
function MoveUptask(){

}
function MoveDowntask(){

}
    return(<div className='todolist'> 
        <h1>To-Do-List</h1>
         <input type="text" value={newTask} placeholder='Enter your task...' onChange={handleInputchange}/>
        <button  className="addbutton" onClick={Addtask}>ADD</button>
        <ol>{tasks.map((task, index)=><li key={index}> <span className='text'>{task}</span>
        <button className='deletebutton' onClick={()=>Deletetask(index)}>Delete</button>
        <button className='Moveupbutton' onClick={()=>MoveUptask(index)}>MoveUp</button>
        <button className='MoveDownbutton' onClick={()=>MoveDowntask(index)}>MoveDown</button></li>)}

        </ol>
       
        

    </div>

    )
}
export default ToDolist