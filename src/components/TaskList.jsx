import React from "react";
import { FiEdit, FiTrash2, FiCheck, FiRotateCcw } from "react-icons/fi";

const TaskList = ({
  tasks = [],
  deleteTask,
  editTaskClick,
  toggleComplete,
}) => {
  return (
    <div className="space-y-4">
      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center italic mt-4">
          No tasks here! 🎉
        </p>
      ) : (
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`flex flex-col sm:flex-row justify-between items-center p-4 rounded-2xl shadow-md transition-transform duration-300 hover:scale-105 ${
                task.completed
                  ? "opacity-70 line-through bg-gray-100"
                  : "bg-white border-2 border-purple-300 hover:border-purple-500"
              }`}
            >
              <span className="break-words text-gray-800 font-medium">
                {task.text}
              </span>

              <div className="flex gap-2 mt-3 sm:mt-0">
                {task.completed ? (
                  <>
                    {/* Undo Button */}
                    <button
                      onClick={() => toggleComplete(task.id)}
                      className="px-3 py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow hover:scale-105 transition-transform duration-200"
                    >
                      <FiRotateCcw size={18} />
                    </button>

                    {/* Delete Button */}
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="px-3 py-2 rounded-lg bg-gradient-to-r from-red-500 to-red-700 text-white shadow hover:scale-105 transition-transform duration-200"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </>
                ) : (
                  <>
                    {/* Edit Button */}
                    <button
                      onClick={() => editTaskClick(task)}
                      className="px-3 py-2 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow hover:scale-105 transition-transform duration-200"
                    >
                      <FiEdit size={18} />
                    </button>

                    {/* Complete Button */}
                    <button
                      onClick={() => toggleComplete(task.id)}
                      className="px-3 py-2 rounded-lg bg-gradient-to-r from-green-400 to-green-600 text-white shadow hover:scale-105 transition-transform duration-200"
                    >
                      <FiCheck size={18} />
                    </button>

                    {/* Delete Button */}
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="px-3 py-2 rounded-lg bg-gradient-to-r from-red-500 to-red-700 text-white shadow hover:scale-105 transition-transform duration-200"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
