import React from "react";

const Navbar = ({ showCompleted, toggleCompletedView }) => {
  return (
    <nav className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white p-4 shadow-lg flex justify-between items-center">
      <h1 className="text-3xl sm:text-4xl font-extrabold cursor-pointer tracking-wide hover:text-yellow-100 transition duration-300">
        To-Do List
      </h1>

      <button
        onClick={toggleCompletedView}
        className="
          px-5 sm:px-6 py-2 rounded-full font-semibold text-white shadow-lg
          bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500
          hover:from-cyan-300 hover:via-blue-400 hover:to-indigo-400
          transform hover:-translate-y-1 hover:scale-105
          transition-all duration-300 ease-in-out
        "
      >
        {showCompleted ? "Active Tasks" : "Completed Tasks"}
      </button>
    </nav>
  );
};

export default Navbar;
