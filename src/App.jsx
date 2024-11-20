import React, { useContext, useEffect, useState } from 'react';
import { TaskProvider } from '../src/components/context/TaskContext';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import AuthProvider, { AuthContext } from '../src/components/context/AuthProvider';

const App = () => {
    return (
      <AuthProvider>
        <TaskProvider>
            <AppContent />
        </TaskProvider>
        </AuthProvider>
    );
};

const AppContent = () => {
    const [user, setUser] = useState(null);
    const [loggedInUserData, setLoggedInUserData] = useState(null);
    const userData = useContext(AuthContext);

    useEffect(() => {
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser.role);
            setLoggedInUserData(foundUser.data);
        }
    }, []);

    const handleLogin = (email, password) => {
        const adminUser = userData?.admin?.find(
            (a) => a.email === email && a.password === password
        );
        if (adminUser) {
            setUser('admin');
            setLoggedInUserData(adminUser);
            localStorage.setItem(
                'loggedInUser',
                JSON.stringify({ role: 'admin', data: adminUser })
            );
            return;
        }

        const employee = userData?.employees?.find(
            (e) => e.email === email && e.password === password
        );
        if (employee) {
            setUser('employee');
            setLoggedInUserData(employee);
            localStorage.setItem(
                'loggedInUser',
                JSON.stringify({ role: 'employee', data: employee })
            );
            return;
        }
        alert('Invalid credentials');
    };

    const handleLogout = () => {
        setUser(null);
        setLoggedInUserData(null);
        localStorage.removeItem('loggedInUser');
    };

    return (
        <>
            {!user && <Login handleLogin={handleLogin} />}
            {user === 'admin' && <AdminDashboard changeUser={handleLogout} />}
            {user === 'employee' && (
                <EmployeeDashboard
                    changeUser={handleLogout}
                    data={loggedInUserData}
                />
            )}
        </>
    );
};

export default App;