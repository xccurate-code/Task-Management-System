import React, { createContext, useState, useEffect } from 'react';
import  {getLocalStorage } from '../../utils/localStorage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({ employees: [], admin: [] });

  useEffect(() => {
    const data = getLocalStorage();
    setUserData(data);
  }, []);

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;