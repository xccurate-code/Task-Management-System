import React, { createContext, useState, useEffect } from 'react';
import { getLocalStorage } from '../../utils/localStorage';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const data = getLocalStorage();
    setEmployees(data.employees);
  }, []);

  const createTask = (newTask) => {
    const updatedEmployees = employees.map(emp => {
      if (emp.firstname === newTask.asignTo) {
        return {
          ...emp,
          taskCounts: {
            ...emp.taskCounts,
            newTask: (emp.taskCounts.newTask || 0) + 1,
            active: (emp.taskCounts.active || 0) + 1
          },
          tasks: [...emp.tasks, {
            ...newTask,
            active: true,
            newTask: true,
            completed: false,
            failed: false
          }]
        };
      }
      return emp;
    });

    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  const getEmployeeTasks = (firstname) => {
    const employee = employees.find(emp => emp.firstname === firstname);
    return employee ? employee.tasks : [];
  };

  return (
    <TaskContext.Provider value={{ employees, createTask, getEmployeeTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext