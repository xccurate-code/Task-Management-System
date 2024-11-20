import React, { useContext } from 'react';
import  TaskContext  from '../context/TaskContext';

const AllTask = () => {
  const { employees } = useContext(TaskContext);
  
  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5">
      <div className="bg-pink-900 py-2 px-4 mb-2 flex justify-between rounded">
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5">New Task</h3>
        <h5 className="text-lg font-medium w-1/5">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5">Completed Task</h5>
        <h5 className="text-lg font-medium w-1/5">Failed Task</h5>
      </div>
      <div className="overflow-auto">
        {employees?.map((elem) => (
          <div key={elem.id} className="border-2 border-emerald-500 py-2 px-4 mb-2 flex justify-between rounded">
            <h2 className="text-lg font-medium w-1/5">{elem.firstname}</h2>
            <h3 className="text-lg font-medium w-1/5 text-yellow-400">{elem.taskCounts.newTask}</h3>
            <h5 className="text-lg font-medium w-1/5 text-blue-400">{elem.taskCounts.active}</h5>
            <h5 className="text-lg font-medium w-1/5 text-white">{elem.taskCounts.completed}</h5>
            <h5 className="text-lg font-medium w-1/5 text-red-400">{elem.taskCounts.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;