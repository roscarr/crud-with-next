"use client";
import { useLocalstorage } from "@/hooks/useLocalstorage";
import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
export const TaskContext = createContext();
export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTask must use within a provider");
  return context;
};

export const TasksProvider = ({ children }) => {
  //const [tasks, setTasks] = useState([]);
  const [tasks, setTasks] = useLocalstorage("tasks", []);

  const deleteTask = (id) => {
    setTasks([...tasks.filter((task) => task.id !== id)]);
  };
  const createTask = (title, descripcion) => {
    setTasks([...tasks, { title, descripcion, id: uuid() }]);
  };
  const updateTask = (id, newData) => {
    setTasks([
      ...tasks.map((task) => (task.id === id ? { ...task, ...newData } : task)),
    ]);
  };
  return (
    <TaskContext.Provider value={{ tasks, deleteTask, createTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};
