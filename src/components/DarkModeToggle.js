import React from 'react';

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button 
      onClick={() => setDarkMode(!darkMode)}
      className={`w-14 h-7 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 cursor-pointer transition-colors duration-500`}
    >
      <div 
        className={`bg-white dark:bg-black w-5 h-5 rounded-full shadow-md transform transition-transform duration-500 ${darkMode ? 'translate-x-7' : ''}`}
      ></div>
    </button>
  );
}

export default DarkModeToggle;