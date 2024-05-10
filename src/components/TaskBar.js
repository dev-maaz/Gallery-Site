import React, { useState } from 'react';
import "./TaskBar.scss";

const TaskBar = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className='taskbox'>
      <div className='add-task-slot'>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <span class="material-symbols-outlined" onClick={()=>handleAddTask()}> add_circle </span>
      </div>
        {tasks.map((task, index) => (
        <div key={index} className='taskslot'>
            <p>{task}</p>
            <span className='material-symbols-outlined' onClick={() => handleRemoveTask(index)}> delete </span>
        </div>
        ))}
    </div>
  );
};

export default TaskBar;

