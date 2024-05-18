import React, { useState } from 'react';
import "./TaskBar.scss";

const TaskBar = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
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
      <form className='add-task-slot' onSubmit={(e)=>handleAddTask(e)}>
        <input
          name='taskinput'
          type="text"
          placeholder='Add New Task'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <span type='submit' className="material-symbols-outlined addbutton"> add </span>
      </form>
        {tasks.map((task, index) => (
        <div key={index} className='taskslot'>
            <p>{task}</p>
            <button className='material-symbols-outlined' onClick={() => handleRemoveTask(index)}> delete </button>
        </div>
        ))}
    </div>
  );
};

export default TaskBar;

