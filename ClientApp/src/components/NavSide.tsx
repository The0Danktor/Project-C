import React from "react";
import { Link } from "react-router-dom";

/* <div className="bg-white dark:bg-gray-900 flex items-center justify-center w-screen h-screen flex-col">
        <div className="bg-white border rounded-md border-gray-300 flex text-gray-700 text-sm font-medium py-0.5 px-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 m-2">
          homePage
        </div>
        <button
          className="bg-white border rounded-md border-gray-300 flex text-gray-700 text-sm font-medium py-0.5 px-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 m-2"
          onClick={toggleLightMode}
        >
          light
        </button>
        <button
          className="bg-white border rounded-md border-gray-300 flex text-gray-700 text-sm font-medium py-0.5 px-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 m-2"
          onClick={toggleDarkMode}
        >
          dark
        </button>
      </div> */

export function NavSide() {
  const root = document.getElementsByTagName("html")[0];
  const toggleDarkMode = () => {
    root.setAttribute("class", "dark");
    localStorage.theme = "dark";
  };
  const toggleLightMode = () => {
    root.removeAttribute("class");
    localStorage.theme = "light";
  };
  return (
    <div className="absolute left-0 h-screen w-1/5 flex flex-col justify-center bg-white dark:bg-blue-400">
      <div className="absolute top-0">
        <button
          onClick={toggleDarkMode}
          className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-red-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6"
        >
          <h1>Dark</h1>
        </button>
        <button
          onClick={toggleLightMode}
          className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-red-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6"
        >
          Light
        </button>
      </div>
    </div>
  );
}
