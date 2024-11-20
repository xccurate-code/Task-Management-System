import React, { useContext, useState, useEffect } from 'react';
import TaskContext from '../context/TaskContext';

const TaskList =  ()=>  {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Get tasks from localStorage
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);
  // Calculate counts
  const newTaskCount = tasks.filter((task) => task.newTask).length;
  const completedTaskCount = tasks.filter((task) => task.completed).length;
  const activeTaskCount = tasks.filter((task) => task.active).length;
  const failedTaskCount = tasks.filter((task) => task.failed).length;

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5">
      <h2 className="text-xl font-bold mb-4">Your Tasks</h2>
      
      {/* Task Status Cards */}
      <div className="grid grid-cols-4 gap-4 mb-4">
        <div className="p-4 bg-blue-500 text-white rounded text-center">
          <h3>New Task</h3>
          <p>{newTaskCount}</p>
        </div>
        <div className="p-4 bg-green-400 text-white rounded text-center">
          <h3>Completed</h3>
          <p>{completedTaskCount}</p>
        </div>
        <div className="p-4 bg-yellow-400 text-white rounded text-center">
          <h3>Accepted</h3>
          <p>{activeTaskCount}</p>
        </div>
        <div className="p-4 bg-red-400 text-white rounded text-center">
          <h3>Failed</h3>
          <p>{failedTaskCount}</p>
        </div>
      </div>

      {/* Task Status Boxes */}
      <div className="grid grid-cols-2 gap-4">
        {tasks.map((task, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg border-2 ${
              task.newTask
                ? 'border-yellow-400'
                : task.active
                ? 'border-blue-400'
                : task.completed
                ? 'border-green-400'
                : 'border-red-400'
            }`}
          >
            <span
              className={`text-sm ${
                task.newTask
                  ? 'text-yellow-400'
                  : task.active
                  ? 'text-blue-400'
                  : task.completed
                  ? 'text-green-400'
                  : 'text-red-400'
              }`}
            >
              Status: {
                task.newTask
                  ? 'New'
                  : task.active
                  ? 'Active'
                  : task.completed
                  ? 'Completed'
                  : 'Failed'
              }
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
