import { func } from 'prop-types';
import React, {useState} from 'react'
function ToDolist(){
    const[tasks, setTasks]=useState([]);
    const[newTask, setNewTask]=useState("");

    function handleinputchange(event){
        setNewTask(event.target.value)

    }
    function Addtask(){
        if(newTask.trim()!==""){
            setTasks(t=>[...tasks, newTask])
            setNewTask("")

        }


    }
    function DeleteTask(index){
        const updatedtasks=tasks.filter((element,i)=>i!==index);
        setTasks(updatedtasks)

    }
    function MoveupTask(index){
        if( index>0){
        const updatedTasks=[...tasks];
        [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
        setTasks(updatedTasks);
        }

    }
    function MovedownTask(index){
        if(index<tasks.length-1){
        const updatedTasks=[...tasks];
        [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
        setTasks(updatedTasks);
        }

    }


    return( <>
        <div className='todolist'>
            <h1 className='h1'>To Do List</h1>
            <input className="input" type="text" value={newTask} placeholder='Enter your task' onChange={handleinputchange}/>
            <button className="addbutton" onClick={Addtask}>Add</button>
        
        <ol>
            {tasks.map((task,index)=><li className='li' key={index}><span className="text">{task}</span>
            <button className="deletebutton" onClick={()=>DeleteTask(index)}>Delete</button>
            <button className="Movebutton" onClick={()=>MoveupTask(index)}>Moveup</button>
            <button className="Movebutton" onClick={()=>MovedownTask(index)}>Movedown</button>
            </li>)}
        </ol>
        </div>
        
        
</>
    )
}
export default ToDolist