import React, { useState, useContext } from 'react';
import  {TaskContext}  from '../context/TaskContext';


const CreateTask = () => {
  const { createTask } = useContext(TaskContext);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [asignTo, setAsignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    
    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      asignTo,
      id: Date.now()
    };

    createTask(newTask);

    // Reset form fields
    setCategory('');
    setAsignTo('');
    setTaskTitle('');
    setTaskDescription('');
    setTaskDate('');
  };

  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
      <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between'>
        <div className='w-1/2'>
          <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
          <input
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
            type='text'
            placeholder='Make a task'
          />

          <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
          <input
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
            type='datetime-local'
          />

          <h3 className='text-sm text-gray-300 mb-0.5'>Assigned To</h3>
          <input
            value={asignTo}
            onChange={(e) => setAsignTo(e.target.value)}
            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
            type='text'
            placeholder='employee name'
          />

          <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
            type='text'
            placeholder='design,dev,etc'
          />
        </div>

        <div className='w-2/5 flex flex-col items-start'>
          <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className='w-full h-44 text-sm py-2 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400'
            cols='30'
            rows='10'
          ></textarea>
          <button className='bg-emerald-500 py-3 hover:bg-emerald-500 px-5 rounded text-sm mt-4 w-full active:scale-95'>
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
