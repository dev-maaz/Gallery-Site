import React, { useState } from 'react';
import "./TaskBar.scss";

const TaskBar = () => {
  const [tasks, setTasks] = useState(["Learn Tailwind CSS","Do the laundry"]);
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
      <form className='add-task-slot pr-1' onSubmit={(e)=>handleAddTask(e)}>
        <input
          name='taskinput'
          type="text"
          placeholder='Add New Task'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type='submit' className="material-symbols-outlined addbutton surface-container"> add </button>
      </form>
        {tasks.map((task, index) => (
        <div key={index} className='taskslot items-center pr-1'>
            <p>{task}</p>
            <button className='material-symbols-outlined button-hover flex-shrink-0 h-10 w-10 ' onClick={() => handleRemoveTask(index)}> delete </button>
        </div>
        ))}
    </div>
  );
};

export default TaskBar;

