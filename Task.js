import React from 'react'
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, toggle }) => {
    return (
        <div 
            className={`task ${task.reminder && 'reminder'}`}
            onDoubleClick={() => toggle(task.id)} 
        >
            <h3 key={task.id}>
                {task.text}
                <FaTimes 
                    style = {{ color: 'red', cursor: 'pointer' }} 
                    onClick={ () => onDelete(task.id)} 
                />
            </h3>
            <p>{task.day}</p>
        </div>
  )
}

export default Task
