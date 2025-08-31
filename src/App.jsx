import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) =>
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));
  const editTask = (id, newText) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, text: newText } : t)));
  const editTaskClick = (task) => setTaskToEdit(task);
  const clearEdit = () => setTaskToEdit(null);
  const toggleComplete = (id) =>
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  const toggleCompletedView = () => setShowCompleted(!showCompleted);

  const filteredTasks = showCompleted
    ? tasks.filter((t) => t.completed)
    : tasks.filter((t) => !t.completed);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50">
      <Navbar
        showCompleted={showCompleted}
        toggleCompletedView={toggleCompletedView}
      />
      <main className="max-w-3xl mx-auto px-4 mt-8">
        <TaskInput
          addTask={addTask}
          editTask={editTask}
          taskToEdit={taskToEdit}
          clearEdit={clearEdit}
        />
        <TaskList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          editTaskClick={editTaskClick}
          toggleComplete={toggleComplete}
        />
      </main>
    </div>
  );
};

export default App;
