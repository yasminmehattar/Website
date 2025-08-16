import React, {useState} from'react'
function ToDolist(){

const[tasks, setTasks ]=useState(["Eat","drink","Sleep"])
const[newTask  ,setNewTask]=useState("")

function handleInputchange(event){
    setNewTask(event.target.value)
}
function Addtask(){
    if(newTask.trim()!==""){
        setTasks(t=> [...t,newTask]);
        setNewTask("")
    } 

}
function Deletetask(index){
    const Updatetasks=tasks.filter((element,i)=>i!==index);
    setTasks(Updatetasks);


}
function MoveUptask(index){
    if(index>0){
        const Updatetasks=[...tasks];
       
        [Updatetasks[index], Updatetasks[index-1]]=[Updatetasks[index-1], Updatetasks[index]];
        
        setTasks(Updatetasks);
    }

}
function MoveDowntask(index){
     if(index<tasks.length-1){
        const Updatetasks=[...tasks];
       
        [Updatetasks[index], Updatetasks[index+1]]=[Updatetasks[index+1], Updatetasks[index]];
        
        setTasks(Updatetasks);
    }

}
    return(<div className='todolist'> 
        <h1>To-Do-List</h1>
         <input type="text" value={newTask} placeholder='Enter your task...' onChange={handleInputchange}/>
        <button  className="addbutton" onClick={Addtask}>ADD</button>
        <ol>{tasks.map((task, index)=><li key={index}> <span className='text'>{task}</span>
        <button className='deletebutton' onClick={()=>Deletetask(index)}>Delete</button>
        <button className='Movebutton' onClick={()=>MoveUptask(index)}>MoveUp</button>
        <button className='Movebutton' onClick={()=>MoveDowntask(index)}>MoveDown</button></li>)}

        </ol>
       
        

    </div>

    )
}
export default ToDolist


