import React, {useState} from "react";
import Task from "./Task.js";

const Tasks = ({ tasks, onDelete, onToggle })=>{
  return(
    <div>
      {tasks.map((task, index)=>(
        <Task key={index} task={task} onDelete={onDelete} toggle={onToggle} />
      ))}
    </div>
  )
}

export default Tasks;