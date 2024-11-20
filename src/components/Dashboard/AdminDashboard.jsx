import React from 'react';
import Header from '../others/Header';
import CreateTask from '../others/CreateTask';
import AllTask from '../others/AllTask';

const AdminDashboard = ({ changeUser }) => {
  return (
    <div className='h-screen w-full p-10 bg-gray-900 text-white'>
      <Header changeUser={changeUser} data={{ firstname: 'Admin' }} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;