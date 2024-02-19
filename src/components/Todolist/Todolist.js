import React from 'react';
import './Todolist.css';

function Task({ task, onDelete, onToggle }) {
  return (
    <div className={`container ${task.completed ? 'completed' : ''}`}>
        <div className='label-container'>
            <input type="checkbox" className='checkbox-input' checked={task.completed} onChange={() => onToggle(task.id)} />
            <span>{task.name}</span>
            <div className='delete-icon-container'>
                <button onClick={() => onDelete(task.id)}><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>      
    </div>
  );
}

export default Task;
