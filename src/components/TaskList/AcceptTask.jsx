import React from 'react';

const AcceptTask = ({data}) => {
    return (
        <div className="flex-shrink-0 h-[70%] w-[300px] p-5 bg-red-400 rounded-xl">
            <div className="flex justify-between items-center">
                <h3 className="bg-emerald-900 text-sm px-3 py-1 rounded">{data.category}</h3>
                <h4 className="text-sm">{data.taskDate}</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
            <p className="text-sm mt-4">{data.taskDescription}</p>
            <div className="flex justify-between mt-4">
                <button className="bg-green-500 py-1 px-2 text-sm active:scale-95">Mark as Completed</button>
                <button className="bg-red-700 py-1 px-2 text-sm active:scale-95">Mark as Failed</button>
            </div>
        </div>
    );
};

export default AcceptTask;