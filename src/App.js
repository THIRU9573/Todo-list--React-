import React, { useState } from 'react';
import Todolist from './components/Todolist/Todolist'
import './App.css';

function App() {
  const [actions, setActions] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const onAddTask = () => {
    if (inputValue.trim() !== '') {
      const newTask = {
        id: Date.now(),
        name: inputValue,
        completed: false,
      };
      setActions([...actions, newTask]);
      setInputValue('');
    }
  };

  const onDeleteTask = (taskId) => {
    setActions(actions.filter(task => task.id !== taskId));
  };

  const onToggleTask = (taskId) => {
    setActions(actions.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="todo-bg-container">
      <h1 className='todos-heading'>To-Do List</h1>
      <input className='label-container'
        type="text"
        placeholder="Add a new task"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={onAddTask} className='add-todo-button'>Add Task</button>
      <div className="todo-items-container">
        {actions.map(task => (
          <Todolist
            key={task.id}
            task={task}
            onDelete={onDeleteTask}
            onToggle={onToggleTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
