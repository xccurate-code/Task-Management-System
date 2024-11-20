import React from 'react';

const Header = ({ changeUser, data }) => {
  const username = data?.firstname || 'User';

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl'>
        Hello <br />
        <span className='text-4xl font-semibold text-white'>{username}👋</span>
      </h1>
      <button
        onClick={changeUser}
        className='active:scale-95 bg-red-800 text-lg font-medium text-white px-5 py-2 rounded-sm'
      >
        Log-out
      </button>
    </div>
  );
};

export default Header;