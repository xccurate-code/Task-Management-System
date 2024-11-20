import React from 'react';
import Header from '../others/Header';
import TaskList from '../others/TaskList';
import ListTask from '../others/TaskList/ListTask';

const EmployeeDashboard = ({ changeUser, data }) => {
    return (
        <div className='p-12 bg-[#1c1c1c] h-screen'>
            <Header changeUser={changeUser} data={data} />
            <TaskList data={data} />
            <ListTask data={data} />
        </div>
    );
};

export default EmployeeDashboard;