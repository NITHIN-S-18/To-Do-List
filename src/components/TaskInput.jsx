import React, { useState, useEffect } from "react";

const TaskInput = ({ addTask, editTask, taskToEdit, clearEdit }) => {
  const [task, setTask] = useState("");

  useEffect(() => {
    if (taskToEdit) setTask(taskToEdit.text);
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;

    if (taskToEdit) {
      editTask(taskToEdit.id, task);
      clearEdit();
    } else {
      addTask(task);
    }
    setTask("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 justify-center mb-8"
    >
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task..."
        className="border-2 border-purple-300 rounded-xl px-4 py-2 w-full sm:w-3/4 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-5 py-2 rounded-xl shadow-md hover:scale-105 transition-transform duration-200"
      >
        {taskToEdit ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default TaskInput;
