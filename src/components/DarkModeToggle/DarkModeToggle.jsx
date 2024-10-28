import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDarkMode, toggleDarkMode } from '../../redux/slice';

const DarkModeToggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
      <button
        onClick={handleToggle}
        className={`relative w-24 h-10 flex items-center rounded-full p-1 transition duration-500  max-w-24
          ${darkMode ? 'bg-white': 'bg-myprimary'} py-2`}
      >
       {/* sun  */}
        <div className={`absolute left-4 w-6 h-6 transition duration-500 opacity-100 dark:opacity-0 `}  >
            <img src="/src/assets/sun.svg" alt="light" />
        </div>
        {/* moon  */}
        <div className={`absolute right-4 w-6 h-6 transition duration-500
          ${darkMode? 'opacity-100': 'opacity-0'}`}>
            <img src="/src/assets/moon.svg" alt="dark" />
        </div>
        <div
          className={`w-6 h-6 rounded-full transform transition duration-500 
         ${darkMode ? 'translate-x-4 bg-myprimary' : 'translate-x-12 bg-white '} `}>
        </div>
      </button>
  );
};

export default DarkModeToggle;
